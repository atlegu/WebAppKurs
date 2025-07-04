import React, { useState, useEffect, useRef } from 'react';

const AvkastningRisikoModul = () => {
  const [hprInputs, setHprInputs] = useState({
    startValue: 3700,
    endValue: 4033,
    cashPayment: 185
  });
  
  const [hprResult, setHprResult] = useState(null);
  const [miniTaskResult, setMiniTaskResult] = useState(null);
  const [stdDevResult, setStdDevResult] = useState(null);
  const canvasRef = useRef(null);

  const calculateHPR = () => {
    const { startValue, endValue, cashPayment } = hprInputs;
    
    if (startValue <= 0) {
      alert('Startverdi må være større enn 0');
      return;
    }
    
    const totalReturn = endValue + cashPayment - startValue;
    const hpr = (totalReturn / startValue) * 100;
    
    setHprResult({
      totalReturn,
      hpr
    });
  };

  const calculateMiniTask = () => {
    // År 1: (54 + 1 - 50) / 50 = 10%
    const hpr1 = ((54 + 1 - 50) / 50) * 100;
    // År 2: (58 + 1.2 - 54) / 54 = 9.63%
    const hpr2 = ((58 + 1.2 - 54) / 54) * 100;
    // År 3: (56 + 1.3 - 58) / 58 = 0.52%
    const hpr3 = ((56 + 1.3 - 58) / 58) * 100;
    
    // Aritmetisk snitt
    const arithmeticMean = (hpr1 + hpr2 + hpr3) / 3;
    
    // Geometrisk snitt
    const geometricMean = (Math.pow((1 + hpr1/100) * (1 + hpr2/100) * (1 + hpr3/100), 1/3) - 1) * 100;
    
    setMiniTaskResult({
      hpr1: hpr1.toFixed(2),
      hpr2: hpr2.toFixed(2), 
      hpr3: hpr3.toFixed(2),
      arithmeticMean: arithmeticMean.toFixed(2),
      geometricMean: geometricMean.toFixed(2)
    });
  };

  const calculateStandardDeviation = () => {
    const returns = [10, 9.63, 0.52]; // HPR verdier i prosent
    const mean = returns.reduce((a, b) => a + b) / returns.length;
    
    const variance = returns.reduce((sum, r) => sum + Math.pow(r - mean, 2), 0) / (returns.length - 1);
    const stdDev = Math.sqrt(variance);
    
    setStdDevResult({
      mean: mean.toFixed(2),
      variance: variance.toFixed(2),
      stdDev: stdDev.toFixed(2)
    });
  };

  const drawRiskReturnChart = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    
    // X-axis (Risk)
    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.lineTo(550, 250);
    ctx.stroke();
    
    // Y-axis (Return)
    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.lineTo(50, 50);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#333';
    ctx.font = '14px Arial';
    ctx.fillText('Risiko (σ)', 500, 270);
    ctx.save();
    ctx.translate(20, 150);
    ctx.rotate(-Math.PI/2);
    ctx.fillText('Avkastning (%)', 0, 0);
    ctx.restore();
    
    // Plot some example points
    const investments = [
      {name: 'Statsobligasjon', risk: 2, return: 3, color: '#27ae60'},
      {name: 'Aksjeindeks', risk: 15, return: 8, color: '#3498db'},
      {name: 'Høyrisiko aksje', risk: 25, return: 12, color: '#e74c3c'}
    ];
    
    investments.forEach(inv => {
      const x = 50 + (inv.risk * 15);
      const y = 250 - (inv.return * 15);
      
      ctx.fillStyle = inv.color;
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.fillText(inv.name, x + 15, y + 5);
    });
  };

  useEffect(() => {
    drawRiskReturnChart();
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-blue-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold mb-3">📊 Avkastning og Risiko</h1>
        <p className="text-xl opacity-90">Grunnleggende konsepter for investeringsanalyse</p>
      </div>

      <div className="p-8">
        {/* Seksjon 1.1 - Hva menes med avkastning */}
        <div className="bg-gray-50 border-l-4 border-blue-500 p-8 mb-8 rounded-r-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-3">
            1.1 Hva menes med avkastning?
          </h2>
          
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl mb-6">
            <h3 className="text-lg font-semibold mb-4">💰 To kilder til avkastning</h3>
            <p className="mb-2"><strong>1. Inntektskomponenten:</strong> Løpende utbytte eller kupongbetalinger</p>
            <p><strong>2. Kapitalgevinsten:</strong> Endring i markedspris mellom kjøp og salg</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center mb-6">
            <div className="font-mono text-lg">
              <strong>Holding Period Return (HPR) =</strong><br/>
              <span className="text-blue-600">(Sluttverdi + Kontantutbetaling - Startverdi) / Startverdi × 100%</span>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
            <h4 className="font-semibold text-green-800 mb-3">📈 Praktisk eksempel:</h4>
            <p><strong>Kjøp:</strong> 100 aksjer á NOK 37 → investering = 3 700 kr</p>
            <p><strong>Ett år senere:</strong></p>
            <ul className="ml-6 mt-3 space-y-1">
              <li>• Utbytte: 1,85 kr per aksje = 185 kr totalt</li>
              <li>• Salgspris: 40,33 kr per aksje</li>
              <li>• Kursgevinst: (40,33 - 37) × 100 = 333 kr</li>
            </ul>
            <p className="mt-4 text-green-700 font-semibold">HPR = (185 + 333) / 3 700 = 14%</p>
          </div>

          {/* HPR Kalkulator */}
          <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">🧮 HPR-kalkulator</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Startverdi (kr):</label>
                <input
                  type="number"
                  value={hprInputs.startValue}
                  onChange={(e) => setHprInputs({...hprInputs, startValue: parseFloat(e.target.value) || 0})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Sluttverdi (kr):</label>
                <input
                  type="number"
                  value={hprInputs.endValue}
                  onChange={(e) => setHprInputs({...hprInputs, endValue: parseFloat(e.target.value) || 0})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Kontantutbetaling (kr):</label>
                <input
                  type="number"
                  value={hprInputs.cashPayment}
                  onChange={(e) => setHprInputs({...hprInputs, cashPayment: parseFloat(e.target.value) || 0})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <button
              onClick={calculateHPR}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Beregn HPR
            </button>
            {hprResult && (
              <div className="mt-4 bg-green-100 border border-green-300 rounded-lg p-4 text-green-800">
                <strong>Resultat:</strong><br/>
                Total avkastning: {hprResult.totalReturn.toLocaleString('no-NO')} kr<br/>
                <strong>HPR: {hprResult.hpr.toFixed(2)}%</strong>
              </div>
            )}
          </div>
        </div>

        {/* Seksjon 1.2 - Aritmetisk vs Geometrisk */}
        <div className="bg-gray-50 border-l-4 border-blue-500 p-8 mb-8 rounded-r-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-3">
            1.2 Aritmetisk vs Geometrisk gjennomsnitt
          </h2>
          
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl mb-6">
            <h3 className="text-lg font-semibold mb-4">📊 To måter å beregne gjennomsnittsavkastning</h3>
            <p className="mb-2"><strong>Aritmetisk snitt:</strong> Brukes til forventet avkastning</p>
            <p><strong>Geometrisk snitt:</strong> Gir det "sanne" historiske vekstforløpet</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center mb-6">
            <div className="font-mono text-lg">
              <strong>Aritmetisk snitt:</strong> (r₁ + r₂ + ... + rₙ) / n<br/><br/>
              <strong>Geometrisk snitt:</strong> [(1+r₁) × (1+r₂) × ... × (1+rₙ)]^(1/n) - 1
            </div>
          </div>

          {/* Mini-oppgave */}
          <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">🧮 Mini-oppgave fra dokumentet</h4>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="p-3 text-left">År</th>
                    <th className="p-3 text-left">Pris ved start</th>
                    <th className="p-3 text-left">Pris ved slutt</th>
                    <th className="p-3 text-left">Kontantutbytte</th>
                    <th className="p-3 text-left">HPR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3">1</td>
                    <td className="p-3">50 kr</td>
                    <td className="p-3">54 kr</td>
                    <td className="p-3">1 kr</td>
                    <td className="p-3 font-semibold text-blue-600">
                      {miniTaskResult ? `${miniTaskResult.hpr1}%` : '-'}
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3">2</td>
                    <td className="p-3">54 kr</td>
                    <td className="p-3">58 kr</td>
                    <td className="p-3">1,2 kr</td>
                    <td className="p-3 font-semibold text-blue-600">
                      {miniTaskResult ? `${miniTaskResult.hpr2}%` : '-'}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3">3</td>
                    <td className="p-3">58 kr</td>
                    <td className="p-3">56 kr</td>
                    <td className="p-3">1,3 kr</td>
                    <td className="p-3 font-semibold text-blue-600">
                      {miniTaskResult ? `${miniTaskResult.hpr3}%` : '-'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              onClick={calculateMiniTask}
              className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Løs mini-oppgaven
            </button>
            {miniTaskResult && (
              <div className="mt-4 bg-green-100 border border-green-300 rounded-lg p-4 text-green-800">
                <strong>Løsning:</strong><br/>
                År 1 HPR: {miniTaskResult.hpr1}%<br/>
                År 2 HPR: {miniTaskResult.hpr2}%<br/>
                År 3 HPR: {miniTaskResult.hpr3}%<br/><br/>
                <strong>Aritmetisk snitt:</strong> {miniTaskResult.arithmeticMean}%<br/>
                <strong>Geometrisk snitt:</strong> {miniTaskResult.geometricMean}%
              </div>
            )}
          </div>
        </div>

        {/* Seksjon 1.3 - Risikobegreper */}
        <div className="bg-gray-50 border-l-4 border-blue-500 p-8 mb-8 rounded-r-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-3">
            1.3 Risikobegreper for enkeltinvesteringer
          </h2>
          
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl mb-6">
            <h3 className="text-lg font-semibold mb-4">⚡ Nøkkelkonsepter innen risiko</h3>
            <p className="mb-2"><strong>Varians (σ²):</strong> Måler spredningen i avkastning</p>
            <p className="mb-2"><strong>Standardavvik (σ):</strong> Kvadratroten av varians</p>
            <p><strong>Risikopremie:</strong> Kompensasjon over risikofri rente</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center mb-6">
            <div className="font-mono text-lg">
              <strong>Varians:</strong> σ² = Σ[pᵢ × (rᵢ - E(r))²]<br/><br/>
              <strong>Standardavvik:</strong> σ = √(σ²)<br/><br/>
              <strong>Risikopremie:</strong> E(r) - rf
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <strong>💡 Viktig sammenheng:</strong> Høyere σ ⇒ større spredning i mulige utfall ⇒ høyere risiko
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">🧮 Standardavvik-kalkulator</h4>
            <p className="mb-4">Basert på mini-oppgaven ovenfor:</p>
            <button
              onClick={calculateStandardDeviation}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Beregn standardavvik
            </button>
            {stdDevResult && (
              <div className="mt-4 bg-green-100 border border-green-300 rounded-lg p-4 text-green-800">
                <strong>Standardavvik beregning:</strong><br/>
                Gjennomsnitt: {stdDevResult.mean}%<br/>
                Varians: {stdDevResult.variance}<br/>
                <strong>Standardavvik: {stdDevResult.stdDev}%</strong>
              </div>
            )}
          </div>
        </div>

        {/* Risiko-avkastning diagram */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-6">📈 Risiko vs Avkastning sammenheng</h4>
          <div className="flex justify-center">
            <canvas 
              ref={canvasRef} 
              width="600" 
              height="300" 
              className="max-w-full border border-gray-200 rounded-lg"
            />
          </div>
        </div>

        {/* Innsikter */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-xl mb-8">
          <h4 className="text-xl font-semibold mb-4">🎯 Praktiske innsikter</h4>
          <div className="space-y-2">
            <p>• Høyere forventet avkastning kommer normalt med høyere risiko</p>
            <p>• Diversifisering kan redusere total porteføljerisiko</p>
            <p>• Historisk avkastning er ikke garanti for fremtidig resultat</p>
          </div>
        </div>

        {/* Refleksjonsspørsmål */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-8">
          <h4 className="text-xl font-semibold text-yellow-800 mb-4">🤔 Refleksjonsspørsmål</h4>
          <p className="text-yellow-800 mb-4">
            <strong>Hvordan kan to investeringer ha samme gjennomsnittsavkastning, men svært forskjellig risiko?</strong>
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="mb-3"><em>Eksempel:</em></p>
            <ul className="space-y-1 ml-6">
              <li><strong>Investering A:</strong> 8%, 8%, 8% (stabil)</li>
              <li><strong>Investering B:</strong> -10%, 14%, 20% (volatil)</li>
            </ul>
            <p className="mt-3 font-semibold">Begge har 8% gjennomsnittsavkastning, men B har mye høyere risiko!</p>
          </div>
        </div>

        {/* Læringspunkter */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h4 className="text-xl font-semibold text-blue-800 mb-6">🎯 Nøkkelpunkter å huske:</h4>
          <ul className="space-y-3 text-blue-800 ml-6">
            <li><strong>Avkastning</strong> består av løpende kontantstrømmer + prisendring</li>
            <li><strong>HPR</strong> gir totalperiodens prosentavkastning</li>
            <li><strong>Varians/standardavvik</strong> kvantifiserer usikkerhet</li>
            <li><strong>Risikopremie</strong> er kompensasjonen investor krever over risikofri rente</li>
            <li><strong>Geometrisk snitt</strong> gir mer nøyaktig historisk vekst enn aritmetisk</li>
          </ul>
          
          <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">🚀 Neste steg</h4>
            <p>Med disse byggeklossene er du klar til å se hvordan risiko endres når flere verdipapirer kombineres - temaet i neste seksjon om porteføljeteori!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvkastningRisikoModul;