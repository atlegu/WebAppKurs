import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const KeyRatiosDetectiveSolution = () => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <>
      <div className="my-4">
        <Button 
          onClick={() => setShowSolution(true)}
          variant="outline"
          className="bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
        >
          🔍 Vis løsning
        </Button>
      </div>

      <Dialog open={showSolution} onOpenChange={setShowSolution}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-700">🔍 Løsning – Nøkkeltall-detektiv</DialogTitle>
          </DialogHeader>
          
          <div className="p-6 space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Vi skal beregne to viktige nøkkeltall som forteller oss mye om selskapets 
                <strong> lønnsomhet</strong> og <strong>finansielle struktur</strong>.
              </p>
            </div>

            {/* Given data */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">📊 Gitte tall</h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex justify-between"><span>Omsetning:</span><span className="font-medium">2 000 000 kr</span></div>
                <div className="flex justify-between"><span>Kostnader:</span><span className="font-medium">1 600 000 kr</span></div>
                <div className="flex justify-between"><span>Eiendeler:</span><span className="font-medium">800 000 kr</span></div>
                <div className="flex justify-between"><span>Egenkapital:</span><span className="font-medium">300 000 kr</span></div>
              </div>
            </div>

            {/* Step by step solution */}
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-green-800 mb-3">1. Lønnsomhetsmargin</h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Formel:</strong> Lønnsomhetsmargin = (Resultat / Omsetning) × 100%</p>
                  
                  <div className="bg-white p-3 rounded border border-green-300">
                    <p className="mb-2">Først beregner vi resultat:</p>
                    <p className="font-medium">Resultat = Omsetning - Kostnader</p>
                    <p className="font-medium">Resultat = 2 000 000 - 1 600 000 = <span className="text-green-700 font-bold">400 000 kr</span></p>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-green-300">
                    <p className="mb-2">Deretter beregner vi lønnsomhetsmarginen:</p>
                    <p className="font-medium">Lønnsomhetsmargin = (400 000 / 2 000 000) × 100%</p>
                    <p className="font-bold text-green-800 text-lg">Lønnsomhetsmargin = 20%</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">2. Egenkapitalandel</h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Formel:</strong> Egenkapitalandel = (Egenkapital / Eiendeler) × 100%</p>
                  
                  <div className="bg-white p-3 rounded border border-blue-300">
                    <p className="mb-2">Beregning:</p>
                    <p className="font-medium">Egenkapitalandel = (300 000 / 800 000) × 100%</p>
                    <p className="font-bold text-blue-800 text-lg">Egenkapitalandel = 37,5%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results summary */}
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
              <h4 className="text-xl font-bold text-center mb-6 text-gray-800">📈 Resultater</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-green-300 rounded-lg">
                  <div className="bg-green-600 text-white font-bold py-2 px-4 rounded-t-lg text-center">
                    Lønnsomhetsmargin
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-4xl font-bold text-green-700">20%</div>
                    <p className="text-sm text-gray-600 mt-2">Av hver krone i omsetning</p>
                  </div>
                </div>

                <div className="bg-white border border-blue-300 rounded-lg">
                  <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-t-lg text-center">
                    Egenkapitalandel
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-4xl font-bold text-blue-700">37,5%</div>
                    <p className="text-sm text-gray-600 mt-2">Av totale eiendeler</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Analysis */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-800">🎯 Hva forteller disse tallene?</h4>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-800 mb-2">💰 Lønnsomhetsmargin (20%):</h5>
                <ul className="text-green-700 space-y-1">
                  <li>• <strong>Meget god lønnsomhet:</strong> Selskapet beholder 20 øre av hver krone i omsetning</li>
                  <li>• <strong>Effektiv drift:</strong> Kostnadene er godt kontrollert (80% av omsetningen)</li>
                  <li>• <strong>Sammenligning:</strong> 20% er betydelig høyere enn mange bransjer (5-10%)</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-blue-800 mb-2">🛡️ Egenkapitalandel (37,5%):</h5>
                <ul className="text-blue-700 space-y-1">
                  <li>• <strong>Solid finansiell stabilitet:</strong> Over 1/3 av eiendelene er finansiert med egenkapital</li>
                  <li>• <strong>Moderat gjeldsgrad:</strong> Gjeld utgjør 62,5% (500 000 kr) av finansieringen</li>
                  <li>• <strong>Kredittverdighet:</strong> God balanse mellom egenkapital og lån</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h5 className="font-semibold text-amber-800 mb-2">📊 Samlet vurdering:</h5>
                <p className="text-amber-700">
                  Selskapet viser <strong>sterk lønnsomhet</strong> kombinert med <strong>sunn finansiell struktur</strong>. 
                  Dette indikerer et veldrevet selskap med god kontroll på både kostnader og finansiering. 
                  Egenkapitalandelen gir fleksibilitet for vekst og beskyttelse mot økonomiske nedgangstider.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h5 className="font-semibold text-purple-800 mb-2">🔍 Detektiv-konklusjon:</h5>
              <p className="text-purple-700 font-medium">
                Dette selskapet ser ut til å være i <strong>utmerket finansiell form</strong> – 
                høy lønnsomhet, kontrollerte kostnader og trygg finansiering!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};