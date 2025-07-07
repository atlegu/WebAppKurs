import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, TrendingUp, Building2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const ManhattanDeal = () => {
  const [returnRate, setReturnRate] = useState(7);
  
  // Historical data
  const originalPrice = 24; // $24 in 1626
  const yearsSince = 2024 - 1626; // 398 years
  const currentManhattanValue = 1.7e12; // $1.7 trillion (rough estimate)
  
  // Calculate what the $24 would be worth today
  const futureValue = originalPrice * Math.pow(1 + returnRate / 100, yearsSince);
  
  // Calculate the actual return rate of Manhattan
  const actualReturnRate = (Math.pow(currentManhattanValue / originalPrice, 1 / yearsSince) - 1) * 100;
  
  // Format large numbers
  const formatLargeNumber = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(1)} billioner`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(1)} milliarder`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(1)} millioner`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(1)} tusen`;
    return `$${num.toFixed(0)}`;
  };

  return (
    <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          Historiens mest omtalte "dårlige" handel?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white/80 p-3 rounded-lg border border-amber-300">
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Info className="w-4 h-4" />
            Manhattan-salget i 1626
          </h4>
          <p className="text-xs text-gray-700 mb-3">
            Peter Minuit kjøpte Manhattan fra Lenápe-folket for varer verdt 60 gylden, 
            estimert til ca. $24. Men var det virkelig en dårlig handel?
          </p>
          
          <div className="grid grid-cols-2 gap-2 text-xs mb-3">
            <div className="bg-amber-100 p-2 rounded">
              <span className="font-medium">Kjøpesum (1626):</span>
              <div className="text-base font-bold">$24</div>
            </div>
            <div className="bg-blue-100 p-2 rounded">
              <span className="font-medium">Verdi i dag:</span>
              <div className="text-base font-bold">~$1,7 billioner</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Men vent! La oss gjøre renteregningen:</h4>
          
          <div>
            <label className="text-xs font-medium">
              Hvis de $24 hadde vært investert til {returnRate}% årlig avkastning:
            </label>
            <Slider
              value={[returnRate]}
              onValueChange={(value) => setReturnRate(value[0])}
              min={3}
              max={12}
              step={0.5}
              className="w-full mt-2"
            />
          </div>

          <div className="bg-white/80 p-3 rounded-lg border border-orange-300">
            <p className="text-xs mb-2">
              <strong>Beregning:</strong> $24 × (1 + {returnRate}%)^{yearsSince} år
            </p>
            <p className="text-lg font-bold text-orange-700">
              = {formatLargeNumber(futureValue)}
            </p>
            
            {futureValue > currentManhattanValue && (
              <p className="text-xs text-green-700 mt-2">
                💡 Med {returnRate}% avkastning ville de opprinnelige $24 vært verdt MER enn hele Manhattan i dag!
              </p>
            )}
            
            {futureValue < currentManhattanValue && (
              <p className="text-xs text-red-700 mt-2">
                📉 Med {returnRate}% avkastning ville investeringen vært mindre verdt enn Manhattan.
              </p>
            )}
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg border border-blue-300">
          <h4 className="font-semibold text-xs mb-2 flex items-center gap-2">
            <TrendingUp className="w-3 h-3" />
            Fasit: Manhattans faktiske avkastning
          </h4>
          <p className="text-xs">
            Fra $24 til $1,7 billioner over {yearsSince} år = <strong>{actualReturnRate.toFixed(2)}% årlig</strong>
          </p>
          <p className="text-xs text-gray-600 mt-1 italic">
            En imponerende avkastning, men ikke urealistisk over så lang tid!
          </p>
        </div>

        <div className="text-xs space-y-2 text-gray-700">
          <p className="font-semibold">Leksjonen?</p>
          <ul className="space-y-1 ml-4">
            <li>• Små beløp + lang tid + rentes rente = enorme summer</li>
            <li>• En "billig" pris er relativ - alt handler om alternativkostnad</li>
            <li>• Med 7-8% årlig avkastning dobles pengene hvert 10. år</li>
          </ul>
        </div>

        <div className="bg-amber-100 p-2 rounded text-xs italic">
          <strong>Historisk kontekst:</strong> Det er viktig å huske at Lenápe-folket trolig hadde 
          en annen forståelse av "eierskap" og kanskje så dette som en avtale om deling, 
          ikke permanent salg.
        </div>
      </CardContent>
    </Card>
  );
};

export default ManhattanDeal;