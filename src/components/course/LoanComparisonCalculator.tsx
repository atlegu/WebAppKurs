import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Calculator, TrendingDown, DollarSign, Calendar, Info } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const LoanComparisonCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTermYears, setLoanTermYears] = useState(25);
  const [showPaymentPlan, setShowPaymentPlan] = useState(false);
  const [selectedView, setSelectedView] = useState('comparison');
  
  // Calculate monthly interest rate
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;
  
  // Calculate annuity payment
  const annuityPayment = useMemo(() => {
    if (monthlyRate === 0) return loanAmount / totalMonths;
    return loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
           (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }, [loanAmount, monthlyRate, totalMonths]);
  
  // Generate payment schedules
  const paymentSchedules = useMemo(() => {
    const schedules = {
      annuity: [],
      serial: [],
      comparison: []
    };
    
    let annuityBalance = loanAmount;
    let serialBalance = loanAmount;
    const serialPrincipal = loanAmount / totalMonths;
    
    let annuityTotalInterest = 0;
    let serialTotalInterest = 0;
    
    for (let month = 1; month <= totalMonths; month++) {
      // Annuity loan calculations
      const annuityInterest = annuityBalance * monthlyRate;
      const annuityPrincipalPayment = annuityPayment - annuityInterest;
      annuityBalance -= annuityPrincipalPayment;
      annuityTotalInterest += annuityInterest;
      
      // Serial loan calculations
      const serialInterest = serialBalance * monthlyRate;
      const serialPayment = serialPrincipal + serialInterest;
      serialBalance -= serialPrincipal;
      serialTotalInterest += serialInterest;
      
      // Store monthly data
      schedules.annuity.push({
        month,
        payment: annuityPayment,
        principal: annuityPrincipalPayment,
        interest: annuityInterest,
        balance: Math.max(0, annuityBalance),
        totalInterest: annuityTotalInterest
      });
      
      schedules.serial.push({
        month,
        payment: serialPayment,
        principal: serialPrincipal,
        interest: serialInterest,
        balance: Math.max(0, serialBalance),
        totalInterest: serialTotalInterest
      });
      
      // Comparison data (yearly for chart)
      if (month % 12 === 0 || month === 1) {
        schedules.comparison.push({
          year: Math.ceil(month / 12),
          annuityPayment: annuityPayment * 12,
          serialPayment: serialPayment * 12,
          annuityBalance: Math.max(0, annuityBalance),
          serialBalance: Math.max(0, serialBalance),
          annuityTotalPaid: annuityPayment * month,
          serialTotalPaid: schedules.serial.reduce((sum, p) => sum + p.payment, 0),
        });
      }
    }
    
    return schedules;
  }, [loanAmount, monthlyRate, totalMonths, annuityPayment]);
  
  // Calculate summary statistics
  const summary = useMemo(() => {
    const annuityTotal = annuityPayment * totalMonths;
    const serialTotal = paymentSchedules.serial.reduce((sum, p) => sum + p.payment, 0);
    const annuityInterest = annuityTotal - loanAmount;
    const serialInterest = serialTotal - loanAmount;
    
    return {
      annuity: {
        monthlyPayment: annuityPayment,
        totalPayment: annuityTotal,
        totalInterest: annuityInterest,
        firstPayment: annuityPayment,
        lastPayment: annuityPayment
      },
      serial: {
        monthlyPaymentAvg: serialTotal / totalMonths,
        totalPayment: serialTotal,
        totalInterest: serialInterest,
        firstPayment: paymentSchedules.serial[0]?.payment || 0,
        lastPayment: paymentSchedules.serial[paymentSchedules.serial.length - 1]?.payment || 0
      }
    };
  }, [annuityPayment, totalMonths, paymentSchedules, loanAmount]);
  
  const formatCurrency = (value: number) => {
    return `${value.toLocaleString('no-NO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
  };
  
  const formatPercent = (value: number) => {
    return `${value.toFixed(2)}%`;
  };
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border text-xs">
          <p className="font-semibold mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold text-primary">
          Serielån vs. Annuitetslån
        </h1>
        <p className="text-sm text-muted-foreground">
          Forstå forskjellen mellom de to vanligste nedbetalingsformene
        </p>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Låneparametere</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Lånebeløp: {formatCurrency(loanAmount)}
              </label>
              <Slider
                value={[loanAmount]}
                onValueChange={(value) => setLoanAmount(value[0])}
                min={100000}
                max={5000000}
                step={50000}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Rente: {formatPercent(interestRate)}
              </label>
              <Slider
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
                min={1}
                max={10}
                step={0.1}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Nedbetalingstid: {loanTermYears} år
              </label>
              <Slider
                value={[loanTermYears]}
                onValueChange={(value) => setLoanTermYears(value[0])}
                min={5}
                max={30}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key concepts */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-blue-200">
          <CardHeader className="pb-3 bg-blue-50">
            <CardTitle className="text-base flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Annuitetslån
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-3">
            <p className="text-xs text-muted-foreground">
              Like store betalinger gjennom hele låneperioden. Betalingen består av renter og avdrag.
            </p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Månedlig betaling:</span>
                <span className="font-bold">{formatCurrency(summary.annuity.monthlyPayment)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Total betalt:</span>
                <span className="font-bold">{formatCurrency(summary.annuity.totalPayment)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Totale renter:</span>
                <span className="font-bold text-orange-600">{formatCurrency(summary.annuity.totalInterest)}</span>
              </div>
            </div>
            
            <div className="bg-blue-100 p-2 rounded text-xs">
              <p className="font-semibold mb-1">Fordeler:</p>
              <ul className="space-y-1 ml-3">
                <li>• Forutsigbar økonomi</li>
                <li>• Lavere belastning i starten</li>
                <li>• Enklere budsjettering</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-green-200">
          <CardHeader className="pb-3 bg-green-50">
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              Serielån
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-3">
            <p className="text-xs text-muted-foreground">
              Like store avdrag hver måned. Rentene blir mindre etter hvert som lånet nedbetales.
            </p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Første betaling:</span>
                <span className="font-bold">{formatCurrency(summary.serial.firstPayment)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Siste betaling:</span>
                <span className="font-bold">{formatCurrency(summary.serial.lastPayment)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Total betalt:</span>
                <span className="font-bold">{formatCurrency(summary.serial.totalPayment)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Totale renter:</span>
                <span className="font-bold text-green-600">{formatCurrency(summary.serial.totalInterest)}</span>
              </div>
            </div>
            
            <div className="bg-green-100 p-2 rounded text-xs">
              <p className="font-semibold mb-1">Fordeler:</p>
              <ul className="space-y-1 ml-3">
                <li>• Lavere totale rentekostnader</li>
                <li>• Raskere nedbetaling</li>
                <li>• Synkende belastning over tid</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparison info */}
      <Card className="bg-amber-50 border-amber-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="w-4 h-4" />
            Viktig å forstå
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-xs">
            <p>
              <strong>Serielån er ikke "billigere" enn annuitetslån!</strong> 
              Forskjellen i totale renter kommer av at du betaler ned lånet raskere med serielån.
            </p>
            
            <div className="bg-white p-3 rounded-lg border border-amber-300">
              <p className="font-semibold mb-2">Sammenligning med annuitetslån fra modul 3.5:</p>
              <p className="mb-2">
                I modul 3.5 lærte du at annuitetslån har like store betalinger som består av både renter og avdrag. 
                Formelen vi brukte var:
              </p>
              <p className="font-mono text-center mb-2">
                Betaling = Lån / Annuitetsfaktor
              </p>
              <p>
                Med serielån er avdragsdelen fast, mens rentedelen synker. 
                Dette gir høyere betalinger i starten, men lavere totale renter.
              </p>
            </div>
            
            <p className="italic">
              Du sparer {formatCurrency(summary.annuity.totalInterest - summary.serial.totalInterest)} i renter 
              med serielån, men dette er fordi du betaler mer i starten. 
              Det er samme prinsipp som om du betalte ned deler av annuitetslånet ekstra tidlig.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* View selector */}
      <div className="flex gap-2 justify-center">
        <Button
          variant={selectedView === 'comparison' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedView('comparison')}
        >
          Sammenligning
        </Button>
        <Button
          variant={selectedView === 'payment' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedView('payment')}
        >
          Betalingsutvikling
        </Button>
        <Button
          variant={selectedView === 'balance' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedView('balance')}
        >
          Gjenværende lån
        </Button>
        <Button
          variant={selectedView === 'composition' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedView('composition')}
        >
          Renter vs. Avdrag
        </Button>
      </div>

      {/* Charts */}
      {selectedView === 'comparison' && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Årlig betaling - sammenligning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={paymentSchedules.comparison} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="year" 
                    label={{ value: 'År', position: 'insideBottom', offset: -5, style: { fontSize: 10 } }}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    tick={{ fontSize: 10 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  
                  <Bar dataKey="annuityPayment" name="Annuitetslån" fill="#3B82F6" />
                  <Bar dataKey="serialPayment" name="Serielån" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedView === 'payment' && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Månedlig betaling over tid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="month" 
                    label={{ value: 'Måned', position: 'insideBottom', offset: -5, style: { fontSize: 10 } }}
                    tick={{ fontSize: 10 }}
                    domain={[0, totalMonths]}
                    ticks={[0, 60, 120, 180, 240, 300]}
                  />
                  <YAxis 
                    tick={{ fontSize: 10 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  
                  <Line 
                    data={paymentSchedules.annuity}
                    type="monotone" 
                    dataKey="payment" 
                    name="Annuitetslån" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line 
                    data={paymentSchedules.serial}
                    type="monotone" 
                    dataKey="payment" 
                    name="Serielån" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedView === 'balance' && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Gjenværende lånebeløp</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="month" 
                    label={{ value: 'Måned', position: 'insideBottom', offset: -5, style: { fontSize: 10 } }}
                    tick={{ fontSize: 10 }}
                    domain={[0, totalMonths]}
                    ticks={[0, 60, 120, 180, 240, 300]}
                  />
                  <YAxis 
                    tick={{ fontSize: 10 }}
                    tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  
                  <Area 
                    data={paymentSchedules.serial}
                    type="monotone" 
                    dataKey="balance" 
                    name="Serielån" 
                    stroke="#10B981" 
                    fill="#10B981"
                    fillOpacity={0.3}
                  />
                  <Area 
                    data={paymentSchedules.annuity}
                    type="monotone" 
                    dataKey="balance" 
                    name="Annuitetslån" 
                    stroke="#3B82F6" 
                    fill="#3B82F6"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 bg-gray-50 p-3 rounded-lg">
              <p className="text-xs">
                <strong>Merk:</strong> Serielånet (grønn) nedbetales raskere enn annuitetslånet (blå). 
                Dette er grunnen til at serielån har lavere totale rentekostnader - du skylder mindre over tid.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedView === 'composition' && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Sammensetning av betalinger (første 5 år)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="month" 
                    label={{ value: 'Måned', position: 'insideBottom', offset: -5, style: { fontSize: 10 } }}
                    tick={{ fontSize: 10 }}
                    domain={[0, 60]}
                  />
                  <YAxis 
                    tick={{ fontSize: 10 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  
                  <Bar 
                    data={paymentSchedules.annuity.slice(0, 60)}
                    dataKey="principal" 
                    name="Avdrag (Annuitet)" 
                    stackId="annuity"
                    fill="#93C5FD" 
                  />
                  <Bar 
                    data={paymentSchedules.annuity.slice(0, 60)}
                    dataKey="interest" 
                    name="Renter (Annuitet)" 
                    stackId="annuity"
                    fill="#3B82F6" 
                  />
                  
                  <Line 
                    data={paymentSchedules.serial.slice(0, 60)}
                    type="monotone" 
                    dataKey="payment" 
                    name="Total betaling (Serie)" 
                    stroke="#10B981" 
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Payment plan table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span>Nedbetalingsplan</span>
            <Button
              size="sm"
              variant={showPaymentPlan ? "default" : "outline"}
              onClick={() => setShowPaymentPlan(!showPaymentPlan)}
            >
              {showPaymentPlan ? "Skjul" : "Vis"} detaljer
            </Button>
          </CardTitle>
        </CardHeader>
        {showPaymentPlan && (
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">År</TableHead>
                    <TableHead className="text-xs text-center" colSpan={3}>Annuitetslån</TableHead>
                    <TableHead className="text-xs text-center" colSpan={3}>Serielån</TableHead>
                  </TableRow>
                  <TableRow>
                    <TableHead className="text-xs"></TableHead>
                    <TableHead className="text-xs text-right">Betaling</TableHead>
                    <TableHead className="text-xs text-right">Renter</TableHead>
                    <TableHead className="text-xs text-right">Gjenstående</TableHead>
                    <TableHead className="text-xs text-right">Betaling</TableHead>
                    <TableHead className="text-xs text-right">Renter</TableHead>
                    <TableHead className="text-xs text-right">Gjenstående</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 5, 10, 15, 20, 25].map(year => {
                    if (year > loanTermYears) return null;
                    const monthIndex = (year - 1) * 12;
                    const annuityData = paymentSchedules.annuity[monthIndex];
                    const serialData = paymentSchedules.serial[monthIndex];
                    
                    return (
                      <TableRow key={year}>
                        <TableCell className="text-xs font-medium">{year}</TableCell>
                        <TableCell className="text-xs text-right">
                          {formatCurrency(annuityData?.payment * 12 || 0)}
                        </TableCell>
                        <TableCell className="text-xs text-right">
                          {formatCurrency(annuityData?.interest * 12 || 0)}
                        </TableCell>
                        <TableCell className="text-xs text-right">
                          {formatCurrency(annuityData?.balance || 0)}
                        </TableCell>
                        <TableCell className="text-xs text-right">
                          {formatCurrency(serialData?.payment * 12 || 0)}
                        </TableCell>
                        <TableCell className="text-xs text-right">
                          {formatCurrency(serialData?.interest * 12 || 0)}
                        </TableCell>
                        <TableCell className="text-xs text-right">
                          {formatCurrency(serialData?.balance || 0)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Summary */}
      <Card className="bg-purple-50 border-purple-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Oppsummering
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-semibold mb-2">Når passer annuitetslån?</h4>
              <ul className="space-y-1 ml-3">
                <li>• Du ønsker forutsigbare utgifter</li>
                <li>• Du har stram økonomi i starten</li>
                <li>• Du forventer økende inntekt over tid</li>
                <li>• Du vil ha enkel budsjettering</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Når passer serielån?</h4>
              <ul className="space-y-1 ml-3">
                <li>• Du har god økonomi nå</li>
                <li>• Du ønsker lavest mulig rentekostnader</li>
                <li>• Du forventer lavere inntekt senere (pensjon)</li>
                <li>• Du liker at belastningen reduseres over tid</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-white rounded-lg border border-purple-300">
            <p className="text-xs">
              <strong>Husk:</strong> Begge lånetyper har samme rente. 
              Forskjellen i totale kostnader kommer kun av hvor raskt lånet nedbetales. 
              Du kan alltid betale ekstra avdrag på et annuitetslån for å oppnå samme effekt som et serielån.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoanComparisonCalculator;