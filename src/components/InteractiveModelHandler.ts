import { InteractiveModelContent, InteractiveModelType } from '../types/course';

type StateRecord = Record<string, number>;
type ChartDataPoint = Record<string, number>;

// Asset labels for portfolio builder chart (indexed by assetIndex)
const ASSET_LABELS = ['Aksjer', 'Obligasjoner', 'Eiendom', 'Bankinnskudd'];

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
      case 'portfolio-builder':
        return this.calculatePortfolioBuilder(state);
      case 'duration-simulator':
        return this.calculateDurationSimulator(state);
      case 'dupont-analysis':
        return this.calculateDupontAnalysis(state);
      case 'inflation-visualizer':
        return this.calculateInflationVisualizer(state);
      case 'sensitivity-spider':
        return this.calculateSensitivitySpider(state);
      case 'capital-structure':
        return this.calculateCapitalStructure(state);
      case 'yield-curve':
        return this.calculateYieldCurve(state);
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

  // ============== PORTFOLIO BUILDER (4 ASSET CLASSES) ==============
  private calculatePortfolioBuilder(state: StateRecord): StateRecord {
    const { stocks, bonds, realestate, cash } = state;

    // Normalize weights to ensure they sum to 100%
    const total = stocks + bonds + realestate + cash;
    const w = {
      stocks: (stocks / total) || 0,
      bonds: (bonds / total) || 0,
      realestate: (realestate / total) || 0,
      cash: (cash / total) || 0
    };

    // Historical Norwegian market data (annual returns and volatilities)
    const assets = {
      stocks: { return: 0.08, vol: 0.18 },      // OSEBX-like
      bonds: { return: 0.035, vol: 0.05 },      // Norwegian bonds
      realestate: { return: 0.06, vol: 0.12 },  // Real estate funds
      cash: { return: 0.015, vol: 0.01 }        // Bank deposits
    };

    // Correlation matrix (symmetric)
    const corr = {
      stocks_bonds: 0.2,
      stocks_realestate: 0.5,
      stocks_cash: 0.0,
      bonds_realestate: 0.3,
      bonds_cash: 0.1,
      realestate_cash: 0.0
    };

    // Portfolio expected return
    const portReturn =
      w.stocks * assets.stocks.return +
      w.bonds * assets.bonds.return +
      w.realestate * assets.realestate.return +
      w.cash * assets.cash.return;

    // Portfolio variance (full covariance calculation)
    const variance =
      // Variance terms
      Math.pow(w.stocks * assets.stocks.vol, 2) +
      Math.pow(w.bonds * assets.bonds.vol, 2) +
      Math.pow(w.realestate * assets.realestate.vol, 2) +
      Math.pow(w.cash * assets.cash.vol, 2) +
      // Covariance terms (2 * w_i * w_j * sigma_i * sigma_j * rho_ij)
      2 * w.stocks * w.bonds * assets.stocks.vol * assets.bonds.vol * corr.stocks_bonds +
      2 * w.stocks * w.realestate * assets.stocks.vol * assets.realestate.vol * corr.stocks_realestate +
      2 * w.stocks * w.cash * assets.stocks.vol * assets.cash.vol * corr.stocks_cash +
      2 * w.bonds * w.realestate * assets.bonds.vol * assets.realestate.vol * corr.bonds_realestate +
      2 * w.bonds * w.cash * assets.bonds.vol * assets.cash.vol * corr.bonds_cash +
      2 * w.realestate * w.cash * assets.realestate.vol * assets.cash.vol * corr.realestate_cash;

    const portVol = Math.sqrt(variance);

    // Sharpe ratio (using cash rate as risk-free)
    const sharpeRatio = portVol > 0 ? (portReturn - assets.cash.return) / portVol : 0;

    // Calculate 10-year projection
    const initialValue = 100000;
    const projectedValue = initialValue * Math.pow(1 + portReturn, 10);

    // Value at Risk (95% confidence, 1-year)
    const var95 = initialValue * (portReturn - 1.645 * portVol);

    return {
      portfolioReturn: portReturn * 100,
      portfolioVol: portVol * 100,
      sharpeRatio,
      projectedValue,
      valueAtRisk: Math.max(0, -var95),
      totalWeight: total
    };
  }

  // ============== DURATION SIMULATOR ==============
  private calculateDurationSimulator(state: StateRecord): StateRecord {
    const { couponRate, ytm, maturity, rateChange } = state;
    const faceValue = 1000;
    // Annual coupon assumed

    // Calculate bond price
    const couponPayment = faceValue * (couponRate / 100);
    const rate = ytm / 100;

    let price = 0;
    let weightedTime = 0;

    for (let t = 1; t <= maturity; t++) {
      const pvCoupon = couponPayment / Math.pow(1 + rate, t);
      price += pvCoupon;
      weightedTime += t * pvCoupon;
    }
    const pvPrincipal = faceValue / Math.pow(1 + rate, maturity);
    price += pvPrincipal;
    weightedTime += maturity * pvPrincipal;

    // Macaulay Duration
    const macaulayDuration = weightedTime / price;

    // Modified Duration
    const modifiedDuration = macaulayDuration / (1 + rate);

    // Price at new yield (with rate change)
    const newRate = (ytm + rateChange) / 100;
    let newPrice = 0;
    for (let t = 1; t <= maturity; t++) {
      newPrice += couponPayment / Math.pow(1 + newRate, t);
    }
    newPrice += faceValue / Math.pow(1 + newRate, maturity);

    // Actual price change
    const priceChange = newPrice - price;
    const priceChangePct = (priceChange / price) * 100;

    // Duration-estimated price change
    const estPriceChangePct = -modifiedDuration * rateChange;

    // Estimation error (due to convexity)
    const estimationError = priceChangePct - estPriceChangePct;

    return {
      price,
      macaulayDuration,
      modifiedDuration,
      newPrice,
      priceChange,
      priceChangePct,
      estPriceChangePct,
      estimationError
    };
  }

  // ============== DUPONT ANALYSIS ==============
  private calculateDupontAnalysis(state: StateRecord): StateRecord {
    const { netIncome, revenue, assets, equity } = state;

    // Profit Margin = Net Income / Revenue
    const profitMargin = revenue > 0 ? (netIncome / revenue) * 100 : 0;

    // Asset Turnover = Revenue / Assets
    const assetTurnover = assets > 0 ? revenue / assets : 0;

    // Equity Multiplier = Assets / Equity
    const equityMultiplier = equity > 0 ? assets / equity : 1;

    // Return on Assets = Net Income / Assets
    const roa = assets > 0 ? (netIncome / assets) * 100 : 0;

    // Return on Equity = Net Income / Equity (or Margin × Turnover × Multiplier)
    const roe = equity > 0 ? (netIncome / equity) * 100 : 0;

    // DuPont verification: ROE = Margin × Turnover × Multiplier
    const dupontRoe = (profitMargin / 100) * assetTurnover * equityMultiplier * 100;

    // Debt ratio
    const debtRatio = assets > 0 ? ((assets - equity) / assets) * 100 : 0;

    return {
      profitMargin,
      assetTurnover,
      equityMultiplier,
      roa,
      roe,
      dupontRoe,
      debtRatio
    };
  }

  // ============== INFLATION VISUALIZER ==============
  private calculateInflationVisualizer(state: StateRecord): StateRecord {
    const { amount, years, inflationRate } = state;

    // Real value after inflation
    const realValue = amount / Math.pow(1 + inflationRate / 100, years);

    // Purchasing power lost
    const purchasingPowerLost = amount - realValue;
    const purchasingPowerLostPct = (purchasingPowerLost / amount) * 100;

    // Nominal value needed to maintain purchasing power
    const nominalNeeded = amount * Math.pow(1 + inflationRate / 100, years);

    // Annual loss of purchasing power
    const annualLoss = amount * (inflationRate / 100);

    // Rule of 72: years to halve purchasing power
    const yearsToHalve = inflationRate > 0 ? 72 / inflationRate : 999;

    return {
      realValue,
      purchasingPowerLost,
      purchasingPowerLostPct,
      nominalNeeded,
      annualLoss,
      yearsToHalve
    };
  }

  // ============== SENSITIVITY SPIDER (TORNADO DIAGRAM) ==============
  private calculateSensitivitySpider(state: StateRecord): StateRecord {
    const { investment, annualCashFlow, discountRate, years, priceChange, volumeChange, costChange } = state;

    // Base case NPV calculation
    const r = discountRate / 100;
    let baseNPV = -investment;
    for (let t = 1; t <= years; t++) {
      baseNPV += annualCashFlow / Math.pow(1 + r, t);
    }

    // NPV with price change (affects revenue/cash flow)
    const priceAdjustedCF = annualCashFlow * (1 + priceChange / 100);
    let priceNPV = -investment;
    for (let t = 1; t <= years; t++) {
      priceNPV += priceAdjustedCF / Math.pow(1 + r, t);
    }

    // NPV with volume change
    const volumeAdjustedCF = annualCashFlow * (1 + volumeChange / 100);
    let volumeNPV = -investment;
    for (let t = 1; t <= years; t++) {
      volumeNPV += volumeAdjustedCF / Math.pow(1 + r, t);
    }

    // NPV with cost change (negative impact on cash flow)
    const costAdjustedCF = annualCashFlow * (1 - costChange / 100 * 0.6); // Costs are ~60% of revenue
    let costNPV = -investment;
    for (let t = 1; t <= years; t++) {
      costNPV += costAdjustedCF / Math.pow(1 + r, t);
    }

    // NPV with different discount rate
    const newRate = r * 1.2; // 20% higher discount rate
    let rateNPV = -investment;
    for (let t = 1; t <= years; t++) {
      rateNPV += annualCashFlow / Math.pow(1 + newRate, t);
    }

    // Sensitivity measures (change in NPV per 1% change in variable)
    const priceSensitivity = (priceNPV - baseNPV) / Math.abs(priceChange || 1);
    const volumeSensitivity = (volumeNPV - baseNPV) / Math.abs(volumeChange || 1);
    const costSensitivity = (costNPV - baseNPV) / Math.abs(costChange || 1);

    // Break-even points
    const breakEvenPrice = baseNPV > 0 ? -priceChange * (baseNPV / (priceNPV - baseNPV)) : 0;

    return {
      baseNPV,
      priceNPV,
      volumeNPV,
      costNPV,
      rateNPV,
      priceSensitivity,
      volumeSensitivity,
      costSensitivity,
      breakEvenPrice,
      priceImpact: priceNPV - baseNPV,
      volumeImpact: volumeNPV - baseNPV,
      costImpact: costNPV - baseNPV,
      rateImpact: rateNPV - baseNPV
    };
  }

  // ============== CAPITAL STRUCTURE SIMULATOR ==============
  private calculateCapitalStructure(state: StateRecord): StateRecord {
    const { equityBeta, riskFreeRate, marketPremium, taxRate, baseDebtRate, ebitda } = state;

    // Unlevered cost of equity (asset beta)
    const rf = riskFreeRate / 100;
    const mrp = marketPremium / 100;
    const tax = taxRate / 100;

    // Calculate WACC for different debt ratios
    // At 0% debt
    const costEquity0 = rf + equityBeta * mrp;
    const wacc0 = costEquity0;

    // Current values (50% debt as default scenario)
    const debtRatio = 0.5;
    const equityRatio = 1 - debtRatio;

    // Hamada equation: βL = βU × (1 + (1-T) × D/E)
    const unleveredBeta = equityBeta / (1 + (1 - tax) * (debtRatio / equityRatio));
    const leveragedBeta = unleveredBeta * (1 + (1 - tax) * (debtRatio / equityRatio));
    const costEquity = rf + leveragedBeta * mrp;

    // Cost of debt increases with leverage (simplified)
    const debtSpread = Math.max(0, (debtRatio - 0.3) * 0.05); // Spread increases after 30% debt
    const costDebt = baseDebtRate / 100 + debtSpread;
    const afterTaxCostDebt = costDebt * (1 - tax);

    // WACC
    const wacc = equityRatio * costEquity + debtRatio * afterTaxCostDebt;

    // Find optimal debt ratio (minimize WACC)
    let optimalDebt = 0;
    let minWACC = wacc0;
    for (let d = 0; d <= 0.8; d += 0.01) {
      const e = 1 - d;
      const levBeta = unleveredBeta * (1 + (1 - tax) * (d / e));
      const ce = rf + levBeta * mrp;
      const spread = Math.max(0, (d - 0.3) * 0.05) + (d > 0.6 ? Math.pow(d - 0.6, 2) * 0.5 : 0);
      const cd = baseDebtRate / 100 + spread;
      const atcd = cd * (1 - tax);
      const w = e * ce + d * atcd;
      if (w < minWACC) {
        minWACC = w;
        optimalDebt = d;
      }
    }

    // Enterprise value impact (simplified using EBITDA multiple)
    const evMultiple = 1 / wacc;
    const enterpriseValue = ebitda * evMultiple * 10; // Simplified

    return {
      costEquity: costEquity * 100,
      costDebt: costDebt * 100,
      afterTaxCostDebt: afterTaxCostDebt * 100,
      wacc: wacc * 100,
      optimalDebt: optimalDebt * 100,
      minWACC: minWACC * 100,
      unleveredBeta,
      leveragedBeta,
      taxShield: (debtRatio * costDebt * tax) * 100,
      enterpriseValue
    };
  }

  // ============== YIELD CURVE VISUALIZER ==============
  private calculateYieldCurve(state: StateRecord): StateRecord {
    const { shortRate, longRate, curvature, expectedInflation } = state;

    // Calculate yields at different maturities
    const y1 = shortRate;
    const y2 = shortRate + (longRate - shortRate) * 0.3 + curvature * 0.2;
    const y5 = shortRate + (longRate - shortRate) * 0.6 + curvature * 0.4;
    const y10 = shortRate + (longRate - shortRate) * 0.85 + curvature * 0.15;
    const y30 = longRate;

    // Term premium (compensation for longer maturity risk)
    const termPremium = (y10 - y1) - (expectedInflation * 0.1);

    // Curve slope
    const slope = y10 - y1;

    // Real yields (nominal - expected inflation)
    const realShort = y1 - expectedInflation;
    const realLong = y30 - expectedInflation;

    // Curve shape indicator
    let curveShape: number;
    if (slope > 1) curveShape = 1; // Normal
    else if (slope > -0.5) curveShape = 0; // Flat
    else curveShape = -1; // Inverted

    // Forward rate (1-year rate, 1 year forward)
    const forwardRate = 2 * y2 - y1;

    return {
      y1, y2, y5, y10, y30,
      slope,
      termPremium,
      realShort,
      realLong,
      curveShape,
      forwardRate
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
      case 'portfolio-builder':
        return this.generatePortfolioBuilderChartData(state);
      case 'duration-simulator':
        return this.generateDurationChartData(state);
      case 'dupont-analysis':
        return this.generateDupontChartData(state);
      case 'inflation-visualizer':
        return this.generateInflationChartData(state);
      case 'sensitivity-spider':
        return this.generateSensitivityChartData(state);
      case 'capital-structure':
        return this.generateCapitalStructureChartData(state);
      case 'yield-curve':
        return this.generateYieldCurveChartData(state);
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

  private generatePortfolioBuilderChartData(state: StateRecord): ChartDataPoint[] {
    const { stocks, bonds, realestate, cash } = state;
    const data: ChartDataPoint[] = [];

    // Asset data (index corresponds to ASSET_LABELS)
    const assets = [
      { return: 8, vol: 18 },     // 0: Aksjer
      { return: 3.5, vol: 5 },    // 1: Obligasjoner
      { return: 6, vol: 12 },     // 2: Eiendom
      { return: 1.5, vol: 1 }     // 3: Bankinnskudd
    ];

    // Add individual asset points with assetIndex for labeling
    data.push({ std: assets[0].vol, return: assets[0].return, isAsset: 1, assetIndex: 0 });
    data.push({ std: assets[1].vol, return: assets[1].return, isAsset: 1, assetIndex: 1 });
    data.push({ std: assets[2].vol, return: assets[2].return, isAsset: 1, assetIndex: 2 });
    data.push({ std: assets[3].vol, return: assets[3].return, isAsset: 1, assetIndex: 3 });

    // Calculate current portfolio position
    const total = stocks + bonds + realestate + cash;
    const w = {
      stocks: (stocks / total) || 0,
      bonds: (bonds / total) || 0,
      realestate: (realestate / total) || 0,
      cash: (cash / total) || 0
    };

    // Correlation matrix (symmetric)
    const corr = {
      stocks_bonds: 0.2,
      stocks_realestate: 0.5,
      stocks_cash: 0.0,
      bonds_realestate: 0.3,
      bonds_cash: 0.1,
      realestate_cash: 0.0
    };

    // Use indexed access: 0=stocks, 1=bonds, 2=realestate, 3=cash
    const portReturn =
      w.stocks * assets[0].return +
      w.bonds * assets[1].return +
      w.realestate * assets[2].return +
      w.cash * assets[3].return;

    const variance =
      Math.pow(w.stocks * assets[0].vol / 100, 2) +
      Math.pow(w.bonds * assets[1].vol / 100, 2) +
      Math.pow(w.realestate * assets[2].vol / 100, 2) +
      Math.pow(w.cash * assets[3].vol / 100, 2) +
      2 * w.stocks * w.bonds * (assets[0].vol / 100) * (assets[1].vol / 100) * corr.stocks_bonds +
      2 * w.stocks * w.realestate * (assets[0].vol / 100) * (assets[2].vol / 100) * corr.stocks_realestate +
      2 * w.stocks * w.cash * (assets[0].vol / 100) * (assets[3].vol / 100) * corr.stocks_cash +
      2 * w.bonds * w.realestate * (assets[1].vol / 100) * (assets[2].vol / 100) * corr.bonds_realestate +
      2 * w.bonds * w.cash * (assets[1].vol / 100) * (assets[3].vol / 100) * corr.bonds_cash +
      2 * w.realestate * w.cash * (assets[2].vol / 100) * (assets[3].vol / 100) * corr.realestate_cash;

    const portVol = Math.sqrt(variance) * 100;

    // Add portfolio point
    data.push({ std: portVol, return: portReturn, isPortfolio: 1 });

    return data;
  }

  private generateDurationChartData(state: StateRecord): ChartDataPoint[] {
    const { couponRate, ytm, maturity } = state;
    const faceValue = 1000;
    const data: ChartDataPoint[] = [];

    // Generate price-yield curve for current bond
    for (let yieldPct = 0.5; yieldPct <= 15; yieldPct += 0.5) {
      const rate = yieldPct / 100;
      const couponPayment = faceValue * (couponRate / 100);
      let price = 0;

      for (let t = 1; t <= maturity; t++) {
        price += couponPayment / Math.pow(1 + rate, t);
      }
      price += faceValue / Math.pow(1 + rate, maturity);

      data.push({
        yield: yieldPct,
        price: price,
        isCurve: 1
      });
    }

    // Add current position marker
    const currentRate = ytm / 100;
    const couponPayment = faceValue * (couponRate / 100);
    let currentPrice = 0;
    for (let t = 1; t <= maturity; t++) {
      currentPrice += couponPayment / Math.pow(1 + currentRate, t);
    }
    currentPrice += faceValue / Math.pow(1 + currentRate, maturity);

    data.push({
      yield: ytm,
      price: currentPrice,
      isCurrent: 1
    });

    return data;
  }

  private generateDupontChartData(state: StateRecord): ChartDataPoint[] {
    const { netIncome, revenue, assets, equity } = state;
    const data: ChartDataPoint[] = [];

    // DuPont components as bar chart data
    const profitMargin = revenue > 0 ? (netIncome / revenue) * 100 : 0;
    const assetTurnover = assets > 0 ? (revenue / assets) * 100 : 0; // Scaled for display
    const equityMultiplier = equity > 0 ? (assets / equity) * 100 : 100; // Scaled for display
    const roe = equity > 0 ? (netIncome / equity) * 100 : 0;

    data.push({ component: 0, value: profitMargin, label: 1 }); // Margin
    data.push({ component: 1, value: assetTurnover, label: 2 }); // Turnover (scaled)
    data.push({ component: 2, value: equityMultiplier, label: 3 }); // Multiplier (scaled)
    data.push({ component: 3, value: roe, label: 4 }); // ROE

    return data;
  }

  private generateInflationChartData(state: StateRecord): ChartDataPoint[] {
    const { amount, years, inflationRate } = state;
    const data: ChartDataPoint[] = [];

    // Generate purchasing power over time
    for (let year = 0; year <= Math.min(years, 50); year++) {
      const realValue = amount / Math.pow(1 + inflationRate / 100, year);
      data.push({
        year,
        realValue,
        nominalValue: amount // Original amount stays constant
      });
    }

    return data;
  }

  private generateSensitivityChartData(state: StateRecord): ChartDataPoint[] {
    const { investment, annualCashFlow, discountRate, years } = state;
    const data: ChartDataPoint[] = [];
    const r = discountRate / 100;

    // Calculate base NPV
    let baseNPV = -investment;
    for (let t = 1; t <= years; t++) {
      baseNPV += annualCashFlow / Math.pow(1 + r, t);
    }

    // Generate sensitivity data for tornado diagram
    // Each bar shows NPV range for +/-20% change in variable
    const variables = [
      { name: 'Pris', factor: 1.0 },      // Price affects full cash flow
      { name: 'Volum', factor: 1.0 },     // Volume affects full cash flow
      { name: 'Kostnader', factor: -0.6 }, // Costs are ~60% of cash flow
      { name: 'Diskontering', factor: 0 }  // Special handling
    ];

    variables.forEach((v, index) => {
      let lowNPV: number, highNPV: number;

      if (v.name === 'Diskontering') {
        // For discount rate, +20% means higher rate = lower NPV
        const lowRate = r * 0.8;
        const highRate = r * 1.2;
        lowNPV = -investment;
        highNPV = -investment;
        for (let t = 1; t <= years; t++) {
          highNPV += annualCashFlow / Math.pow(1 + lowRate, t);  // Lower rate = higher NPV
          lowNPV += annualCashFlow / Math.pow(1 + highRate, t);   // Higher rate = lower NPV
        }
      } else {
        const lowCF = annualCashFlow * (1 + v.factor * -0.2);
        const highCF = annualCashFlow * (1 + v.factor * 0.2);
        lowNPV = -investment;
        highNPV = -investment;
        for (let t = 1; t <= years; t++) {
          lowNPV += lowCF / Math.pow(1 + r, t);
          highNPV += highCF / Math.pow(1 + r, t);
        }
      }

      data.push({
        variable: index,
        lowNPV: Math.min(lowNPV, highNPV),
        highNPV: Math.max(lowNPV, highNPV),
        baseNPV,
        range: Math.abs(highNPV - lowNPV)
      });
    });

    // Sort by range (largest impact first)
    data.sort((a, b) => b.range - a.range);
    // Re-assign variable index after sorting
    data.forEach((d, i) => d.variable = i);

    return data;
  }

  private generateCapitalStructureChartData(state: StateRecord): ChartDataPoint[] {
    const { equityBeta, riskFreeRate, marketPremium, taxRate, baseDebtRate } = state;
    const data: ChartDataPoint[] = [];

    const rf = riskFreeRate / 100;
    const mrp = marketPremium / 100;
    const tax = taxRate / 100;

    // Calculate unlevered beta at 50% debt (default)
    const unleveredBeta = equityBeta / (1 + (1 - tax) * 1); // D/E = 1 at 50% debt

    // Generate WACC curve for different debt ratios
    let minWACC = 100;
    let optimalDebt = 0;

    for (let debtPct = 0; debtPct <= 80; debtPct += 2) {
      const d = debtPct / 100;
      const e = 1 - d;

      // Levered beta using Hamada
      const de = d > 0 ? d / e : 0;
      const leveredBeta = unleveredBeta * (1 + (1 - tax) * de);

      // Cost of equity (CAPM)
      const costEquity = (rf + leveredBeta * mrp) * 100;

      // Cost of debt with spread increasing at high leverage
      const spread = Math.max(0, (d - 0.3) * 5) + (d > 0.6 ? Math.pow(d - 0.6, 2) * 50 : 0);
      const costDebt = baseDebtRate + spread;
      const afterTaxCostDebt = costDebt * (1 - tax);

      // WACC
      const wacc = e * costEquity + d * afterTaxCostDebt;

      if (wacc < minWACC) {
        minWACC = wacc;
        optimalDebt = debtPct;
      }

      data.push({
        debtRatio: debtPct,
        wacc,
        costEquity,
        costDebt,
        afterTaxCostDebt,
        isOptimal: 0
      });
    }

    // Mark optimal point
    const optimalPoint = data.find(d => d.debtRatio === optimalDebt);
    if (optimalPoint) optimalPoint.isOptimal = 1;

    return data;
  }

  private generateYieldCurveChartData(state: StateRecord): ChartDataPoint[] {
    const { shortRate, longRate, curvature } = state;
    const data: ChartDataPoint[] = [];

    // Standard maturity points
    const maturities = [0.25, 0.5, 1, 2, 3, 5, 7, 10, 20, 30];

    maturities.forEach(m => {
      // Nelson-Siegel style interpolation (simplified)
      const tau = 2; // decay parameter
      const factor = (1 - Math.exp(-m / tau)) / (m / tau);
      const humpFactor = factor - Math.exp(-m / tau);

      const yield_ = shortRate +
                    (longRate - shortRate) * (1 - factor) +
                    curvature * humpFactor;

      data.push({
        maturity: m,
        yield: yield_,
        isCurve: 1
      });
    });

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
    } else if (modelType === 'portfolio-builder') {
      xLabel = 'Risiko (Standardavvik %)';
      yLabel = 'Forventet avkastning (%)';
      xMin = 0;
      xMax = 22;
      yMin = 0;
      yMax = 10;
    } else if (modelType === 'duration-simulator') {
      xLabel = 'Rente (%)';
      yLabel = 'Obligasjonspris (kr)';
      xMin = 0;
      xMax = 15;
      const prices = data.filter(d => d.price !== undefined).map(d => d.price);
      yMin = Math.min(...prices) * 0.9;
      yMax = Math.max(...prices) * 1.1;
    } else if (modelType === 'dupont-analysis') {
      xLabel = 'Komponent';
      yLabel = 'Verdi (%)';
      xMin = -0.5;
      xMax = 3.5;
      yMin = 0;
      const values = data.map(d => d.value);
      yMax = Math.max(...values) * 1.2;
    } else if (modelType === 'inflation-visualizer') {
      xLabel = 'År';
      yLabel = 'Verdi (kr)';
      xMin = 0;
      xMax = data.length > 0 ? Math.max(...data.map(d => d.year)) : 30;
      yMin = 0;
      yMax = data.length > 0 ? Math.max(...data.map(d => d.nominalValue)) * 1.1 : 100;
    } else if (modelType === 'sensitivity-spider') {
      xLabel = 'NPV (kr)';
      yLabel = '';
      const npvs = data.flatMap(d => [d.lowNPV, d.highNPV, d.baseNPV]).filter(v => v !== undefined);
      xMin = Math.min(...npvs) * 1.1;
      xMax = Math.max(...npvs) * 1.1;
      yMin = -0.5;
      yMax = data.length - 0.5;
    } else if (modelType === 'capital-structure') {
      xLabel = 'Gjeldsandel (%)';
      yLabel = 'Kapitalkostnad (%)';
      xMin = 0;
      xMax = 80;
      const waccs = data.map(d => d.wacc).filter(v => v !== undefined);
      const costs = data.map(d => d.costEquity).filter(v => v !== undefined);
      yMin = Math.min(...waccs) * 0.8;
      yMax = Math.max(...costs) * 1.1;
    } else if (modelType === 'yield-curve') {
      xLabel = 'Løpetid (år)';
      yLabel = 'Rente (%)';
      xMin = 0;
      xMax = 32;
      const yields = data.map(d => d.yield).filter(v => v !== undefined);
      yMin = Math.min(...yields) * 0.8;
      yMax = Math.max(...yields) * 1.2;
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
    if (modelType === 'bond-pricing' || modelType === 'duration-simulator') {
      // Price-yield curve
      const curveData = data.filter(d => d.price !== undefined && d.isCurrent === undefined);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const points = curveData
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.yield)} ${scaleY(d.price)}`)
        .join(' ');
      path.setAttribute('d', points);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', '#10b981');
      path.setAttribute('stroke-width', '2');
      svg.appendChild(path);

      // Current position marker (for duration-simulator)
      const currentPoint = data.find(d => d.isCurrent === 1);
      if (currentPoint) {
        const glowCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        glowCircle.setAttribute('cx', scaleX(currentPoint.yield).toString());
        glowCircle.setAttribute('cy', scaleY(currentPoint.price).toString());
        glowCircle.setAttribute('r', '12');
        glowCircle.setAttribute('fill', 'rgba(239, 68, 68, 0.2)');
        svg.appendChild(glowCircle);

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', scaleX(currentPoint.yield).toString());
        circle.setAttribute('cy', scaleY(currentPoint.price).toString());
        circle.setAttribute('r', '6');
        circle.setAttribute('fill', '#ef4444');
        circle.setAttribute('stroke', '#fff');
        circle.setAttribute('stroke-width', '2');
        svg.appendChild(circle);

        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', (scaleX(currentPoint.yield) + 10).toString());
        label.setAttribute('y', (scaleY(currentPoint.price) - 8).toString());
        label.setAttribute('fill', '#ef4444');
        label.setAttribute('font-size', '11');
        label.setAttribute('font-weight', '500');
        label.textContent = `${currentPoint.price.toFixed(0)} kr`;
        svg.appendChild(label);
      }
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
    } else if (modelType === 'portfolio-builder') {
      // Draw individual asset points
      const assetColors = ['#ef4444', '#3b82f6', '#f59e0b', '#10b981']; // Red, Blue, Orange, Green

      const assetPoints = data.filter(d => d.isAsset === 1);
      assetPoints.forEach(asset => {
        const idx = asset.assetIndex;
        // Asset circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', scaleX(asset.std).toString());
        circle.setAttribute('cy', scaleY(asset.return).toString());
        circle.setAttribute('r', '6');
        circle.setAttribute('fill', assetColors[idx] || '#6b7280');
        svg.appendChild(circle);

        // Asset label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', (scaleX(asset.std) + 10).toString());
        label.setAttribute('y', (scaleY(asset.return) + 4).toString());
        label.setAttribute('fill', '#374151');
        label.setAttribute('font-size', '10');
        label.textContent = ASSET_LABELS[idx];
        svg.appendChild(label);
      });

      // Draw portfolio point (larger, highlighted)
      const portfolioPoint = data.find(d => d.isPortfolio === 1);
      if (portfolioPoint) {
        // Outer glow circle
        const glowCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        glowCircle.setAttribute('cx', scaleX(portfolioPoint.std).toString());
        glowCircle.setAttribute('cy', scaleY(portfolioPoint.return).toString());
        glowCircle.setAttribute('r', '12');
        glowCircle.setAttribute('fill', 'rgba(139, 92, 246, 0.3)');
        svg.appendChild(glowCircle);

        // Portfolio circle
        const portfolioCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        portfolioCircle.setAttribute('cx', scaleX(portfolioPoint.std).toString());
        portfolioCircle.setAttribute('cy', scaleY(portfolioPoint.return).toString());
        portfolioCircle.setAttribute('r', '8');
        portfolioCircle.setAttribute('fill', '#8b5cf6');
        portfolioCircle.setAttribute('stroke', '#fff');
        portfolioCircle.setAttribute('stroke-width', '2');
        svg.appendChild(portfolioCircle);

        // Portfolio label
        const portfolioLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        portfolioLabel.setAttribute('x', (scaleX(portfolioPoint.std) + 14).toString());
        portfolioLabel.setAttribute('y', (scaleY(portfolioPoint.return) + 4).toString());
        portfolioLabel.setAttribute('fill', '#8b5cf6');
        portfolioLabel.setAttribute('font-size', '11');
        portfolioLabel.setAttribute('font-weight', '600');
        portfolioLabel.textContent = 'Din portefølje';
        svg.appendChild(portfolioLabel);
      }
    } else if (modelType === 'dupont-analysis') {
      // DuPont bar chart
      const barColors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
      const barLabels = ['Margin', 'Omløp', 'Gearing', 'ROE'];
      const barWidth = chartWidth / 6;

      data.forEach((d, i) => {
        const x = scaleX(d.component) - barWidth / 2;
        const barHeight = d.value > 0 ? (d.value / yMax) * chartHeight : 0;
        const y = height - margin.bottom - barHeight;

        // Bar
        const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bar.setAttribute('x', x.toString());
        bar.setAttribute('y', y.toString());
        bar.setAttribute('width', barWidth.toString());
        bar.setAttribute('height', barHeight.toString());
        bar.setAttribute('fill', barColors[i] || '#6b7280');
        bar.setAttribute('rx', '4');
        svg.appendChild(bar);

        // Value label
        const valueLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        valueLabel.setAttribute('x', scaleX(d.component).toString());
        valueLabel.setAttribute('y', (y - 5).toString());
        valueLabel.setAttribute('text-anchor', 'middle');
        valueLabel.setAttribute('fill', '#374151');
        valueLabel.setAttribute('font-size', '11');
        valueLabel.setAttribute('font-weight', '500');
        valueLabel.textContent = d.value.toFixed(1) + '%';
        svg.appendChild(valueLabel);

        // Bar label
        const barLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        barLabel.setAttribute('x', scaleX(d.component).toString());
        barLabel.setAttribute('y', (height - margin.bottom + 15).toString());
        barLabel.setAttribute('text-anchor', 'middle');
        barLabel.setAttribute('fill', '#6b7280');
        barLabel.setAttribute('font-size', '10');
        barLabel.textContent = barLabels[i];
        svg.appendChild(barLabel);
      });

      // DuPont formula indicator
      const formula = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      formula.setAttribute('x', (width / 2).toString());
      formula.setAttribute('y', '15');
      formula.setAttribute('text-anchor', 'middle');
      formula.setAttribute('fill', '#9ca3af');
      formula.setAttribute('font-size', '10');
      formula.textContent = 'ROE = Margin × Omløp × Gearing';
      svg.appendChild(formula);
    } else if (modelType === 'inflation-visualizer') {
      // Nominal value line (flat)
      const nominalPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const nominalPoints = data
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.year)} ${scaleY(d.nominalValue)}`)
        .join(' ');
      nominalPath.setAttribute('d', nominalPoints);
      nominalPath.setAttribute('fill', 'none');
      nominalPath.setAttribute('stroke', '#3b82f6');
      nominalPath.setAttribute('stroke-width', '2');
      nominalPath.setAttribute('stroke-dasharray', '5,5');
      svg.appendChild(nominalPath);

      // Real value line (declining)
      const realPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const realPoints = data
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.year)} ${scaleY(d.realValue)}`)
        .join(' ');
      realPath.setAttribute('d', realPoints);
      realPath.setAttribute('fill', 'none');
      realPath.setAttribute('stroke', '#ef4444');
      realPath.setAttribute('stroke-width', '2');
      svg.appendChild(realPath);

      // Area between lines (purchasing power lost)
      const areaPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const areaPoints = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.year)} ${scaleY(d.nominalValue)}`).join(' ') +
        data.slice().reverse().map((d) => `L ${scaleX(d.year)} ${scaleY(d.realValue)}`).join(' ') + ' Z';
      areaPath.setAttribute('d', areaPoints);
      areaPath.setAttribute('fill', 'rgba(239, 68, 68, 0.15)');
      svg.appendChild(areaPath);

      // Legend
      const legendY = margin.top + 10;
      const nominalLegend = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      nominalLegend.setAttribute('x', (margin.left + 10).toString());
      nominalLegend.setAttribute('y', legendY.toString());
      nominalLegend.setAttribute('fill', '#3b82f6');
      nominalLegend.setAttribute('font-size', '10');
      nominalLegend.textContent = '- - Nominell verdi';
      svg.appendChild(nominalLegend);

      const realLegend = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      realLegend.setAttribute('x', (margin.left + 100).toString());
      realLegend.setAttribute('y', legendY.toString());
      realLegend.setAttribute('fill', '#ef4444');
      realLegend.setAttribute('font-size', '10');
      realLegend.textContent = '— Kjøpekraft';
      svg.appendChild(realLegend);
    } else if (modelType === 'sensitivity-spider') {
      // Tornado diagram (horizontal bars)
      const barHeight = chartHeight / (data.length + 1);
      const baseX = scaleX(data[0]?.baseNPV || 0);
      const variableLabels = ['Pris', 'Volum', 'Kostnader', 'Diskontering'];
      const barColors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

      // Draw base NPV line
      const baseLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      baseLine.setAttribute('x1', baseX.toString());
      baseLine.setAttribute('y1', margin.top.toString());
      baseLine.setAttribute('x2', baseX.toString());
      baseLine.setAttribute('y2', (height - margin.bottom).toString());
      baseLine.setAttribute('stroke', '#374151');
      baseLine.setAttribute('stroke-width', '2');
      baseLine.setAttribute('stroke-dasharray', '4,4');
      svg.appendChild(baseLine);

      // Draw bars
      data.forEach((d, i) => {
        const y = margin.top + (i + 0.5) * barHeight;
        const x1 = scaleX(d.lowNPV);
        const x2 = scaleX(d.highNPV);

        // Bar
        const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bar.setAttribute('x', Math.min(x1, x2).toString());
        bar.setAttribute('y', (y - barHeight * 0.35).toString());
        bar.setAttribute('width', Math.abs(x2 - x1).toString());
        bar.setAttribute('height', (barHeight * 0.7).toString());
        bar.setAttribute('fill', barColors[i % barColors.length]);
        bar.setAttribute('rx', '4');
        svg.appendChild(bar);

        // Variable label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', (margin.left - 5).toString());
        label.setAttribute('y', (y + 4).toString());
        label.setAttribute('text-anchor', 'end');
        label.setAttribute('fill', '#374151');
        label.setAttribute('font-size', '11');
        label.setAttribute('font-weight', '500');
        label.textContent = variableLabels[i] || `Var ${i + 1}`;
        svg.appendChild(label);

        // Range value
        const rangeLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        rangeLabel.setAttribute('x', (Math.max(x1, x2) + 5).toString());
        rangeLabel.setAttribute('y', (y + 4).toString());
        rangeLabel.setAttribute('fill', '#6b7280');
        rangeLabel.setAttribute('font-size', '10');
        rangeLabel.textContent = `±${(d.range / 2 / 1000).toFixed(0)}k`;
        svg.appendChild(rangeLabel);
      });

      // Base NPV label
      const baseLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      baseLabel.setAttribute('x', baseX.toString());
      baseLabel.setAttribute('y', (margin.top - 5).toString());
      baseLabel.setAttribute('text-anchor', 'middle');
      baseLabel.setAttribute('fill', '#374151');
      baseLabel.setAttribute('font-size', '10');
      baseLabel.setAttribute('font-weight', '600');
      baseLabel.textContent = `Base: ${((data[0]?.baseNPV || 0) / 1000).toFixed(0)}k`;
      svg.appendChild(baseLabel);
    } else if (modelType === 'capital-structure') {
      // WACC curve
      const waccPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const waccPoints = data
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.debtRatio)} ${scaleY(d.wacc)}`)
        .join(' ');
      waccPath.setAttribute('d', waccPoints);
      waccPath.setAttribute('fill', 'none');
      waccPath.setAttribute('stroke', '#8b5cf6');
      waccPath.setAttribute('stroke-width', '3');
      svg.appendChild(waccPath);

      // Cost of equity line
      const equityPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const equityPoints = data
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.debtRatio)} ${scaleY(d.costEquity)}`)
        .join(' ');
      equityPath.setAttribute('d', equityPoints);
      equityPath.setAttribute('fill', 'none');
      equityPath.setAttribute('stroke', '#ef4444');
      equityPath.setAttribute('stroke-width', '2');
      equityPath.setAttribute('stroke-dasharray', '5,5');
      svg.appendChild(equityPath);

      // After-tax cost of debt line
      const debtPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const debtPoints = data
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.debtRatio)} ${scaleY(d.afterTaxCostDebt)}`)
        .join(' ');
      debtPath.setAttribute('d', debtPoints);
      debtPath.setAttribute('fill', 'none');
      debtPath.setAttribute('stroke', '#3b82f6');
      debtPath.setAttribute('stroke-width', '2');
      debtPath.setAttribute('stroke-dasharray', '5,5');
      svg.appendChild(debtPath);

      // Optimal point marker
      const optimalPoint = data.find(d => d.isOptimal === 1);
      if (optimalPoint) {
        const glowCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        glowCircle.setAttribute('cx', scaleX(optimalPoint.debtRatio).toString());
        glowCircle.setAttribute('cy', scaleY(optimalPoint.wacc).toString());
        glowCircle.setAttribute('r', '12');
        glowCircle.setAttribute('fill', 'rgba(16, 185, 129, 0.3)');
        svg.appendChild(glowCircle);

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', scaleX(optimalPoint.debtRatio).toString());
        circle.setAttribute('cy', scaleY(optimalPoint.wacc).toString());
        circle.setAttribute('r', '6');
        circle.setAttribute('fill', '#10b981');
        circle.setAttribute('stroke', '#fff');
        circle.setAttribute('stroke-width', '2');
        svg.appendChild(circle);

        const optLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        optLabel.setAttribute('x', (scaleX(optimalPoint.debtRatio) + 10).toString());
        optLabel.setAttribute('y', (scaleY(optimalPoint.wacc) - 8).toString());
        optLabel.setAttribute('fill', '#10b981');
        optLabel.setAttribute('font-size', '10');
        optLabel.setAttribute('font-weight', '600');
        optLabel.textContent = `Optimal: ${optimalPoint.debtRatio.toFixed(0)}%`;
        svg.appendChild(optLabel);
      }

      // Legend
      const legendItems = [
        { color: '#8b5cf6', label: 'WACC', dashed: false },
        { color: '#ef4444', label: 'EK-kostnad', dashed: true },
        { color: '#3b82f6', label: 'Gjeldskostnad (e.s.)', dashed: true }
      ];
      legendItems.forEach((item, i) => {
        const ly = margin.top + 10 + i * 15;
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', (width - margin.right - 120).toString());
        line.setAttribute('y1', ly.toString());
        line.setAttribute('x2', (width - margin.right - 100).toString());
        line.setAttribute('y2', ly.toString());
        line.setAttribute('stroke', item.color);
        line.setAttribute('stroke-width', '2');
        if (item.dashed) line.setAttribute('stroke-dasharray', '5,5');
        svg.appendChild(line);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', (width - margin.right - 95).toString());
        text.setAttribute('y', (ly + 4).toString());
        text.setAttribute('fill', '#6b7280');
        text.setAttribute('font-size', '10');
        text.textContent = item.label;
        svg.appendChild(text);
      });
    } else if (modelType === 'yield-curve') {
      // Yield curve line
      const curvePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const curvePoints = data
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.maturity)} ${scaleY(d.yield)}`)
        .join(' ');
      curvePath.setAttribute('d', curvePoints);
      curvePath.setAttribute('fill', 'none');
      curvePath.setAttribute('stroke', '#3b82f6');
      curvePath.setAttribute('stroke-width', '3');
      svg.appendChild(curvePath);

      // Area under curve
      const areaPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const areaPoints = curvePoints + ` L ${scaleX(data[data.length - 1].maturity)} ${scaleY(yMin)} L ${scaleX(data[0].maturity)} ${scaleY(yMin)} Z`;
      areaPath.setAttribute('d', areaPoints);
      areaPath.setAttribute('fill', 'rgba(59, 130, 246, 0.1)');
      svg.appendChild(areaPath);

      // Data points
      data.forEach(d => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', scaleX(d.maturity).toString());
        circle.setAttribute('cy', scaleY(d.yield).toString());
        circle.setAttribute('r', '4');
        circle.setAttribute('fill', '#3b82f6');
        circle.setAttribute('stroke', '#fff');
        circle.setAttribute('stroke-width', '1');
        svg.appendChild(circle);
      });

      // Curve shape label
      const firstYield = data[0]?.yield || 0;
      const lastYield = data[data.length - 1]?.yield || 0;
      const slope = lastYield - firstYield;
      let shapeText = 'Normal kurve';
      let shapeColor = '#10b981';
      if (slope < -0.5) {
        shapeText = 'Invertert kurve';
        shapeColor = '#ef4444';
      } else if (slope < 0.5) {
        shapeText = 'Flat kurve';
        shapeColor = '#f59e0b';
      }

      const shapeLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      shapeLabel.setAttribute('x', (width - margin.right - 10).toString());
      shapeLabel.setAttribute('y', (margin.top + 15).toString());
      shapeLabel.setAttribute('text-anchor', 'end');
      shapeLabel.setAttribute('fill', shapeColor);
      shapeLabel.setAttribute('font-size', '11');
      shapeLabel.setAttribute('font-weight', '600');
      shapeLabel.textContent = shapeText;
      svg.appendChild(shapeLabel);
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
