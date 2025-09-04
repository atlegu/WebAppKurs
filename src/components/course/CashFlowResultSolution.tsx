import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const CashFlowResultSolution = () => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <>
      <div className="my-4">
        <Button 
          onClick={() => setShowSolution(true)}
          variant="outline"
          className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
        >
          💡 Vis løsning
        </Button>
      </div>

      <Dialog open={showSolution} onOpenChange={setShowSolution}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-700">💡 Løsning – Resultat vs. kontantstrøm</DialogTitle>
          </DialogHeader>
          
          <div className="p-6 space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Hovedforskjellen er at <strong>resultat</strong> baserer seg på regnskapsprinsippet (når inntekter opptjenes), 
                mens <strong>kontantstrøm</strong> fokuserer på faktiske inn- og utbetalinger.
              </p>
            </div>

            {/* Step by step solution */}
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-green-800 mb-3">a) Resultat (regnskapsmessig)</h4>
                <div className="space-y-2 text-gray-700 mb-4">
                  <p>Resultatet beregnes ut fra inntekter minus kostnader, <strong>uavhengig av når betalingen skjer</strong>.</p>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between"><span>Salgsinntekter:</span><span className="font-medium">100 000 kr</span></div>
                  <div className="flex justify-between"><span>Varekostnad (råvarer):</span><span className="font-medium">–40 000 kr</span></div>
                  <div className="flex justify-between"><span>Lønnskostnader:</span><span className="font-medium">–25 000 kr</span></div>
                  <hr className="my-2 border-green-300"/>
                  <div className="flex justify-between font-bold text-green-800">
                    <span>Resultat = 100 000 – 40 000 – 25 000 =</span>
                    <span>35 000 kr</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">b) Kontantstrøm fra drift</h4>
                <div className="space-y-2 text-gray-700 mb-4">
                  <p>Her ser vi på <strong>faktiske inn- og utbetalinger</strong> i januar.</p>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Innbetalt fra salg:</span>
                    <span className="font-medium">60% av 100 000 = 60 000 kr</span>
                  </div>
                  <div className="flex justify-between"><span>Utbetalt råvarer:</span><span className="font-medium">–40 000 kr</span></div>
                  <div className="flex justify-between"><span>Utbetalt lønn:</span><span className="font-medium">–25 000 kr</span></div>
                  <hr className="my-2 border-blue-300"/>
                  <div className="flex justify-between font-bold text-blue-800">
                    <span>Kontantstrøm = 60 000 – 40 000 – 25 000 =</span>
                    <span>–5 000 kr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
              <h4 className="text-xl font-bold text-center mb-6 text-gray-800">📊 Oppsummering</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-green-300 rounded-lg">
                  <div className="bg-green-600 text-white font-bold py-2 px-4 rounded-t-lg text-center">
                    Resultat (regnskap)
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-3xl font-bold text-green-700">35 000 kr</div>
                    <p className="text-sm text-gray-600 mt-2">Basert på opptjente inntekter</p>
                  </div>
                </div>

                <div className="bg-white border border-blue-300 rounded-lg">
                  <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-t-lg text-center">
                    Kontantstrøm fra drift
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-700">–5 000 kr</div>
                    <p className="text-sm text-gray-600 mt-2">Basert på faktiske betalinger</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                <p className="text-yellow-800 font-semibold">
                  💰 Forskjell: 40 000 kr - Dette skyldes at 40% av salget ikke er betalt ennå
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h5 className="font-semibold text-amber-800 mb-2">🔍 Viktig lærdom:</h5>
              <p className="text-amber-700">
                Et selskap kan ha positivt resultat, men negativ kontantstrøm (eller omvendt). 
                Dette er grunnen til at både resultatregnskap og kontantstrømoppstilling er viktige 
                for å forstå selskapets økonomiske situasjon.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};