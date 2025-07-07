import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calculator } from 'lucide-react';

interface CashflowRow {
  period: number;
  cashflow: number;
  presentValue: number;
  weight: number;
  weightedTime: number;
}

interface FormData {
  years: number;
  couponRate: number;
  effectiveRate: number;
  faceValue: number;
}

export const DurationCalculator: React.FC = () => {
  const [results, setResults] = useState<CashflowRow[]>([]);
  const [bondPrice, setBondPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const form = useForm<FormData>({
    defaultValues: {
      years: 5,
      couponRate: 9,
      effectiveRate: 10,
      faceValue: 1000,
    },
  });

  const formatNumber = (n: number) => {
    return n.toLocaleString('no-NO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const calculateDuration = (data: FormData) => {
    setIsCalculating(true);
    
    const { years: N, couponRate, effectiveRate, faceValue: F } = data;
    const cRate = couponRate / 100;
    const y = effectiveRate / 100;

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
    setIsCalculating(false);
  };

  // Auto-calculate when form values change
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value.years && value.couponRate && value.effectiveRate && value.faceValue) {
        calculateDuration(value as FormData);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-primary" />
          Durasjonskalkulator for obligasjoner
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(calculateDuration)} className="space-y-6">
            {/* Input fields */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="years"
                rules={{ 
                  required: "Antall år er påkrevd",
                  min: { value: 1, message: "Må være minst 1 år" },
                  max: { value: 50, message: "Maksimalt 50 år" }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Antall år (N)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        inputMode="numeric"
                        placeholder="5"
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '' || /^\d+$/.test(value)) {
                            field.onChange(value === '' ? 0 : parseInt(value));
                          }
                        }}
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="couponRate"
                rules={{ 
                  required: "Kupongrate er påkrevd",
                  min: { value: 0, message: "Må være minst 0%" },
                  max: { value: 100, message: "Maksimalt 100%" }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kupongrate (%)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        inputMode="decimal"
                        placeholder="9"
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '' || /^\d*\.?\d*$/.test(value)) {
                            field.onChange(value === '' ? 0 : parseFloat(value));
                          }
                        }}
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="effectiveRate"
                rules={{ 
                  required: "Effektiv rente er påkrevd",
                  min: { value: 0, message: "Må være minst 0%" },
                  max: { value: 100, message: "Maksimalt 100%" }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Effektiv rente (%)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        inputMode="decimal"
                        placeholder="10"
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '' || /^\d*\.?\d*$/.test(value)) {
                            field.onChange(value === '' ? 0 : parseFloat(value));
                          }
                        }}
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="faceValue"
                rules={{ 
                  required: "Pålydende er påkrevd",
                  min: { value: 1, message: "Må være minst 1" }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pålydende</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        inputMode="numeric"
                        placeholder="1000"
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '' || /^\d+$/.test(value)) {
                            field.onChange(value === '' ? 0 : parseInt(value));
                          }
                        }}
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isCalculating}
            >
              {isCalculating ? 'Beregner...' : 'Beregn durasjon'}
            </Button>
          </form>
        </Form>

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
                      {row.weight.toFixed(2)}
                    </td>
                    <td className="border border-border px-3 py-1 text-right">
                      {row.weightedTime.toFixed(2)}
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
                  <td className="border border-border px-3 py-1 text-right">1.00</td>
                  <td className="border border-border px-3 py-1 text-right">
                    {duration.toFixed(2)}
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
                <strong>Macaulay-durasjon:</strong> {duration.toFixed(2)} år
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