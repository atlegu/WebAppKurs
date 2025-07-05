import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Banknote, Droplets } from "lucide-react";

interface Role {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const CFO_ROLES: Role[] = [
  {
    id: "investor",
    title: "Hatt 1: Investor",
    subtitle: "Investeringssjef",
    description: "Velge prosjekter som øker verdien av selskapet",
    tools: ["NPV (nåverdi)", "IRR (internrente)", "Payback-periode"],
    icon: <Lightbulb className="w-6 h-6" />,
    color: "text-yellow-700",
    bgColor: "bg-yellow-50 border-yellow-200"
  },
  {
    id: "capital",
    title: "Hatt 2: Kapitalinnhenter", 
    subtitle: "Finansieringssjef",
    description: "Finne rett miks av gjeld og egenkapital",
    tools: ["Gjeld vs egenkapital-analyse", "Emisjonsplanlegging", "Låneanalyse"],
    icon: <Banknote className="w-6 h-6" />,
    color: "text-blue-700",
    bgColor: "bg-blue-50 border-blue-200"
  },
  {
    id: "liquidity",
    title: "Hatt 3: Likviditetsvakt",
    subtitle: "Likviditetsansvarlig", 
    description: "Sørge for penger til regninger og lønn",
    tools: ["Cash-budget", "Arbeidskapital-styring", "Kontantstrømbudsjett"],
    icon: <Droplets className="w-6 h-6" />,
    color: "text-green-700",
    bgColor: "bg-green-50 border-green-200"
  }
];

export const CFORolesInfographic: React.FC = () => {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return (
    <div className="my-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-primary mb-2">Finanssjefens tre hatter</h3>
        <p className="text-muted-foreground">
          Klikk på en hatt for å se verktøy og ansvar
        </p>
      </div>
      
      {/* Timeline visualization */}
      <div className="relative mb-8">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2 z-0"></div>
        
        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {CFO_ROLES.map((role, index) => (
            <Card
              key={role.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeRole === role.id ? `${role.bgColor} shadow-lg` : "bg-background"
              }`}
              onClick={() => setActiveRole(activeRole === role.id ? null : role.id)}
            >
              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div className={`mx-auto w-12 h-12 rounded-full bg-background border-2 flex items-center justify-center mb-4 ${role.color}`}>
                  {role.icon}
                </div>
                
                {/* Title */}
                <h4 className="font-semibold text-lg mb-2">{role.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                
                {/* Badge with number */}
                <Badge variant="outline" className="mb-3">
                  {index + 1}
                </Badge>
                
                {/* Expanded content */}
                {activeRole === role.id && (
                  <div className="mt-4 pt-4 border-t animate-fade-in">
                    <h5 className="font-medium mb-3">Typiske verktøy:</h5>
                    <div className="space-y-2">
                      {role.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="text-sm bg-background/50 p-2 rounded">
                          • {tool}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      Lenker til disse verktøyene kommer i senere moduler
                    </p>
                  </div>
                )}
                
                {/* Hover hint */}
                {activeRole !== role.id && (
                  <p className="text-xs text-muted-foreground mt-2 opacity-60">
                    Klikk for detaljer
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Summary when no role is active */}
      {!activeRole && (
        <div className="text-center text-sm text-muted-foreground">
          <p className="italic">
            Som finanssjef må du kunne skifte mellom alle tre rollene – 
            fra strategisk investor til praktisk kontantstrøm-manager.
          </p>
        </div>
      )}
    </div>
  );
};