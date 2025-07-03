import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator } from 'lucide-react';

interface CashflowRow {
  period: number;
  cashflow: number;
  presentValue: number;
  weight: number;
  weightedTime: number;
}

export const DurationCalculator: React.FC = () => {
  const [years, setYears] = useState(5);
  const [couponRate, setCouponRate] = useState(9);
  const [effectiveRate, setEffectiveRate] = useState(10);
  const [faceValue, setFaceValue] = useState(1000);
  const [results, setResults] = useState<CashflowRow[]>([]);
  const [bondPrice, setBondPrice] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatNumber = (n: number) => {
    return n.toLocaleString('no-NO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const calculateDuration = () => {
    const N = years;
    const cRate = couponRate / 100;
    const y = effectiveRate / 100;
    const F = faceValue;

    const cashflows: CashflowRow[] = [];
    let P0 = 0; // Bond price

    // Calculate cashflows and present values
    for (let t = 1; t <= N; t++) {
      const ks = t === N ? cRate * F + F : cRate * F; // Coupon + principal in last period
      const pv = ks / Math.pow(1 + y, t);
      P0 += pv;

      cashflows.push({
        period: t,
        cashflow: ks,
        presentValue: pv,
        weight: 0, // Will be calculated after we know P0
        weightedTime: 0, // Will be calculated after we know weight
      });
    }

    // Calculate weights and weighted times
    let totalDuration = 0;
    cashflows.forEach((row) => {
      row.weight = row.presentValue / P0;
      row.weightedTime = row.weight * row.period;
      totalDuration += row.weightedTime;
    });

    setResults(cashflows);
    setBondPrice(P0);
    setDuration(totalDuration);
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-primary" />
          Durasjonskalkulator for obligasjoner
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="years">Antall år (N)</Label>
            <Input
              id="years"
              type="number"
              min="1"
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value) || 5)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="coupon">Kupongrate (%)</Label>
            <Input
              id="coupon"
              type="number"
              step="0.01"
              value={couponRate}
              onChange={(e) => setCouponRate(parseFloat(e.target.value) || 9)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="yield">Effektiv rente (%)</Label>
            <Input
              id="yield"
              type="number"
              step="0.01"
              value={effectiveRate}
              onChange={(e) => setEffectiveRate(parseFloat(e.target.value) || 10)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="face">Pålydende</Label>
            <Input
              id="face"
              type="number"
              value={faceValue}
              onChange={(e) => setFaceValue(parseFloat(e.target.value) || 1000)}
            />
          </div>
        </div>

        <Button onClick={calculateDuration} className="w-full">
          Beregn durasjon
        </Button>

        {/* Results table */}
        {results.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-border">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="border border-border px-3 py-2">Periode (t)</th>
                  <th className="border border-border px-3 py-2">Kontantstrøm (KS)</th>
                  <th className="border border-border px-3 py-2">NV av KS</th>
                  <th className="border border-border px-3 py-2">Vekt</th>
                  <th className="border border-border px-3 py-2">t×Vekt</th>
                </tr>
              </thead>
              <tbody>
                {results.map((row, index) => (
                  <tr key={row.period} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                    <td className="border border-border px-3 py-1 text-center">{row.period}</td>
                    <td className="border border-border px-3 py-1 text-right">
                      {formatNumber(row.cashflow)}
                    </td>
                    <td className="border border-border px-3 py-1 text-right">
                      {formatNumber(row.presentValue)}
                    </td>
                    <td className="border border-border px-3 py-1 text-right">
                      {row.weight.toFixed(3)}
                    </td>
                    <td className="border border-border px-3 py-1 text-right">
                      {row.weightedTime.toFixed(3)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-semibold bg-muted">
                  <td className="border border-border px-3 py-1">Sum:</td>
                  <td className="border border-border px-3 py-1"></td>
                  <td className="border border-border px-3 py-1 text-right">
                    {formatNumber(bondPrice)}
                  </td>
                  <td className="border border-border px-3 py-1 text-right">1.000</td>
                  <td className="border border-border px-3 py-1 text-right">
                    {duration.toFixed(3)}
                  </td>
                </tr>
              </tfoot>
            </table>
            
            <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Resultat:</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Obligasjonens pris:</strong> {formatNumber(bondPrice)} kr
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Macaulay-durasjon:</strong> {duration.toFixed(3)} år
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Durasjonen viser gjennomsnittlig tid til mottak av kontantstrømmer, 
                vektet etter nåverdi av hver kontantstrøm.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};