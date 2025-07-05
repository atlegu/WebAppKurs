import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

interface OrderBookLevel {
  price: number;
  volume: number;
  side: 'bid' | 'ask';
}

export const LiquiditySimulator: React.FC = () => {
  const [liquidity, setLiquidity] = useState([70]); // 0-100
  const [orderSize, setOrderSize] = useState([25]); // 0-100
  const [timeHorizon, setTimeHorizon] = useState([50]); // 0-100

  // Generate order book data based on parameters
  const orderBookData = useMemo(() => {
    const liquidityFactor = liquidity[0] / 100;
    const baseLevels = Math.floor(5 + liquidityFactor * 15); // 5-20 levels
    
    const data: OrderBookLevel[] = [];
    const midPrice = 100;
    
    // Generate bid levels (buy orders)
    for (let i = 0; i < baseLevels; i++) {
      const priceOffset = (i + 1) * (0.1 + (1 - liquidityFactor) * 0.4);
      const baseVolume = 50 + Math.random() * 200;
      const volumeMultiplier = liquidityFactor * (1 + Math.random() * 0.5);
      
      data.push({
        price: midPrice - priceOffset,
        volume: Math.floor(baseVolume * volumeMultiplier),
        side: 'bid'
      });
    }
    
    // Generate ask levels (sell orders)
    for (let i = 0; i < baseLevels; i++) {
      const priceOffset = (i + 1) * (0.1 + (1 - liquidityFactor) * 0.4);
      const baseVolume = 50 + Math.random() * 200;
      const volumeMultiplier = liquidityFactor * (1 + Math.random() * 0.5);
      
      data.push({
        price: midPrice + priceOffset,
        volume: Math.floor(baseVolume * volumeMultiplier),
        side: 'ask'
      });
    }
    
    return data.sort((a, b) => a.price - b.price);
  }, [liquidity]);

  // Calculate market metrics
  const metrics = useMemo(() => {
    const bids = orderBookData.filter(level => level.side === 'bid');
    const asks = orderBookData.filter(level => level.side === 'ask');
    
    const bestBid = Math.max(...bids.map(b => b.price));
    const bestAsk = Math.min(...asks.map(a => a.price));
    const spread = bestAsk - bestBid;
    const spreadPercent = (spread / ((bestBid + bestAsk) / 2)) * 100;
    
    // Calculate market impact based on order size and liquidity
    const orderSizeShares = (orderSize[0] / 100) * 1000; // Max 1000 shares
    const timeMultiplier = 1 + (timeHorizon[0] / 100) * 0.5; // Urgency factor
    
    let marketImpact = 0;
    let remainingShares = orderSizeShares;
    
    // Simulate walking through the book
    const relevantLevels = orderSize[0] > 50 ? asks : [...asks].slice(0, 3);
    
    for (const level of relevantLevels) {
      if (remainingShares <= 0) break;
      
      const sharesToTake = Math.min(remainingShares, level.volume);
      marketImpact += (level.price - bestAsk) * (sharesToTake / orderSizeShares);
      remainingShares -= sharesToTake;
    }
    
    const totalImpact = (marketImpact * timeMultiplier);
    const impactPercent = (totalImpact / bestAsk) * 100;
    
    return {
      bestBid: bestBid.toFixed(2),
      bestAsk: bestAsk.toFixed(2),
      spread: spread.toFixed(3),
      spreadPercent: spreadPercent.toFixed(3),
      marketImpact: totalImpact.toFixed(3),
      impactPercent: impactPercent.toFixed(3),
      totalCost: (parseFloat(bestAsk.toFixed(2)) + totalImpact).toFixed(2)
    };
  }, [orderBookData, orderSize, timeHorizon]);

  // Prepare chart data
  const chartData = orderBookData.map(level => ({
    price: level.price.toFixed(2),
    volume: level.side === 'bid' ? -level.volume : level.volume, // Negative for bids
    side: level.side,
    absVolume: level.volume
  }));

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Likviditetssimulator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Juster parametrene for å se hvordan markedsforhold påvirker handelskostnader
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Liquidity Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Likviditet</label>
              <Badge variant="outline">{liquidity[0]}%</Badge>
            </div>
            <Slider
              value={liquidity}
              onValueChange={setLiquidity}
              max={100}
              step={5}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Antall ordrer i markedet
            </p>
          </div>

          {/* Order Size Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Ordrestørrelse</label>
              <Badge variant="outline">{orderSize[0]}%</Badge>
            </div>
            <Slider
              value={orderSize}
              onValueChange={setOrderSize}
              max={100}
              step={5}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Hvor mye du vil handle
            </p>
          </div>

          {/* Time Horizon Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Tidshåndtak</label>
              <Badge variant="outline">{timeHorizon[0]}%</Badge>
            </div>
            <Slider
              value={timeHorizon}
              onValueChange={setTimeHorizon}
              max={100}
              step={10}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Hvor raskt du trenger å handle
            </p>
          </div>
        </div>

        {/* Order Book Visualization */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Ordrebok</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="price" 
                  tick={{ fontSize: 12 }}
                  interval="preserveStartEnd"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => Math.abs(value).toString()}
                />
                <Tooltip 
                  formatter={(value: number, name) => [
                    Math.abs(value), 
                    value < 0 ? 'Kjøpsordrer' : 'Salgsordrer'
                  ]}
                  labelFormatter={(price) => `Pris: ${price}`}
                />
                <Bar dataKey="volume">
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.volume < 0 ? "#10b981" : "#ef4444"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Kjøpsordrer (Bids)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>Salgsordrer (Asks)</span>
            </div>
          </div>
        </div>

        {/* Metrics Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <div className="text-sm text-muted-foreground">Beste Bud</div>
            <div className="text-lg font-semibold text-green-600">{metrics.bestBid}</div>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <div className="text-sm text-muted-foreground">Beste Tilbud</div>
            <div className="text-lg font-semibold text-red-600">{metrics.bestAsk}</div>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <div className="text-sm text-muted-foreground">Spread</div>
            <div className="text-lg font-semibold">{metrics.spread}</div>
            <div className="text-xs text-muted-foreground">({metrics.spreadPercent}%)</div>
          </div>
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <div className="text-sm text-muted-foreground">Markedspåvirkning</div>
            <div className="text-lg font-semibold text-orange-600">{metrics.impactPercent}%</div>
            <div className="text-xs text-muted-foreground">+{metrics.marketImpact} per aksje</div>
          </div>
        </div>

        {/* Educational Summary */}
        <div className="p-4 bg-primary/5 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <TrendingDown className="w-4 h-4" />
            Hva lærer vi?
          </h4>
          <div className="text-sm space-y-2">
            <p>
              <strong>Lav likviditet:</strong> Færre ordrer betyr større spread og høyere kostnader
            </p>
            <p>
              <strong>Store ordrer:</strong> Må "gå dypere" i ordreboken, som øker markedspåvirkningen
            </p>
            <p>
              <strong>Tidspresss:</strong> Haster du, må du betale for øyeblikkelig utførelse
            </p>
            <p className="text-muted-foreground italic mt-3">
              Totalkostnad for din handel: <strong>{metrics.totalCost}</strong> per aksje
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};