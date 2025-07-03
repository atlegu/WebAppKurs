import React from "react";

export const CourseMap: React.FC = () => {
  console.log('CourseMap: Component is rendering');
  return (
    <div className="my-6">
      <div className="bg-gradient-to-br from-slate-50 to-slate-200 p-8 rounded-xl border border-slate-300 mb-6">
        {/* Linear course progression - horizontal timeline */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-8">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
            Start
          </div>
          <div className="text-slate-400 text-xl">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
          </div>
          <div className="text-slate-400 text-xl">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
          </div>
          <div className="text-slate-400 text-xl">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <div className="text-xs text-slate-600 mt-1">(Tidsverdi)</div>
          </div>
          <div className="text-slate-400 text-xl">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</div>
          </div>
          <div className="text-slate-400 text-xl">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">5</div>
          </div>
          <div className="text-slate-400 text-xl">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">6</div>
            <div className="text-xs text-slate-600 mt-1">(Risiko & portefølje)</div>
          </div>
          <div className="text-slate-400 text-xl">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">7</div>
          </div>
          <div className="text-slate-400 text-xl">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">8</div>
          </div>
          <div className="text-slate-400 text-xl">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">9</div>
          </div>
          <div className="text-slate-400 text-xl">→</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">10</div>
            <div className="text-xs text-slate-600 mt-1">(Bærekraft)</div>
          </div>
          
          <div className="text-slate-400 text-xl">→</div>
          <div className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
            Eksamen
          </div>
        </div>

        <div className="text-center">
          <h4 className="font-semibold text-slate-700 mb-3">Hvordan lese kartet</h4>
          <p className="text-sm text-slate-600 mb-4">
            Lineær progresjon der hver stasjon bygger på forrige, men 3, 4, 5 kan repeteres etter behov før du går videre.
          </p>
        </div>
      </div>
    </div>
  );
};