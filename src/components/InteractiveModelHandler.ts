import { InteractiveModelContent, InteractiveModelType } from '../types/course';

type StateRecord = Record<string, number>;
type ChartDataPoint = Record<string, number>;

export class InteractiveModelHandler {
  private models: Map<string, InteractiveModelContent> = new Map();
  private states: Map<string, StateRecord> = new Map();
  private chartContainers: Map<string, HTMLElement> = new Map();

  registerModel(model: InteractiveModelContent): void {
    this.models.set(model.id, model);

    // Initialize state with default values
    const initialState: StateRecord = {};
    model.controls.forEach(control => {
      initialState[control.key] = control.default;
    });
    this.states.set(model.id, initialState);
  }

  reset(): void {
    this.models.clear();
    this.states.clear();
    this.chartContainers.clear();
  }

  attachEventListeners(container: HTMLElement): void {
    // Attach slider/input listeners
    const inputs = container.querySelectorAll('.model-control-input');
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        const modelId = target.dataset.modelId;
        const key = target.dataset.controlKey;

        if (modelId && key) {
          this.updateState(modelId, key, parseFloat(target.value));
        }
      });
    });

    // Store chart containers for rendering
    const chartElements = container.querySelectorAll('.model-chart-container');
    chartElements.forEach(chart => {
      const modelId = (chart as HTMLElement).dataset.modelId;
      if (modelId) {
        this.chartContainers.set(modelId, chart as HTMLElement);
      }
    });

    // Initial calculation and render for all models
    this.models.forEach((_, modelId) => {
      this.calculateAndRender(modelId);
    });
  }

  private updateState(modelId: string, key: string, value: number): void {
    const state = this.states.get(modelId);
    if (state) {
      state[key] = value;

      // Update displayed value
      const valueDisplay = document.querySelector(
        `[data-model-id="${modelId}"][data-control-key="${key}"].model-control-value`
      );
      if (valueDisplay) {
        const model = this.models.get(modelId);
        const control = model?.controls.find(c => c.key === key);
        const unit = control?.unit || '';
        valueDisplay.textContent = `${value}${unit}`;
      }

      this.calculateAndRender(modelId);
    }
  }

  private calculateAndRender(modelId: string): void {
    const model = this.models.get(modelId);
    const state = this.states.get(modelId);

    if (!model || !state) return;

    // Calculate outputs based on model type
    const outputs = this.calculateOutputs(model.modelType, state);

    // Update output displays
    this.updateOutputDisplays(modelId, model, outputs);

    // Generate and render chart data
    this.renderCharts(modelId, model, state);
  }

  private calculateOutputs(modelType: InteractiveModelType, state: StateRecord): StateRecord {
    switch (modelType) {
      case 'bond-pricing':
        return this.calculateBondPricing(state);
      case 'capm-sml':
        return this.calculateCapmSml(state);
      case 'portfolio-two-asset':
        return this.calculatePortfolio(state);
      default:
        return {};
    }
  }

  // ============== BOND PRICING CALCULATIONS ==============
  private calculateBondPricing(state: StateRecord): StateRecord {
    const { faceValue, couponRate, ytm, maturity, frequency } = state;

    const couponPayment = (faceValue * couponRate / 100) / frequency;
    const periodsPerYear = frequency;
    const totalPeriods = maturity * periodsPerYear;
    const periodRate = ytm / 100 / periodsPerYear;

    // Bond price
    let price = 0;
    for (let t = 1; t <= totalPeriods; t++) {
      price += couponPayment / Math.pow(1 + periodRate, t);
    }
    price += faceValue / Math.pow(1 + periodRate, totalPeriods);

    // Macaulay Duration
    let weightedTime = 0;
    for (let t = 1; t <= totalPeriods; t++) {
      const pv = couponPayment / Math.pow(1 + periodRate, t);
      weightedTime += (t / periodsPerYear) * pv;
    }
    weightedTime += maturity * (faceValue / Math.pow(1 + periodRate, totalPeriods));
    const macaulayDuration = weightedTime / price;

    // Modified Duration
    const modifiedDuration = macaulayDuration / (1 + periodRate);

    // Convexity
    let convexitySum = 0;
    for (let t = 1; t <= totalPeriods; t++) {
      const pv = couponPayment / Math.pow(1 + periodRate, t);
      convexitySum += (t * (t + 1) / (periodsPerYear * periodsPerYear)) * pv;
    }
    convexitySum += (totalPeriods * (totalPeriods + 1) / (periodsPerYear * periodsPerYear)) *
                   (faceValue / Math.pow(1 + periodRate, totalPeriods));
    const convexity = convexitySum / (price * Math.pow(1 + periodRate, 2));

    // DV01 (Dollar Value of 01 - price change for 1bp yield change)
    const dv01 = modifiedDuration * price * 0.0001;

    return {
      price,
      macaulayDuration,
      modifiedDuration,
      convexity,
      dv01
    };
  }

  // ============== CAPM/SML CALCULATIONS ==============
  private calculateCapmSml(state: StateRecord): StateRecord {
    const { riskFreeRate, marketReturn, beta, assetReturn } = state;

    const rf = riskFreeRate / 100;
    const rm = marketReturn / 100;
    const marketPremium = rm - rf;

    // Expected return using CAPM
    const expectedReturn = rf + beta * marketPremium;

    // Alpha (Jensen's Alpha)
    const alpha = (assetReturn / 100) - expectedReturn;

    // Market Sharpe Ratio (assuming market std dev of ~15%)
    const marketStdDev = 0.15;
    const sharpeRatio = marketPremium / marketStdDev;

    return {
      expectedReturn: expectedReturn * 100,
      alpha: alpha * 100,
      marketPremium: marketPremium * 100,
      sharpeRatio
    };
  }

  // ============== PORTFOLIO CALCULATIONS ==============
  private calculatePortfolio(state: StateRecord): StateRecord {
    const {
      return1, return2,
      std1, std2,
      correlation,
      weight1,
      riskFreeRate
    } = state;

    const r1 = return1 / 100;
    const r2 = return2 / 100;
    const s1 = std1 / 100;
    const s2 = std2 / 100;
    const rho = correlation;
    const w1 = weight1 / 100;
    const w2 = 1 - w1;
    const rf = riskFreeRate / 100;

    // Portfolio return
    const portReturn = w1 * r1 + w2 * r2;

    // Portfolio variance and std dev
    const covariance = rho * s1 * s2;
    const portVariance = w1 * w1 * s1 * s1 + w2 * w2 * s2 * s2 + 2 * w1 * w2 * covariance;
    const portStd = Math.sqrt(portVariance);

    // Minimum variance portfolio weights
    const minVarWeight1 = (s2 * s2 - covariance) / (s1 * s1 + s2 * s2 - 2 * covariance);
    const minVarWeight2 = 1 - minVarWeight1;

    // Minimum variance portfolio stats
    const minVarReturn = minVarWeight1 * r1 + minVarWeight2 * r2;
    const minVarVariance = minVarWeight1 * minVarWeight1 * s1 * s1 +
                          minVarWeight2 * minVarWeight2 * s2 * s2 +
                          2 * minVarWeight1 * minVarWeight2 * covariance;
    const minVarStd = Math.sqrt(minVarVariance);

    // Tangency portfolio (optimal risky portfolio)
    const excessReturn1 = r1 - rf;
    const excessReturn2 = r2 - rf;
    const tangencyNumerator1 = excessReturn1 * s2 * s2 - excessReturn2 * covariance;
    const tangencyNumerator2 = excessReturn2 * s1 * s1 - excessReturn1 * covariance;
    const tangencyDenominator = tangencyNumerator1 + tangencyNumerator2;

    let tangencyWeight1 = tangencyDenominator !== 0 ? tangencyNumerator1 / tangencyDenominator : 0.5;
    tangencyWeight1 = Math.max(0, Math.min(1, tangencyWeight1));
    const tangencyWeight2 = 1 - tangencyWeight1;

    const tangencyReturn = tangencyWeight1 * r1 + tangencyWeight2 * r2;
    const tangencyVariance = tangencyWeight1 * tangencyWeight1 * s1 * s1 +
                            tangencyWeight2 * tangencyWeight2 * s2 * s2 +
                            2 * tangencyWeight1 * tangencyWeight2 * covariance;
    const tangencyStd = Math.sqrt(tangencyVariance);

    // Sharpe ratio of current portfolio
    const sharpeRatio = portStd > 0 ? (portReturn - rf) / portStd : 0;

    // Sharpe ratio of tangency portfolio
    const tangencySharpe = tangencyStd > 0 ? (tangencyReturn - rf) / tangencyStd : 0;

    return {
      portReturn: portReturn * 100,
      portStd: portStd * 100,
      sharpeRatio,
      minVarWeight1: minVarWeight1 * 100,
      minVarReturn: minVarReturn * 100,
      minVarStd: minVarStd * 100,
      tangencyWeight1: tangencyWeight1 * 100,
      tangencyReturn: tangencyReturn * 100,
      tangencyStd: tangencyStd * 100,
      tangencySharpe
    };
  }

  private updateOutputDisplays(modelId: string, model: InteractiveModelContent, outputs: StateRecord): void {
    model.outputs.forEach(output => {
      const element = document.querySelector(
        `.model-output-value[data-model-id="${modelId}"][data-output-key="${output.key}"]`
      );
      if (element) {
        const value = outputs[output.key];
        const precision = output.precision ?? 2;
        const unit = output.unit || '';

        if (value !== undefined && !isNaN(value)) {
          element.textContent = `${value.toFixed(precision)}${unit}`;
        } else {
          element.textContent = '-';
        }
      }
    });
  }

  private renderCharts(modelId: string, model: InteractiveModelContent, state: StateRecord): void {
    const chartContainer = document.querySelector(`.model-charts[data-model-id="${modelId}"]`);
    if (!chartContainer) return;

    // Generate chart data based on model type
    const chartData = this.generateChartData(model.modelType, state);

    // Render each chart
    model.charts.forEach((chartConfig, index) => {
      const chartElement = chartContainer.querySelector(`[data-chart-index="${index}"]`);
      if (chartElement) {
        this.renderSingleChart(chartElement as HTMLElement, chartConfig, chartData, model.modelType);
      }
    });
  }

  private generateChartData(modelType: InteractiveModelType, state: StateRecord): ChartDataPoint[] {
    switch (modelType) {
      case 'bond-pricing':
        return this.generateBondChartData(state);
      case 'capm-sml':
        return this.generateSmlChartData(state);
      case 'portfolio-two-asset':
        return this.generatePortfolioChartData(state);
      default:
        return [];
    }
  }

  private generateBondChartData(state: StateRecord): ChartDataPoint[] {
    const { faceValue, couponRate, maturity, frequency } = state;
    const data: ChartDataPoint[] = [];

    // Generate price-yield curve
    for (let ytm = 0.5; ytm <= 15; ytm += 0.5) {
      const couponPayment = (faceValue * couponRate / 100) / frequency;
      const periodsPerYear = frequency;
      const totalPeriods = maturity * periodsPerYear;
      const periodRate = ytm / 100 / periodsPerYear;

      let price = 0;
      for (let t = 1; t <= totalPeriods; t++) {
        price += couponPayment / Math.pow(1 + periodRate, t);
      }
      price += faceValue / Math.pow(1 + periodRate, totalPeriods);

      data.push({
        yield: ytm,
        price: price
      });
    }

    return data;
  }

  private generateSmlChartData(state: StateRecord): ChartDataPoint[] {
    const { riskFreeRate, marketReturn, beta, assetReturn } = state;
    const rf = riskFreeRate / 100;
    const rm = marketReturn / 100;
    const data: ChartDataPoint[] = [];

    // Generate SML line
    for (let b = -0.5; b <= 2.5; b += 0.1) {
      const expectedReturn = rf + b * (rm - rf);
      data.push({
        beta: b,
        expectedReturn: expectedReturn * 100,
        smlReturn: expectedReturn * 100
      });
    }

    // Add the current asset point
    const assetExpected = (rf + beta * (rm - rf)) * 100;
    data.push({
      beta,
      actualReturn: assetReturn,
      expectedReturn: assetExpected,
      isAsset: 1
    });

    return data;
  }

  private generatePortfolioChartData(state: StateRecord): ChartDataPoint[] {
    const { return1, return2, std1, std2, correlation, riskFreeRate } = state;
    const r1 = return1 / 100;
    const r2 = return2 / 100;
    const s1 = std1 / 100;
    const s2 = std2 / 100;
    const rho = correlation;
    const rf = riskFreeRate / 100;
    const covariance = rho * s1 * s2;

    const data: ChartDataPoint[] = [];

    // Generate efficient frontier
    for (let w1 = 0; w1 <= 1; w1 += 0.02) {
      const w2 = 1 - w1;
      const portReturn = w1 * r1 + w2 * r2;
      const portVariance = w1 * w1 * s1 * s1 + w2 * w2 * s2 * s2 + 2 * w1 * w2 * covariance;
      const portStd = Math.sqrt(portVariance);

      data.push({
        std: portStd * 100,
        return: portReturn * 100,
        weight1: w1 * 100
      });
    }

    // Calculate tangency portfolio for CML
    const excessReturn1 = r1 - rf;
    const excessReturn2 = r2 - rf;
    const tangencyNumerator1 = excessReturn1 * s2 * s2 - excessReturn2 * covariance;
    const tangencyNumerator2 = excessReturn2 * s1 * s1 - excessReturn1 * covariance;
    const tangencyDenominator = tangencyNumerator1 + tangencyNumerator2;

    let tangencyWeight1 = tangencyDenominator !== 0 ? tangencyNumerator1 / tangencyDenominator : 0.5;
    tangencyWeight1 = Math.max(0, Math.min(1, tangencyWeight1));
    const tangencyWeight2 = 1 - tangencyWeight1;

    const tangencyReturn = tangencyWeight1 * r1 + tangencyWeight2 * r2;
    const tangencyVariance = tangencyWeight1 * tangencyWeight1 * s1 * s1 +
                            tangencyWeight2 * tangencyWeight2 * s2 * s2 +
                            2 * tangencyWeight1 * tangencyWeight2 * covariance;
    const tangencyStd = Math.sqrt(tangencyVariance);

    // Add CML points
    const sharpe = tangencyStd > 0 ? (tangencyReturn - rf) / tangencyStd : 0;
    for (let std = 0; std <= Math.max(s1, s2) * 1.5; std += 0.01) {
      const cmlReturn = rf + sharpe * std;
      data.push({
        std: std * 100,
        cmlReturn: cmlReturn * 100
      });
    }

    return data;
  }

  private renderSingleChart(
    container: HTMLElement,
    config: any,
    data: ChartDataPoint[],
    modelType: InteractiveModelType
  ): void {
    // Clear previous content
    container.innerHTML = '';

    // Create canvas for Chart.js rendering
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '300px';
    container.appendChild(canvas);

    // Use a simpler SVG-based chart since we're in vanilla TS
    this.renderSvgChart(container, config, data, modelType);
  }

  private renderSvgChart(
    container: HTMLElement,
    config: any,
    data: ChartDataPoint[],
    modelType: InteractiveModelType
  ): void {
    container.innerHTML = '';

    const width = container.clientWidth || 400;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 60 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Determine axis ranges based on model type
    let xLabel: string, yLabel: string;
    let xMin: number, xMax: number, yMin: number, yMax: number;

    if (modelType === 'bond-pricing') {
      xLabel = 'Rente (%)';
      yLabel = 'Obligasjonspris (kr)';
      xMin = 0;
      xMax = 15;
      const prices = data.filter(d => d.price !== undefined).map(d => d.price);
      yMin = Math.min(...prices) * 0.9;
      yMax = Math.max(...prices) * 1.1;
    } else if (modelType === 'capm-sml') {
      xLabel = 'Beta';
      yLabel = 'Forventet avkastning (%)';
      xMin = -0.5;
      xMax = 2.5;
      yMin = 0;
      yMax = 20;
    } else {
      xLabel = 'Risiko (Standardavvik %)';
      yLabel = 'Forventet avkastning (%)';
      const stds = data.filter(d => d.std !== undefined).map(d => d.std);
      const returns = data.filter(d => d.return !== undefined || d.cmlReturn !== undefined)
                         .map(d => d.return ?? d.cmlReturn);
      xMin = 0;
      xMax = Math.max(...stds) * 1.1;
      yMin = Math.min(...returns.filter(r => r !== undefined)) * 0.9;
      yMax = Math.max(...returns.filter(r => r !== undefined)) * 1.1;
    }

    // Scale functions
    const scaleX = (val: number) => margin.left + ((val - xMin) / (xMax - xMin)) * chartWidth;
    const scaleY = (val: number) => height - margin.bottom - ((val - yMin) / (yMax - yMin)) * chartHeight;

    // Create SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    svg.style.fontFamily = 'Inter, system-ui, sans-serif';

    // Add grid lines
    const gridGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    gridGroup.setAttribute('class', 'grid');

    // Vertical grid lines
    const xTicks = 5;
    for (let i = 0; i <= xTicks; i++) {
      const x = scaleX(xMin + (i / xTicks) * (xMax - xMin));
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', x.toString());
      line.setAttribute('y1', margin.top.toString());
      line.setAttribute('x2', x.toString());
      line.setAttribute('y2', (height - margin.bottom).toString());
      line.setAttribute('stroke', '#e5e7eb');
      line.setAttribute('stroke-width', '1');
      gridGroup.appendChild(line);
    }

    // Horizontal grid lines
    const yTicks = 5;
    for (let i = 0; i <= yTicks; i++) {
      const y = scaleY(yMin + (i / yTicks) * (yMax - yMin));
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', margin.left.toString());
      line.setAttribute('y1', y.toString());
      line.setAttribute('x2', (width - margin.right).toString());
      line.setAttribute('y2', y.toString());
      line.setAttribute('stroke', '#e5e7eb');
      line.setAttribute('stroke-width', '1');
      gridGroup.appendChild(line);
    }
    svg.appendChild(gridGroup);

    // Draw data
    if (modelType === 'bond-pricing') {
      // Price-yield curve
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const points = data
        .filter(d => d.price !== undefined)
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.yield)} ${scaleY(d.price)}`)
        .join(' ');
      path.setAttribute('d', points);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', '#10b981');
      path.setAttribute('stroke-width', '2');
      svg.appendChild(path);
    } else if (modelType === 'capm-sml') {
      // SML line
      const smlData = data.filter(d => d.smlReturn !== undefined && d.isAsset === undefined);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const points = smlData
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.beta)} ${scaleY(d.smlReturn)}`)
        .join(' ');
      path.setAttribute('d', points);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', '#3b82f6');
      path.setAttribute('stroke-width', '2');
      svg.appendChild(path);

      // Asset point
      const assetData = data.find(d => d.isAsset === 1);
      if (assetData) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', scaleX(assetData.beta).toString());
        circle.setAttribute('cy', scaleY(assetData.actualReturn ?? 0).toString());
        circle.setAttribute('r', '6');
        circle.setAttribute('fill', assetData.actualReturn! > assetData.expectedReturn! ? '#10b981' : '#ef4444');
        svg.appendChild(circle);
      }
    } else if (modelType === 'portfolio-two-asset') {
      // Efficient frontier
      const frontierData = data.filter(d => d.return !== undefined);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const sortedData = frontierData.sort((a, b) => a.std - b.std);
      const points = sortedData
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.std)} ${scaleY(d.return)}`)
        .join(' ');
      path.setAttribute('d', points);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', '#8b5cf6');
      path.setAttribute('stroke-width', '2');
      svg.appendChild(path);

      // CML line
      const cmlData = data.filter(d => d.cmlReturn !== undefined);
      if (cmlData.length > 0) {
        const cmlPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const cmlSorted = cmlData.sort((a, b) => a.std - b.std);
        const cmlPoints = cmlSorted
          .filter(d => d.std <= xMax && d.cmlReturn <= yMax)
          .map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.std)} ${scaleY(d.cmlReturn)}`)
          .join(' ');
        cmlPath.setAttribute('d', cmlPoints);
        cmlPath.setAttribute('fill', 'none');
        cmlPath.setAttribute('stroke', '#f59e0b');
        cmlPath.setAttribute('stroke-width', '2');
        cmlPath.setAttribute('stroke-dasharray', '5,5');
        svg.appendChild(cmlPath);
      }
    }

    // Add axes
    const axesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // X-axis
    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xAxis.setAttribute('x1', margin.left.toString());
    xAxis.setAttribute('y1', (height - margin.bottom).toString());
    xAxis.setAttribute('x2', (width - margin.right).toString());
    xAxis.setAttribute('y2', (height - margin.bottom).toString());
    xAxis.setAttribute('stroke', '#374151');
    xAxis.setAttribute('stroke-width', '1');
    axesGroup.appendChild(xAxis);

    // Y-axis
    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxis.setAttribute('x1', margin.left.toString());
    yAxis.setAttribute('y1', margin.top.toString());
    yAxis.setAttribute('x2', margin.left.toString());
    yAxis.setAttribute('y2', (height - margin.bottom).toString());
    yAxis.setAttribute('stroke', '#374151');
    yAxis.setAttribute('stroke-width', '1');
    axesGroup.appendChild(yAxis);

    // X-axis labels
    for (let i = 0; i <= xTicks; i++) {
      const val = xMin + (i / xTicks) * (xMax - xMin);
      const x = scaleX(val);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', x.toString());
      text.setAttribute('y', (height - margin.bottom + 20).toString());
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', '#6b7280');
      text.setAttribute('font-size', '11');
      text.textContent = val.toFixed(1);
      axesGroup.appendChild(text);
    }

    // Y-axis labels
    for (let i = 0; i <= yTicks; i++) {
      const val = yMin + (i / yTicks) * (yMax - yMin);
      const y = scaleY(val);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', (margin.left - 10).toString());
      text.setAttribute('y', (y + 4).toString());
      text.setAttribute('text-anchor', 'end');
      text.setAttribute('fill', '#6b7280');
      text.setAttribute('font-size', '11');
      text.textContent = val.toFixed(1);
      axesGroup.appendChild(text);
    }

    // Axis titles
    const xTitle = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    xTitle.setAttribute('x', (width / 2).toString());
    xTitle.setAttribute('y', (height - 5).toString());
    xTitle.setAttribute('text-anchor', 'middle');
    xTitle.setAttribute('fill', '#374151');
    xTitle.setAttribute('font-size', '12');
    xTitle.textContent = xLabel;
    axesGroup.appendChild(xTitle);

    const yTitle = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    yTitle.setAttribute('x', '15');
    yTitle.setAttribute('y', (height / 2).toString());
    yTitle.setAttribute('text-anchor', 'middle');
    yTitle.setAttribute('fill', '#374151');
    yTitle.setAttribute('font-size', '12');
    yTitle.setAttribute('transform', `rotate(-90, 15, ${height / 2})`);
    yTitle.textContent = yLabel;
    axesGroup.appendChild(yTitle);

    svg.appendChild(axesGroup);

    // Add title
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    title.setAttribute('x', (width / 2).toString());
    title.setAttribute('y', '15');
    title.setAttribute('text-anchor', 'middle');
    title.setAttribute('fill', '#1f2937');
    title.setAttribute('font-size', '13');
    title.setAttribute('font-weight', '500');
    title.textContent = config.title;
    svg.appendChild(title);

    container.appendChild(svg);
  }
}
