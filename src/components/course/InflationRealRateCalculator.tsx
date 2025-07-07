import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ShoppingCart, TrendingUp, TrendingDown, Info, Calculator } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  ComposedChart,
} from 'recharts';

const InflationRealRateCalculator = () => {
  const [nominalRate, setNominalRate] = useState(5);
  const [inflationRate, setInflationRate] = useState(2);
  const [years, setYears] = useState(10);
  const [initialAmount, setInitialAmount] = useState(100000);
  const [showBasket, setShowBasket] = useState(true);
  
  // Shopping basket example
  const shoppingBasket = [
    { item: 'Melk (1 liter)', price2024: 23, weight: 15 },
    { item: 'Brød', price2024: 35, weight: 10 },
    { item: 'Bensin (1 liter)', price2024: 24, weight: 20 },
    { item: 'Strøm (per kWh)', price2024: 1.5, weight: 25 },
    { item: 'Bussbillett', price2024: 40, weight: 10 },
    { item: 'Kaffe (café)', price2024: 45, weight: 5 },
    { item: 'Netflix (måned)', price2024: 109, weight: 5 },
    { item: 'Bolig (per m²)', price2024: 50000, weight: 10 },
  ];
  
  // Calculate real rate (Fisher equation approximation and exact)
  const realRateApprox = nominalRate - inflationRate;
  const realRateExact = ((1 + nominalRate / 100) / (1 + inflationRate / 100) - 1) * 100;
  
  // Generate data for charts
  const chartData = useMemo(() => {
    const data = [];
    
    for (let year = 0; year <= years; year++) {
      const nominalValue = initialAmount * Math.pow(1 + nominalRate / 100, year);
      const priceLevel = Math.pow(1 + inflationRate / 100, year);
      const realValue = nominalValue / priceLevel;
      const purchasingPower = initialAmount / priceLevel;
      
      data.push({
        year,
        nominalValue,
        realValue,
        purchasingPower,
        priceLevel: priceLevel * 100,
        inflationLoss: nominalValue - realValue,
      });
    }
    
    return data;
  }, [nominalRate, inflationRate, years, initialAmount]);
  
  // Calculate basket prices over time
  const basketData = useMemo(() => {
    const data = [];
    const totalWeight = shoppingBasket.reduce((sum, item) => sum + item.weight, 0);
    
    for (let yearOffset = -10; yearOffset <= 10; yearOffset++) {
      const priceMultiplier = Math.pow(1 + inflationRate / 100, yearOffset);
      let weightedSum = 0;
      
      const prices = shoppingBasket.map(item => {
        const adjustedPrice = item.price2024 * priceMultiplier;
        weightedSum += (adjustedPrice * item.weight) / totalWeight;
        return {
          ...item,
          price: adjustedPrice,
        };
      });
      
      data.push({
        year: 2024 + yearOffset,
        cpi: weightedSum / (shoppingBasket.reduce((sum, item) => sum + (item.price2024 * item.weight), 0) / totalWeight) * 100,
        melk: prices[0].price,
        bensin: prices[2].price,
        strøm: prices[3].price,
      });
    }
    
    return data;
  }, [inflationRate]);
  
  const formatCurrency = (value: number) => {
    return `${value.toLocaleString('no-NO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
  };
  
  const formatPercent = (value: number, decimals = 2) => {
    return `${value.toFixed(2)}%`;
  };
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border text-xs">
          <p className="font-semibold mb-1">År {label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.dataKey === 'priceLevel' 
                ? `${entry.value.toFixed(1)}` 
                : formatCurrency(entry.value)}
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
          Inflasjon og reell rente
        </h1>
        <p className="text-sm text-muted-foreground">
          Forstå forskjellen mellom nominell avkastning og reell kjøpekraft
        </p>
      </div>

      {/* Shopping basket illustration */}
      {showBasket && (
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Handlekurven som eksempel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-xs">
                Tenk deg at du fyller en handlekurv med følgende varer i dag (2024):
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                {shoppingBasket.slice(0, 8).map((item, index) => (
                  <div key={index} className="bg-white p-2 rounded border">
                    <div className="font-medium">{item.item}</div>
                    <div className="text-primary">{item.price2024} kr</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
                <p className="text-xs font-semibold mb-1">Hva er inflasjon?</p>
                <p className="text-xs">
                  Inflasjon betyr at den samme handlekurven blir dyrere over tid. 
                  Med {formatPercent(inflationRate)} årlig inflasjon vil kurven koste:
                </p>
                <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                  <div className="text-center">
                    <div className="font-medium">Om 1 år</div>
                    <div className="text-lg font-bold text-orange-600">
                      {formatCurrency(1000 * Math.pow(1 + inflationRate / 100, 1))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">Om 5 år</div>
                    <div className="text-lg font-bold text-orange-600">
                      {formatCurrency(1000 * Math.pow(1 + inflationRate / 100, 5))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">Om 10 år</div>
                    <div className="text-lg font-bold text-orange-600">
                      {formatCurrency(1000 * Math.pow(1 + inflationRate / 100, 10))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Controls */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Juster parametrene</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Nominell rente: {formatPercent(nominalRate)}
              </label>
              <Slider
                value={[nominalRate]}
                onValueChange={(value) => setNominalRate(value[0])}
                min={-5}
                max={20}
                step={0.5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Inflasjon: {formatPercent(inflationRate)}
              </label>
              <Slider
                value={[inflationRate]}
                onValueChange={(value) => setInflationRate(value[0])}
                min={-2}
                max={10}
                step={0.5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Tidsperiode: {years} år
              </label>
              <Slider
                value={[years]}
                onValueChange={(value) => setYears(value[0])}
                min={1}
                max={30}
                step={1}
                className="w-full"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-medium">
              Startbeløp: {formatCurrency(initialAmount)}
            </label>
            <Slider
              value={[initialAmount]}
              onValueChange={(value) => setInitialAmount(value[0])}
              min={10000}
              max={1000000}
              step={10000}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Key concepts */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-blue-700">Nominell rente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">{formatPercent(nominalRate)}</div>
            <p className="text-xs text-muted-foreground">
              Den oppgitte renten på sparekonto, obligasjoner eller lån. 
              Viser endring i antall kroner.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-orange-700">Inflasjon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">{formatPercent(inflationRate)}</div>
            <p className="text-xs text-muted-foreground">
              Generell prisstigning i økonomien. 
              Reduserer kjøpekraften til pengene dine.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-green-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-green-700">Reell rente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2 text-green-700">
              {formatPercent(realRateExact)}
            </div>
            <p className="text-xs text-muted-foreground">
              Din faktiske avkastning justert for inflasjon. 
              Viser endring i kjøpekraft.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Fisher equation */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Fisher-ligningen</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs font-semibold mb-2">Eksakt formel:</p>
              <p className="text-sm font-mono text-center mb-2">
                (1 + r<sub>nom</sub>) = (1 + r<sub>real</sub>) × (1 + π)
              </p>
              <p className="text-xs text-gray-600">
                Løst for reell rente:
              </p>
              <p className="text-sm font-mono text-center mt-1">
                r<sub>real</sub> = (1 + r<sub>nom</sub>) / (1 + π) - 1
              </p>
              <p className="text-sm font-mono text-center mt-2 text-green-700">
                = (1 + {(nominalRate/100).toFixed(3)}) / (1 + {(inflationRate/100).toFixed(3)}) - 1
              </p>
              <p className="text-sm font-mono text-center font-bold text-green-700">
                = {formatPercent(realRateExact)}
              </p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs font-semibold mb-2">Tilnærming (for lave renter):</p>
              <p className="text-sm font-mono text-center mb-2">
                r<sub>real</sub> ≈ r<sub>nom</sub> - π
              </p>
              <p className="text-sm font-mono text-center mt-2 text-blue-700">
                ≈ {formatPercent(nominalRate)} - {formatPercent(inflationRate)}
              </p>
              <p className="text-sm font-mono text-center font-bold text-blue-700">
                ≈ {formatPercent(realRateApprox)}
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Differanse fra eksakt: {formatPercent(Math.abs(realRateExact - realRateApprox), 3)}
              </p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-3 rounded-lg border border-amber-300">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 mt-0.5" />
              <div className="text-xs">
                <p className="font-semibold mb-1">Hvorfor er den eksakte formelen viktig?</p>
                <p>
                  Ved høye inflasjonsrater blir tilnærmingen unøyaktig. 
                  I land med hyperinflasjon må man alltid bruke den eksakte formelen.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Nominell verdi vs. Reell kjøpekraft</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="year" 
                  label={{ value: 'År', position: 'insideBottom', offset: -5, style: { fontSize: 10 } }}
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fontSize: 10 }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  label={{ value: 'Verdi (kr)', angle: -90, position: 'insideLeft', style: { fontSize: 10 } }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fontSize: 10 }}
                  label={{ value: 'Prisnivå (indeks)', angle: 90, position: 'insideRight', style: { fontSize: 10 } }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
                
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="inflationLoss"
                  name="Tapt til inflasjon"
                  fill="#FEE2E2"
                  stroke="#EF4444"
                  strokeWidth={0}
                />
                
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="nominalValue" 
                  name="Nominell verdi" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                />
                
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="realValue" 
                  name="Reell verdi" 
                  stroke="#10B981" 
                  strokeWidth={2}
                />
                
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="purchasingPower" 
                  name="Kjøpekraft (ingen rente)" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="priceLevel" 
                  name="Prisnivå" 
                  stroke="#8B5CF6" 
                  strokeWidth={1}
                  strokeDasharray="3 3"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="bg-blue-50 p-2 rounded">
              <p className="font-medium text-blue-700">Nominell verdi</p>
              <p className="text-lg font-bold">{formatCurrency(chartData[chartData.length - 1].nominalValue)}</p>
            </div>
            <div className="bg-green-50 p-2 rounded">
              <p className="font-medium text-green-700">Reell verdi</p>
              <p className="text-lg font-bold">{formatCurrency(chartData[chartData.length - 1].realValue)}</p>
            </div>
            <div className="bg-orange-50 p-2 rounded">
              <p className="font-medium text-orange-700">Kjøpekraft</p>
              <p className="text-lg font-bold">{formatCurrency(chartData[chartData.length - 1].purchasingPower)}</p>
            </div>
            <div className="bg-red-50 p-2 rounded">
              <p className="font-medium text-red-700">Tapt til inflasjon</p>
              <p className="text-lg font-bold">{formatCurrency(chartData[chartData.length - 1].inflationLoss)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CPI visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span>Konsumprisindeks (KPI) og prisutviklingen</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowBasket(!showBasket)}
            >
              {showBasket ? 'Skjul' : 'Vis'} handlekurv
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={basketData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
                
                <Line 
                  type="monotone" 
                  dataKey="cpi" 
                  name="KPI (2024 = 100)" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="melk" 
                  name="Melk (kr/liter)" 
                  stroke="#3B82F6" 
                  strokeWidth={1}
                />
                <Line 
                  type="monotone" 
                  dataKey="bensin" 
                  name="Bensin (kr/liter)" 
                  stroke="#EF4444" 
                  strokeWidth={1}
                />
                
                <ReferenceLine 
                  x={2024} 
                  stroke="#666" 
                  strokeDasharray="3 3"
                  label={{ value: "I dag", position: "top", style: { fontSize: 10 } }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 bg-gray-50 p-3 rounded-lg">
            <h4 className="text-xs font-semibold mb-2">Om konsumprisindeksen:</h4>
            <ul className="text-xs space-y-1">
              <li>• KPI måler prisutvikling på en "kurv" av varer og tjenester</li>
              <li>• Kurven vektes etter hva folk faktisk bruker penger på</li>
              <li>• Enkeltvarer kan stige mer eller mindre enn inflasjonen</li>
              <li>• SSB beregner offisiell KPI for Norge hver måned</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Practical examples */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Praktiske eksempler
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg border">
              <h4 className="text-sm font-semibold mb-2">Sparekonto i lavrentetider</h4>
              <p className="text-xs mb-2">
                Rente: 1,5% | Inflasjon: 3%
              </p>
              <p className="text-xs">
                Reell rente = -1,46%<br/>
                <span className="text-red-600">Du taper kjøpekraft!</span>
              </p>
            </div>
            
            <div className="bg-white p-3 rounded-lg border">
              <h4 className="text-sm font-semibold mb-2">Obligasjon i høyinflasjon</h4>
              <p className="text-xs mb-2">
                Rente: 8% | Inflasjon: 6%
              </p>
              <p className="text-xs">
                Reell rente = 1,89%<br/>
                <span className="text-green-600">Positiv reell avkastning</span>
              </p>
            </div>
          </div>
          
          <div className="bg-amber-100 p-3 rounded-lg border border-amber-300">
            <p className="text-xs font-semibold mb-1">Historisk perspektiv:</p>
            <p className="text-xs">
              På 1970-tallet hadde Norge inflasjon over 10% årlig. 
              Selv med høye nominelle renter var reell rente ofte negativ. 
              De som hadde gjeld tjente på det, mens sparere tapte kjøpekraft.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InflationRealRateCalculator;