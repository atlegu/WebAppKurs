import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Info } from 'lucide-react';

const TimeValueTimeline = () => {
  const [amount, setAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [selectedYear, setSelectedYear] = useState(0);
  const [mode, setMode] = useState<'present' | 'future'>('present');
  const [isDragging, setIsDragging] = useState(false);
  
  const years = 10; // Total years to show on timeline
  
  // Calculate values for each year
  const timelineValues = useMemo(() => {
    const values = [];
    for (let year = -years; year <= years; year++) {
      if (year < 0) {
        // Past values (discounting)
        const value = amount / Math.pow(1 + interestRate/100, Math.abs(year));
        values.push({ year, value });
      } else if (year === 0) {
        // Present
        values.push({ year, value: amount });
      } else {
        // Future values (compounding)
        const value = amount * Math.pow(1 + interestRate/100, year);
        values.push({ year, value });
      }
    }
    return values;
  }, [amount, interestRate]);
  
  // Get value at selected year
  const selectedValue = timelineValues.find(v => v.year === selectedYear)?.value || amount;
  
  // Calculate what the present value would be if we're looking at a future value
  const presentValueOfSelected = selectedYear > 0 
    ? selectedValue / Math.pow(1 + interestRate/100, selectedYear)
    : selectedYear < 0
    ? selectedValue * Math.pow(1 + interestRate/100, Math.abs(selectedYear))
    : selectedValue;
    
  // Calculate what the future value would be at year 10
  const futureValueAtYear10 = amount * Math.pow(1 + interestRate/100, 10);
  
  const formatCurrency = (value: number) => {
    return `${Math.round(value).toLocaleString('no-NO')} kr`;
  };
  
  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };
  
  // Handle timeline click/drag
  const handleTimelineInteraction = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const clickPosition = x / width;
    
    // Map click position to year (-10 to +10)
    const yearRange = years * 2;
    const clickedYear = Math.round(clickPosition * yearRange - years);
    setSelectedYear(Math.max(-years, Math.min(years, clickedYear)));
  };
  
  const handleMouseDown = () => {
    setIsDragging(true);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleTimelineInteraction(event);
    }
  };
  
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-primary">
          Tidsverdien av penger - Interaktiv tidslinje
        </h1>
        <p className="text-sm text-muted-foreground">
          Utforsk hvordan penger endrer verdi over tid med renter
        </p>
      </div>

      {/* Control Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Innstillinger</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-medium">
                Beløp i dag: {formatCurrency(amount)}
              </label>
              <Slider
                value={[amount]}
                onValueChange={(value) => setAmount(value[0])}
                min={100}
                max={100000}
                step={100}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Dette er beløpet slik det er verdt i dag (nåverdi)
              </p>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium">
                Årlig rente: {formatPercentage(interestRate)}
              </label>
              <Slider
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
                min={0}
                max={20}
                step={0.5}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Renten som brukes for å beregne fremtidig verdi
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Timeline */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-lg">Interaktiv tidslinje</CardTitle>
          <p className="text-sm text-muted-foreground">
            Klikk eller dra langs tidslinjen for å se hvordan verdien endrer seg
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Timeline visualization */}
          <div className="relative">
            {/* Timeline track */}
            <div 
              className="relative h-24 bg-gradient-to-r from-blue-100 via-white to-green-100 rounded-lg cursor-pointer select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onClick={handleTimelineInteraction}
            >
              {/* Year markers */}
              <div className="absolute inset-0 flex justify-between items-end px-2">
                {[-10, -5, 0, 5, 10].map(year => (
                  <div 
                    key={year} 
                    className="flex flex-col items-center"
                    style={{ 
                      position: 'absolute',
                      left: `${((year + years) / (years * 2)) * 100}%`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div className={`h-4 w-0.5 ${year === 0 ? 'bg-primary' : 'bg-gray-400'}`} />
                    <span className={`text-xs mt-1 ${year === 0 ? 'font-bold text-primary' : 'text-gray-600'}`}>
                      {year === 0 ? 'Nå' : `${year > 0 ? '+' : ''}${year} år`}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Selected position indicator */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-primary transition-all duration-200"
                style={{ 
                  left: `${((selectedYear + years) / (years * 2)) * 100}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
              </div>
              
              {/* Value curve visualization */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path
                  d={`M ${timelineValues.map((v, i) => {
                    const x = (i / (timelineValues.length - 1)) * 100;
                    const normalizedValue = (v.value - amount) / (futureValueAtYear10 - amount / Math.pow(1 + interestRate/100, 10));
                    const y = 80 - (normalizedValue * 60 + 40);
                    return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
                  }).join(' ')}`}
                  fill="none"
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Value display */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className={`border-2 ${selectedYear < 0 ? 'border-blue-500' : 'border-gray-200'}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Fortid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-blue-600">
                  {selectedYear < 0 ? formatCurrency(selectedValue) : '-'}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {selectedYear < 0 ? `Verdi for ${Math.abs(selectedYear)} år siden` : 'Velg et år i fortiden'}
                </p>
              </CardContent>
            </Card>

            <Card className={`border-2 ${selectedYear === 0 ? 'border-primary' : 'border-gray-200'}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Nåverdi (i dag)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-primary">
                  {formatCurrency(amount)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Beløpets verdi i dag
                </p>
              </CardContent>
            </Card>

            <Card className={`border-2 ${selectedYear > 0 ? 'border-green-500' : 'border-gray-200'}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  Fremtid
                  <ArrowRight className="w-4 h-4" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-green-600">
                  {selectedYear > 0 ? formatCurrency(selectedValue) : '-'}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {selectedYear > 0 ? `Verdi om ${selectedYear} år` : 'Velg et år i fremtiden'}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formula display */}
          {selectedYear !== 0 && (
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Beregning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {selectedYear > 0 ? (
                  <div>
                    <p className="text-sm font-medium mb-2">Fremtidsverdi (FV):</p>
                    <div className="bg-white p-3 rounded border border-blue-300 font-mono text-sm">
                      FV = {formatCurrency(amount)} × (1 + {formatPercentage(interestRate)})^{selectedYear}
                    </div>
                    <p className="text-sm mt-2">
                      = {formatCurrency(amount)} × {(Math.pow(1 + interestRate/100, selectedYear)).toFixed(4)}
                    </p>
                    <p className="text-sm font-bold">
                      = {formatCurrency(selectedValue)}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm font-medium mb-2">Nåverdi (PV) av beløp fra fortiden:</p>
                    <div className="bg-white p-3 rounded border border-blue-300 font-mono text-sm">
                      Beløp i fortiden = {formatCurrency(amount)} ÷ (1 + {formatPercentage(interestRate)})^{Math.abs(selectedYear)}
                    </div>
                    <p className="text-sm mt-2">
                      = {formatCurrency(amount)} ÷ {(Math.pow(1 + interestRate/100, Math.abs(selectedYear))).toFixed(4)}
                    </p>
                    <p className="text-sm font-bold">
                      = {formatCurrency(selectedValue)}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Quick examples */}
          <div className="grid md:grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => {
                setAmount(10000);
                setInterestRate(7);
                setSelectedYear(5);
              }}
            >
              Eksempel: 10.000 kr, 7% rente, 5 år frem
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setAmount(50000);
                setInterestRate(4);
                setSelectedYear(-3);
              }}
            >
              Eksempel: Hva var 50.000 kr verdt for 3 år siden?
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Learning points */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-base">📚 Læringsmomenter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-yellow-600">•</span>
            <p className="text-sm">
              <strong>Fremtidsverdi:</strong> Penger vokser eksponentielt over tid med renter. Jo lengre tid, desto større effekt.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-600">•</span>
            <p className="text-sm">
              <strong>Nåverdi:</strong> Fremtidige penger er mindre verdt i dag. Vi må diskontere dem med renten.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-600">•</span>
            <p className="text-sm">
              <strong>Tid og rente:</strong> Både tid og rente har stor påvirkning. Dobling av tid eller rente gir ikke dobling av verdi - effekten er eksponentiell!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeValueTimeline;