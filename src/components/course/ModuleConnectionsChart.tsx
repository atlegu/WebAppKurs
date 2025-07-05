import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, TrendingUp, Leaf } from "lucide-react";

const connectionPaths = [
  {
    theme: "TID",
    icon: <Clock className="h-4 w-4" />,
    color: "bg-blue-100 text-blue-800 border-blue-200",
    path: [
      { module: 3, title: "Nåverdi" },
      { module: 7, title: "NPV-analyse" },
      { module: 8, title: "Kapitalstruktur" }
    ]
  },
  {
    theme: "RISIKO", 
    icon: <TrendingUp className="h-4 w-4" />,
    color: "bg-orange-100 text-orange-800 border-orange-200",
    path: [
      { module: 6, title: "Beta/CAPM" },
      { module: 8, title: "Kapitalstruktur" },
      { module: 10, title: "ESG-integrering" }
    ]
  },
  {
    theme: "SAMFUNN",
    icon: <Leaf className="h-4 w-4" />,
    color: "bg-green-100 text-green-800 border-green-200", 
    path: [
      { module: 9, title: "EU-taksonomi" },
      { module: 10, title: "ESG-integrering" }
    ]
  }
];

const keyConnections = [
  { connection: "Tid + Risiko", result: "Diskonteringsrente i verdsettelse" },
  { connection: "Regnskap + Aksjeprising", result: "Fundamental analyse" },
  { connection: "Avkastning + Risiko", result: "Optimal porteføljesammensetning" },
  { connection: "EU-taksonomi + ESG", result: "Moderne investeringsbeslutninger" },
  { connection: "Kapitalstruktur + ESG", result: "Bærekraftig finansiering" }
];

export const ModuleConnectionsChart: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Faglig sammenheng og progresjon
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Visual flow chart */}
        <div className="space-y-4">
          <h4 className="font-semibold mb-4">Hovedstrømmer gjennom kurset:</h4>
          
          {connectionPaths.map((pathway, index) => (
            <div key={index} className="space-y-2">
              <Badge className={`${pathway.color} border`}>
                <div className="flex items-center gap-2">
                  {pathway.icon}
                  <span className="font-semibold">{pathway.theme}</span>
                </div>
              </Badge>
              
              <div className="flex items-center gap-2 ml-4 flex-wrap">
                {pathway.path.map((step, stepIndex) => (
                  <React.Fragment key={`${pathway.theme}-${stepIndex}`}>
                    <div className="flex items-center gap-2 bg-background border rounded-md p-2 min-w-fit">
                      <span className="text-sm font-medium text-muted-foreground">
                        Modul {step.module}
                      </span>
                      <span className="text-sm">{step.title}</span>
                    </div>
                    {stepIndex < pathway.path.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key connections */}
        <div className="bg-muted/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">🔗 Nøkkelsammenhenger:</h4>
          <div className="grid gap-2">
            {keyConnections.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-sm">
                  <span className="font-medium text-primary">{item.connection}</span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">{item.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important note */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-yellow-600 text-lg">⚠️</span>
            <div>
              <p className="text-sm font-medium text-yellow-800 mb-1">Viktig byggekloss-prinsipp</p>
              <p className="text-sm text-yellow-700">
                Hvert modul bygger på det foregående, så sørg for solid forståelse før du går videre. 
                Spesielt viktige fundamenter er Modul 2 (Regnskap) og Modul 3 (Tidsverdi).
              </p>
            </div>
          </div>
        </div>

        {/* Interactive hover note */}
        <p className="text-sm text-muted-foreground italic text-center">
          💡 Dette diagrammet viser hvordan fagstoffet knytter seg sammen gjennom kurset
        </p>
      </CardContent>
    </Card>
  );
};