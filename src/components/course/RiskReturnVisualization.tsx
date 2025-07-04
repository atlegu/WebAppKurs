import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface AssetClass {
  name: string;
  expectedReturn: number;
  volatility: number;
  color: string;
  description: string;
}

const historicalData: AssetClass[] = [
  { name: "Statsobligasjoner", expectedReturn: 3, volatility: 2, color: "bg-green-500", description: "Lav risiko, stabil avkastning" },
  { name: "Bedriftsobligasjoner", expectedReturn: 5, volatility: 4, color: "bg-blue-500", description: "Moderat risiko, bedre avkastning" },
  { name: "Blandede fond", expectedReturn: 7, volatility: 8, color: "bg-yellow-500", description: "Balansert risiko-avkastning" },
  { name: "Aksjer (store)", expectedReturn: 10, volatility: 15, color: "bg-orange-500", description: "Høyere risiko, høyere avkastning" },
  { name: "Aksjer (små)", expectedReturn: 12, volatility: 22, color: "bg-red-500", description: "Høy risiko, høy avkastning" },
  { name: "Emerging Markets", expectedReturn: 14, volatility: 28, color: "bg-purple-500", description: "Høyest risiko og potensial" }
];

const timelineEvents = [
  { year: "1930", event: "Mavefølelse og intuisjon", description: "Investorer stolte på erfaring og magefølelse" },
  { year: "1952", event: "Markowitz - Porteføljeteori", description: "Moderne porteføljeteori: diversifisering reduserer risiko" },
  { year: "1964", event: "CAPM-modellen", description: "Sharpe og Lintner: systematisk risiko gir risikopremie" },
  { year: "1970-2000", event: "Empirisk forskning", description: "Historiske data bekrefter risiko-avkastning sammenheng" },
  { year: "2000+", event: "Moderne risikostyring", description: "Klimarisiko, big data og regulatoriske krav" }
];

export const RiskReturnVisualization = () => {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [riskTolerance, setRiskTolerance] = useState([10]);

  const recommendedAssets = useMemo(() => {
    const tolerance = riskTolerance[0];
    return historicalData.filter(asset => asset.volatility <= tolerance);
  }, [riskTolerance]);

  const maxReturn = Math.max(...historicalData.map(a => a.expectedReturn));
  const maxVolatility = Math.max(...historicalData.map(a => a.volatility));

  return (
    <Card className="w-full max-w-6xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-center">📊 Risiko-Avkastning Visualisering</CardTitle>
        <p className="text-center text-muted-foreground">
          Utforsk forholdet mellom risiko og avkastning gjennom historien
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="scatter" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="scatter">Risiko-Avkastning Sky</TabsTrigger>
            <TabsTrigger value="timeline">Historisk Utvikling</TabsTrigger>
            <TabsTrigger value="tool">Risikotoleranse</TabsTrigger>
          </TabsList>

          {/* Risk-Return Scatter Plot */}
          <TabsContent value="scatter" className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-center">Klassisk Risiko-Avkastning Sky</h3>
              <div className="relative h-96 bg-white dark:bg-gray-800 rounded border-2 border-gray-200 dark:border-gray-700">
                {/* Axes */}
                <div className="absolute bottom-0 left-0 w-full h-full">
                  {/* Y-axis (Return) */}
                  <div className="absolute left-0 top-0 h-full w-px bg-gray-400"></div>
                  <div className="absolute left-0 bottom-0 text-xs text-gray-500 transform -rotate-90 origin-bottom-left translate-x-4 translate-y-1/2">
                    Forventet Avkastning (%)
                  </div>
                  
                  {/* X-axis (Risk) */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gray-400"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 text-xs text-gray-500">
                    Risiko/Volatilitet (%)
                  </div>

                  {/* Plot points */}
                  {historicalData.map((asset, index) => {
                    const x = (asset.volatility / maxVolatility) * 90 + 5; // 5-95% of width
                    const y = 90 - (asset.expectedReturn / maxReturn) * 85; // 5-90% of height, inverted
                    
                    return (
                      <div
                        key={asset.name}
                        className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-200 ${
                          selectedAsset === asset.name ? 'scale-150 ring-4 ring-blue-300' : 'hover:scale-125'
                        }`}
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        onClick={() => setSelectedAsset(selectedAsset === asset.name ? null : asset.name)}
                      >
                        <div className={`w-full h-full rounded-full ${asset.color}`}></div>
                      </div>
                    );
                  })}

                  {/* Efficient Frontier Line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path
                      d="M 20 340 Q 150 250 360 80"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      opacity="0.6"
                    />
                    <text x="200" y="180" fill="#3b82f6" fontSize="12" className="font-semibold">
                      Effisient Front
                    </text>
                  </svg>
                </div>
              </div>
              
              {/* Legend */}
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                {historicalData.map((asset) => (
                  <div
                    key={asset.name}
                    className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                      selectedAsset === asset.name ? 'bg-blue-100 dark:bg-blue-900/30' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setSelectedAsset(selectedAsset === asset.name ? null : asset.name)}
                  >
                    <div className={`w-3 h-3 rounded-full ${asset.color}`}></div>
                    <span className="text-sm font-medium">{asset.name}</span>
                  </div>
                ))}
              </div>

              {/* Asset Details */}
              {selectedAsset && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border">
                  {(() => {
                    const asset = historicalData.find(a => a.name === selectedAsset);
                    return asset ? (
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{asset.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{asset.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-sm font-medium">Forventet avkastning:</span>
                            <span className="block text-lg font-bold text-green-600">{asset.expectedReturn}%</span>
                          </div>
                          <div>
                            <span className="text-sm font-medium">Volatilitet:</span>
                            <span className="block text-lg font-bold text-orange-600">{asset.volatility}%</span>
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}
            </div>
          </TabsContent>

          {/* Timeline */}
          <TabsContent value="timeline" className="space-y-6">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-center">Historisk Utvikling av Risiko-Avkastning Teori</h3>
              <div className="space-y-4">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="w-16 justify-center">
                        {event.year}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">{event.event}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Risk Tolerance Tool */}
          <TabsContent value="tool" className="space-y-6">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-center">Finn Investeringer Basert på Din Risikotoleranse</h3>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg">
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    Maksimal risiko du er villig til å ta: {riskTolerance[0]}%
                  </Label>
                  <Slider
                    value={riskTolerance}
                    onValueChange={setRiskTolerance}
                    max={30}
                    min={1}
                    step={1}
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground">
                    Dra på slideren for å sette din risikotoleranse (standardavvik)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Anbefalte investeringer for din risikotoleranse:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendedAssets.map((asset) => (
                    <div key={asset.name} className="p-4 border rounded-lg bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-4 h-4 rounded-full ${asset.color}`}></div>
                        <h5 className="font-semibold">{asset.name}</h5>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{asset.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-green-600 font-medium">Avkastning: {asset.expectedReturn}%</span>
                        </div>
                        <div>
                          <span className="text-orange-600 font-medium">Risiko: {asset.volatility}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {recommendedAssets.length === 0 && (
                  <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-muted-foreground">
                      Ingen tradisjonelle investeringer matcher din lave risikotoleranse. 
                      Vurder bankinnskudd eller pengemarkedsfond.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};