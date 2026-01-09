import { CalculatorContent, CalculatorType } from '../types/course';

export class CalculatorHandler {
  private calculators: Map<string, CalculatorContent> = new Map();

  registerCalculator(calculator: CalculatorContent): void {
    this.calculators.set(calculator.id, calculator);
  }

  reset(): void {
    this.calculators.clear();
  }

  attachEventListeners(container: HTMLElement): void {
    // Attach input change listeners for real-time calculation
    const calcContainers = container.querySelectorAll('.content-calculator');

    calcContainers.forEach(calcContainer => {
      const calcId = calcContainer.getAttribute('data-calculator-id');
      if (!calcId) return;

      const inputs = calcContainer.querySelectorAll('.calc-input');
      const calculateBtn = calcContainer.querySelector('.calc-calculate-btn');

      // Real-time calculation on input change
      inputs.forEach(input => {
        input.addEventListener('input', () => this.calculate(calcId));
      });

      // Also calculate on button click
      calculateBtn?.addEventListener('click', () => this.calculate(calcId));

      // Initial calculation with default values
      setTimeout(() => this.calculate(calcId), 100);
    });
  }

  private calculate(calcId: string): void {
    const calculator = this.calculators.get(calcId);
    if (!calculator) return;

    const container = document.querySelector(`[data-calculator-id="${calcId}"]`);
    if (!container) return;

    // Gather input values
    const values: Record<string, number> = {};
    calculator.inputs.forEach(input => {
      const inputEl = container.querySelector(`[data-input-key="${input.key}"]`) as HTMLInputElement;
      if (inputEl) {
        values[input.key] = parseFloat(inputEl.value) || 0;
      }
    });

    // Perform calculation based on type
    const result = this.performCalculation(calculator.calculatorType, values);

    // Update result display
    const resultValue = container.querySelector('.calc-result-value');
    const resultExplanation = container.querySelector('.calc-result-explanation');

    if (resultValue) {
      resultValue.textContent = this.formatResult(result, calculator);
    }

    if (resultExplanation && calculator.explanation) {
      resultExplanation.textContent = this.generateExplanation(calculator, values, result);
    }
  }

  private performCalculation(type: CalculatorType, values: Record<string, number>): number {
    switch (type) {
      case 'compound-interest':
        return this.calcCompoundInterest(values);
      case 'future-value':
        return this.calcFutureValue(values);
      case 'present-value':
        return this.calcPresentValue(values);
      case 'loan-payment':
        return this.calcLoanPayment(values);
      case 'bond-price':
        return this.calcBondPrice(values);
      case 'npv':
        return this.calcNPV(values);
      case 'irr-approx':
        return this.calcIRRApprox(values);
      case 'wacc':
        return this.calcWACC(values);
      default:
        return 0;
    }
  }

  // Compound Interest: FV = PV × (1 + r)^n
  private calcCompoundInterest(v: Record<string, number>): number {
    const pv = v.principal || 0;
    const rate = (v.rate || 0) / 100;
    const years = v.years || 0;
    return pv * Math.pow(1 + rate, years);
  }

  // Future Value of Annuity: FV = PMT × [(1+r)^n - 1] / r
  private calcFutureValue(v: Record<string, number>): number {
    const pmt = v.payment || 0;
    const rate = (v.rate || 0) / 100;
    const years = v.years || 0;
    if (rate === 0) return pmt * years;
    return pmt * (Math.pow(1 + rate, years) - 1) / rate;
  }

  // Present Value: PV = FV / (1 + r)^n
  private calcPresentValue(v: Record<string, number>): number {
    const fv = v.futureValue || 0;
    const rate = (v.rate || 0) / 100;
    const years = v.years || 0;
    return fv / Math.pow(1 + rate, years);
  }

  // Loan Payment (Annuity): PMT = PV × [r(1+r)^n] / [(1+r)^n - 1]
  private calcLoanPayment(v: Record<string, number>): number {
    const pv = v.loanAmount || 0;
    const rate = (v.rate || 0) / 100 / 12; // Monthly rate
    const months = (v.years || 0) * 12;
    if (rate === 0) return pv / months;
    return pv * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
  }

  // Bond Price: P = Σ C/(1+r)^t + F/(1+r)^n
  private calcBondPrice(v: Record<string, number>): number {
    const faceValue = v.faceValue || 1000;
    const couponRate = (v.couponRate || 0) / 100;
    const ytm = (v.ytm || 0) / 100;
    const years = v.years || 1;
    const coupon = faceValue * couponRate;

    let price = 0;
    for (let t = 1; t <= years; t++) {
      price += coupon / Math.pow(1 + ytm, t);
    }
    price += faceValue / Math.pow(1 + ytm, years);
    return price;
  }

  // NPV: NPV = -I0 + Σ CFt/(1+r)^t
  private calcNPV(v: Record<string, number>): number {
    const investment = v.investment || 0;
    const cashflow = v.cashflow || 0;
    const rate = (v.rate || 0) / 100;
    const years = v.years || 1;

    let npv = -investment;
    for (let t = 1; t <= years; t++) {
      npv += cashflow / Math.pow(1 + rate, t);
    }
    return npv;
  }

  // IRR Approximation (using simple formula)
  private calcIRRApprox(v: Record<string, number>): number {
    const investment = v.investment || 0;
    const cashflow = v.cashflow || 0;
    const years = v.years || 1;

    if (investment === 0 || cashflow === 0) return 0;

    // Binary search for IRR
    let low = -0.99;
    let high = 10;
    let irr = 0;

    for (let i = 0; i < 100; i++) {
      irr = (low + high) / 2;
      let npv = -investment;
      for (let t = 1; t <= years; t++) {
        npv += cashflow / Math.pow(1 + irr, t);
      }

      if (Math.abs(npv) < 0.01) break;
      if (npv > 0) low = irr;
      else high = irr;
    }

    return irr * 100;
  }

  // WACC: WACC = (E/V)×Re + (D/V)×Rd×(1-Tc)
  private calcWACC(v: Record<string, number>): number {
    const equity = v.equity || 0;
    const debt = v.debt || 0;
    const costEquity = (v.costEquity || 0) / 100;
    const costDebt = (v.costDebt || 0) / 100;
    const taxRate = (v.taxRate || 0) / 100;

    const totalValue = equity + debt;
    if (totalValue === 0) return 0;

    const wacc = (equity / totalValue) * costEquity +
                 (debt / totalValue) * costDebt * (1 - taxRate);
    return wacc * 100;
  }

  private formatResult(result: number, calculator: CalculatorContent): string {
    const unit = calculator.resultUnit || '';

    if (calculator.calculatorType === 'irr-approx' || calculator.calculatorType === 'wacc') {
      return `${result.toFixed(2)}%`;
    }

    if (unit === 'kr' || unit === 'currency') {
      return this.formatCurrency(result) + ' kr';
    }

    if (unit === '%') {
      return `${result.toFixed(2)}%`;
    }

    return this.formatNumber(result);
  }

  private formatCurrency(value: number): string {
    return new Intl.NumberFormat('nb-NO', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }

  private formatNumber(value: number): string {
    return new Intl.NumberFormat('nb-NO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }

  private generateExplanation(
    calculator: CalculatorContent,
    values: Record<string, number>,
    result: number
  ): string {
    switch (calculator.calculatorType) {
      case 'compound-interest':
        const years = values.years || 0;
        const principal = values.principal || 0;
        const earned = result - principal;
        return `Over ${years} år vokser ${this.formatCurrency(principal)} kr til ${this.formatCurrency(result)} kr. Du tjener ${this.formatCurrency(earned)} kr i renter.`;

      case 'future-value':
        return `Ved å spare ${this.formatCurrency(values.payment || 0)} kr årlig i ${values.years || 0} år med ${values.rate || 0}% rente, får du ${this.formatCurrency(result)} kr.`;

      case 'present-value':
        return `${this.formatCurrency(values.futureValue || 0)} kr om ${values.years || 0} år er verdt ${this.formatCurrency(result)} kr i dag med ${values.rate || 0}% rente.`;

      case 'loan-payment':
        const totalPaid = result * (values.years || 0) * 12;
        const interest = totalPaid - (values.loanAmount || 0);
        return `Månedlig betaling: ${this.formatCurrency(result)} kr. Total rentekostnad over ${values.years || 0} år: ${this.formatCurrency(interest)} kr.`;

      case 'bond-price':
        const fv = values.faceValue || 1000;
        const diff = result - fv;
        const status = diff > 0 ? 'over pari (premium)' : diff < 0 ? 'under pari (diskonto)' : 'til pari';
        return `Obligasjonen handles ${status}. ${Math.abs(diff).toFixed(0)} kr ${diff > 0 ? 'over' : 'under'} pålydende.`;

      case 'npv':
        return result > 0
          ? `Positiv NPV (${this.formatCurrency(result)} kr) betyr at prosjektet skaper verdi og bør gjennomføres.`
          : `Negativ NPV (${this.formatCurrency(result)} kr) betyr at prosjektet ødelegger verdi og bør avvises.`;

      case 'irr-approx':
        const reqReturn = values.rate || 10;
        return result > reqReturn
          ? `IRR på ${result.toFixed(1)}% er høyere enn avkastningskravet (${reqReturn}%). Prosjektet er lønnsomt.`
          : `IRR på ${result.toFixed(1)}% er lavere enn avkastningskravet (${reqReturn}%). Prosjektet er ikke lønnsomt.`;

      case 'wacc':
        return `Kapitalkostnaden er ${result.toFixed(2)}%. Nye investeringer må gi minst denne avkastningen for å skape verdi.`;

      default:
        return '';
    }
  }
}
