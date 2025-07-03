import React from "react";

export const CourseMap: React.FC = () => {
  console.log('CourseMap: Component is rendering');
  return (
    <div className="my-6">
      <h3 className="text-lg font-bold text-primary mb-4">3. Kurskart – «Finans-linjen»</h3>
      
      <div className="bg-gradient-to-br from-slate-50 to-slate-200 p-6 rounded-xl border border-slate-300 mb-6">
        {/* Main progression line */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-6">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
            Start
          </div>
          <span className="text-slate-500">→</span>
          
          <div className="bg-purple-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs">1</div>
          <span className="text-slate-500 text-xs">→</span>
          <div className="bg-sky-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs">2</div>
          <span className="text-slate-500 text-xs">→</span>
          <div className="bg-amber-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs">3</div>
          <span className="text-slate-500 text-xs">→</span>
          <div className="bg-sky-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs">4</div>
          <span className="text-slate-500 text-xs">→</span>
          <div className="bg-sky-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs">5</div>
          <span className="text-slate-500 text-xs">→</span>
          <div className="bg-amber-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs">6</div>
          <span className="text-slate-500 text-xs">→</span>
          <div className="bg-amber-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs">7</div>
          <span className="text-slate-500 text-xs">→</span>
          <div className="bg-amber-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs">8</div>
          <span className="text-slate-500 text-xs">→</span>
          <div className="bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs">9</div>
          <span className="text-slate-500 text-xs">→</span>
          <div className="bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs">10</div>
          
          <span className="text-slate-500">→</span>
          <div className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
            Eksamen
          </div>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
            <h4 className="font-semibold text-purple-600 text-sm mb-2 flex items-center gap-1">
              📚 Grunnlag
            </h4>
            <div className="text-xs text-slate-600 space-y-1">
              <div>1. Introduksjon til finans</div>
              <div>2. Regnskap</div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-sky-500 shadow-sm">
            <h4 className="font-semibold text-sky-600 text-sm mb-2 flex items-center gap-1">
              🔢 Kvantitative konsepter
            </h4>
            <div className="text-xs text-slate-600 space-y-1">
              <div>3. Tidsverdien av penger</div>
              <div>4. Obligasjoner</div>
              <div>5. Aksjer og aksjeprising</div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500 shadow-sm">
            <h4 className="font-semibold text-amber-600 text-sm mb-2 flex items-center gap-1">
              📊 Beslutningsverktøy
            </h4>
            <div className="text-xs text-slate-600 space-y-1">
              <div>6. Avkastning og risiko</div>
              <div>7. Investeringsanalyse</div>
              <div>8. Kapitalstruktur</div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-emerald-500 shadow-sm">
            <h4 className="font-semibold text-emerald-600 text-sm mb-2 flex items-center gap-1">
              🌱 Bærekraft/ESG
            </h4>
            <div className="text-xs text-slate-600 space-y-1">
              <div>9. EU-taksonomi og klimafinans</div>
              <div>10. ESG og "grønn" finans</div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Hvordan lese kartet:</h4>
          <p className="mb-2">
            <strong>Lineær progresjon:</strong> Hver stasjon (= modul) bygger på forrige, men 3, 4, 5 kan repeteres etter behov før du går videre.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Tematiske avstikkere:</h4>
          <ul className="space-y-1 text-sm">
            <li>• <strong>Tidsverdien av penger (3)</strong> henger tett sammen med <strong>Investeringsanalyse (7)</strong></li>
            <li>• <strong>Risiko (6)</strong> spiller direkte inn i diskusjonen om <strong>Kapitalstruktur (8)</strong></li>
            <li>• <strong>Bærekraft-sporene (9 og 10)</strong> brukes som "grønt filter" over alt du gjorde fra modul 2-8</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Fargekoding:</h4>
          <ul className="space-y-1 text-sm">
            <li>• <span className="text-purple-600 font-medium">Lilla</span> = Grunnlag og introduksjon</li>
            <li>• <span className="text-sky-600 font-medium">Blå</span> = Kvantitative kjernekonsepter</li>
            <li>• <span className="text-amber-600 font-medium">Gul</span> = Beslutningsverktøy og analyse</li>
            <li>• <span className="text-emerald-600 font-medium">Grønn</span> = Bærekraft/ESG</li>
          </ul>
        </div>
      </div>
    </div>
  );
};