import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const BalancePuzzleSolution = () => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <>
      <div className="my-4">
        <Button 
          onClick={() => setShowSolution(true)}
          variant="outline"
          className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
        >
          💡 Vis løsning
        </Button>
      </div>

      <Dialog open={showSolution} onOpenChange={setShowSolution}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-green-700">🧩 Løsning – Balanse-puslespill</DialogTitle>
          </DialogHeader>
          
          <div className="p-6 space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                En balanse består av <strong>eiendeler</strong> på venstre side og <strong>egenkapital</strong> og <strong>gjeld</strong> på høyre side. 
                Summene på begge sider må være like store.
              </p>
            </div>

            {/* Step by step solution */}
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">1. Eiendeler</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between"><span>Kontanter:</span><span className="font-medium">50 000 kr</span></div>
                  <div className="flex justify-between"><span>Varelager:</span><span className="font-medium">120 000 kr</span></div>
                  <div className="flex justify-between"><span>Maskiner:</span><span className="font-medium">300 000 kr</span></div>
                  <hr className="my-2 border-blue-300"/>
                  <div className="flex justify-between font-bold text-blue-800">
                    <span>Totale eiendeler = 50 000 + 120 000 + 300 000 =</span>
                    <span>470 000 kr</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-red-800 mb-3">2. Gjeld</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between"><span>Leverandørgjeld:</span><span className="font-medium">80 000 kr</span></div>
                  <div className="flex justify-between"><span>Banklån:</span><span className="font-medium">200 000 kr</span></div>
                  <hr className="my-2 border-red-300"/>
                  <div className="flex justify-between font-bold text-red-800">
                    <span>Sum gjeld =</span>
                    <span>280 000 kr</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-green-800 mb-3">3. Egenkapital</h4>
                <div className="space-y-2 text-gray-700">
                  <p className="mb-2">Beregnes som:</p>
                  <div className="bg-white p-3 rounded border border-green-300 text-center">
                    <div className="text-lg font-medium">Eiendeler – Gjeld = 470 000 – 280 000 = <span className="font-bold text-green-800">190 000 kr</span></div>
                  </div>
                  <div className="flex justify-between font-bold text-green-800 mt-3">
                    <span>Aksjekapital =</span>
                    <span>190 000 kr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Balance Sheet */}
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
              <h4 className="text-xl font-bold text-center mb-6 text-gray-800">4. Ferdig balanse</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-300 rounded-lg">
                  <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-t-lg text-center">
                    Eiendeler
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between"><span>Kontanter:</span><span>50 000</span></div>
                    <div className="flex justify-between"><span>Varelager:</span><span>120 000</span></div>
                    <div className="flex justify-between"><span>Maskiner:</span><span>300 000</span></div>
                    <hr className="my-2"/>
                    <div className="flex justify-between font-bold"><span>Sum:</span><span>470 000</span></div>
                  </div>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg">
                  <div className="bg-red-600 text-white font-bold py-2 px-4 rounded-t-lg text-center">
                    Egenkapital og gjeld
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between"><span>Aksjekapital:</span><span>190 000</span></div>
                    <div className="flex justify-between"><span>Leverandørgjeld:</span><span>80 000</span></div>
                    <div className="flex justify-between"><span>Banklån:</span><span>200 000</span></div>
                    <hr className="my-2"/>
                    <div className="flex justify-between font-bold"><span>Sum:</span><span>470 000</span></div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-800 font-semibold">
                  ✅ Balansen balanserer: 470 000 = 470 000
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};