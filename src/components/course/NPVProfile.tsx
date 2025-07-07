import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingDown, Info } from 'lucide-react';

interface CashFlow {
  year: number;
  amount: number;
}

interface NPVProfileProps {
  cashFlows: CashFlow[];
  currentRate: number;
}

const NPVProfile: React.FC<NPVProfileProps> = ({ cashFlows, currentRate }) => {
  // Calculate NPV for a given rate
  const calculateNPV = (rate: number): number => {
    return cashFlows.reduce((npv, cf) => {
      const pv = cf.amount / Math.pow(1 + rate / 100, cf.year);
      return npv + pv;
    }, 0);
  };

  // Find IRR
  const findIRR = (): number => {
    let low = -0.99;
    let high = 10;
    let mid = 0;
    
    for (let i = 0; i < 100; i++) {
      mid = (low + high) / 2;
      const npv = calculateNPV(mid * 100);
      
      if (Math.abs(npv) < 1) return mid * 100;
      
      if (npv > 0) low = mid;
      else high = mid;
    }
    
    return mid * 100;
  };

  const irr = findIRR();
  const currentNPV = calculateNPV(currentRate);

  // Generate points for the curve
  const generateCurvePoints = () => {
    const points = [];
    for (let rate = 0; rate <= 30; rate += 0.5) {
      const npv = calculateNPV(rate);
      points.push({ x: rate, y: npv });
    }
    return points;
  };

  const curvePoints = generateCurvePoints();
  
  // Find min and max NPV for scaling
  const npvValues = curvePoints.map(p => p.y);
  const maxNPV = Math.max(...npvValues);
  const minNPV = Math.min(...npvValues);
  const npvRange = maxNPV - minNPV;

  // SVG dimensions
  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 60, bottom: 60, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const xScale = (rate: number) => (rate / 30) * chartWidth;
  const yScale = (npv: number) => chartHeight - ((npv - minNPV) / npvRange) * chartHeight;

  // Create path string for the curve
  const pathData = curvePoints
    .map((point, index) => {
      const x = xScale(point.x);
      const y = yScale(point.y);
      return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    })
    .join(' ');

  const formatCurrency = (value: number) => {
    const absValue = Math.abs(value);
    if (absValue >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    return `${(value / 1000).toFixed(0)}k`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <TrendingDown className="w-4 h-4" />
          NPV-profil - Nåverdi ved ulike avkastningskrav
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <svg width={width} height={height} className="min-w-[600px]">
            <g transform={`translate(${margin.left},${margin.top})`}>
              {/* Grid lines */}
              {[0, 5, 10, 15, 20, 25, 30].map(rate => (
                <g key={rate}>
                  <line
                    x1={xScale(rate)}
                    y1={0}
                    x2={xScale(rate)}
                    y2={chartHeight}
                    stroke="#e0e0e0"
                    strokeDasharray="2,2"
                  />
                  <text
                    x={xScale(rate)}
                    y={chartHeight + 20}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#666"
                  >
                    {rate}%
                  </text>
                </g>
              ))}

              {/* Y-axis grid and labels */}
              {[0, 0.25, 0.5, 0.75, 1].map(fraction => {
                const npv = minNPV + fraction * npvRange;
                const y = yScale(npv);
                return (
                  <g key={fraction}>
                    <line
                      x1={0}
                      y1={y}
                      x2={chartWidth}
                      y2={y}
                      stroke="#e0e0e0"
                      strokeDasharray="2,2"
                    />
                    <text
                      x={-10}
                      y={y + 5}
                      textAnchor="end"
                      fontSize="12"
                      fill="#666"
                    >
                      {formatCurrency(npv)}
                    </text>
                  </g>
                );
              })}

              {/* Zero line */}
              <line
                x1={0}
                y1={yScale(0)}
                x2={chartWidth}
                y2={yScale(0)}
                stroke="#333"
                strokeWidth="2"
              />

              {/* NPV curve */}
              <path
                d={pathData}
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
              />

              {/* Current rate line */}
              <line
                x1={xScale(currentRate)}
                y1={0}
                x2={xScale(currentRate)}
                y2={chartHeight}
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <text
                x={xScale(currentRate)}
                y={-5}
                textAnchor="middle"
                fontSize="12"
                fill="#f97316"
                fontWeight="bold"
              >
                Valgt: {currentRate}%
              </text>

              {/* IRR line */}
              <line
                x1={xScale(irr)}
                y1={0}
                x2={xScale(irr)}
                y2={chartHeight}
                stroke="#dc2626"
                strokeWidth="2"
              />
              <text
                x={xScale(irr)}
                y={-5}
                textAnchor="middle"
                fontSize="12"
                fill="#dc2626"
                fontWeight="bold"
              >
                IRR: {irr.toFixed(1)}%
              </text>

              {/* IRR point */}
              <circle
                cx={xScale(irr)}
                cy={yScale(0)}
                r="5"
                fill="#dc2626"
              />

              {/* Current NPV point */}
              <circle
                cx={xScale(currentRate)}
                cy={yScale(currentNPV)}
                r="5"
                fill="#f97316"
              />
              <text
                x={xScale(currentRate) + 10}
                y={yScale(currentNPV) - 10}
                fontSize="12"
                fill="#f97316"
                fontWeight="bold"
              >
                NPV: {formatCurrency(currentNPV)}
              </text>

              {/* Axis labels */}
              <text
                x={chartWidth / 2}
                y={chartHeight + 50}
                textAnchor="middle"
                fontSize="14"
                fontWeight="bold"
                fill="#333"
              >
                Avkastningskrav (%)
              </text>
              <text
                x={-chartHeight / 2}
                y={-60}
                textAnchor="middle"
                fontSize="14"
                fontWeight="bold"
                fill="#333"
                transform={`rotate(-90, ${-60}, ${-chartHeight / 2})`}
              >
                NPV (kr)
              </text>
            </g>
          </svg>
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 mt-0.5" />
            <div className="text-xs">
              <p className="font-semibold mb-1">Slik leser du NPV-profilen:</p>
              <ul className="space-y-1">
                <li>• Den <span className="text-blue-600 font-semibold">blå kurven</span> viser NPV ved alle mulige avkastningskrav</li>
                <li>• <span className="text-red-600 font-semibold">IRR ({irr.toFixed(1)}%)</span> er hvor kurven krysser null - avkastningen prosjektet gir</li>
                <li>• <span className="text-orange-600 font-semibold">Valgt krav ({currentRate}%)</span> gir NPV = {formatCurrency(currentNPV)}</li>
                <li>• {currentNPV > 0 ? 
                  <span className="text-green-600 font-semibold">Prosjektet er lønnsomt!</span> : 
                  <span className="text-red-600 font-semibold">Prosjektet er ulønnsomt!</span>
                }</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NPVProfile;