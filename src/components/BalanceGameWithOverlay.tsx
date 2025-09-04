import React, { useState, useEffect } from 'react';

const BalanceGameOverlay = ({ isOpen, onClose }) => {
  const balanceItems = {
    anleggsmidler: [
      'Bygninger', 'Maskiner', 'Inventar', 'Goodwill', 'Patenter', 
      'Varemærker', 'Aksjer i datterselskap', 'Tomter', 'Biler'
    ],
    omlopsmidler: [
      'Kontanter', 'Bank', 'Kundefordringer', 'Varelager', 
      'Kortsiktige investeringer', 'Påløpte inntekter'
    ],
    egenkapital: [
      'Aksjekapital', 'Overkurs', 'Udisponert overskudd', 
      'Annen opptjent egenkapital', 'Fond for vurderingsforskjeller'
    ],
    'langsiktig-gjeld': [
      'Pantelån', 'Obligasjonslån', 'Pensjonsforpliktelser', 
      'Langsiktig banklån', 'Utsatt skatt'
    ],
    'kortsiktig-gjeld': [
      'Leverandørgjeld', 'Betalbar skatt', 'Skyldige lønninger', 
      'Feriepenger', 'Kortsiktig banklån'
    ]
  };

  const [currentItems, setCurrentItems] = useState([]);
  const [gameStats, setGameStats] = useState({ round: 1, correct: 0, total: 0 });
  const [droppedItems, setDroppedItems] = useState({
    anleggsmidler: [], omlopsmidler: [], egenkapital: [], 
    'langsiktig-gjeld': [], 'kortsiktig-gjeld': []
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', title: '', message: '' });
  const [draggedItem, setDraggedItem] = useState(null);

  const getRandomItems = (count = 6) => {
    const allItems = [];
    Object.keys(balanceItems).forEach(category => {
      const categoryItems = balanceItems[category];
      const randomCount = Math.floor(Math.random() * 2) + 1;
      
      for (let i = 0; i < randomCount && i < categoryItems.length; i++) {
        const randomIndex = Math.floor(Math.random() * categoryItems.length);
        const item = categoryItems[randomIndex];
        
        if (!allItems.some(existing => existing.name === item)) {
          allItems.push({ name: item, category: category });
        }
      }
    });
    return allItems.sort(() => Math.random() - 0.5).slice(0, count);
  };

  const getCategoryDisplayName = (category) => {
    const names = {
      'anleggsmidler': 'Anleggsmidler',
      'omlopsmidler': 'Omløpsmidler', 
      'egenkapital': 'Egenkapital',
      'langsiktig-gjeld': 'Langsiktig gjeld',
      'kortsiktig-gjeld': 'Kortsiktig gjeld'
    };
    return names[category] || category;
  };

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetCategory) => {
    e.preventDefault();
    if (!draggedItem) return;

    const newStats = { ...gameStats, total: gameStats.total + 1 };

    if (draggedItem.category === targetCategory) {
      newStats.correct = gameStats.correct + 1;
      setDroppedItems(prev => ({
        ...prev,
        [targetCategory]: [...prev[targetCategory], draggedItem]
      }));
      setCurrentItems(prev => prev.filter(item => item.name !== draggedItem.name));
      setFeedback({
        type: 'correct',
        title: '✅ Riktig!',
        message: `"${draggedItem.name}" hører til ${getCategoryDisplayName(targetCategory)}.`
      });
    } else {
      setFeedback({
        type: 'incorrect',
        title: '❌ Feil!',
        message: `"${draggedItem.name}" hører til ${getCategoryDisplayName(draggedItem.category)}.`
      });
    }

    setGameStats(newStats);
    setShowFeedback(true);
    setDraggedItem(null);
  };

  const newRound = () => {
    setCurrentItems(getRandomItems(6));
    setDroppedItems({
      anleggsmidler: [], omlopsmidler: [], egenkapital: [], 
      'langsiktig-gjeld': [], 'kortsiktig-gjeld': []
    });
    setGameStats(prev => ({ ...prev, round: prev.round + 1 }));
  };

  const resetGame = () => {
    setGameStats({ round: 1, correct: 0, total: 0 });
    setCurrentItems(getRandomItems(6));
    setDroppedItems({
      anleggsmidler: [], omlopsmidler: [], egenkapital: [], 
      'langsiktig-gjeld': [], 'kortsiktig-gjeld': []
    });
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentItems(getRandomItems(6));
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const accuracy = gameStats.total > 0 ? Math.round((gameStats.correct / gameStats.total) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        
        {/* Header with Close Button */}
        <div className="bg-gradient-to-r from-slate-800 to-blue-600 text-white p-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">📊 Balanse Quiz</h1>
            <p className="text-blue-100">Dra regnskapspostene til riktig kategori</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-3xl font-bold leading-none"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Game Controls */}
          <div className="p-4 bg-gray-50 border-b flex flex-wrap justify-between items-center gap-4">
            <div className="flex gap-3">
              <div className="bg-white p-2 rounded shadow text-center min-w-[60px]">
                <div className="font-bold text-lg">{gameStats.round}</div>
                <div className="text-xs text-gray-500">Runde</div>
              </div>
              <div className="bg-white p-2 rounded shadow text-center min-w-[60px]">
                <div className="font-bold text-lg">{gameStats.correct}</div>
                <div className="text-xs text-gray-500">Riktige</div>
              </div>
              <div className="bg-white p-2 rounded shadow text-center min-w-[60px]">
                <div className="font-bold text-lg">{accuracy}%</div>
                <div className="text-xs text-gray-500">Score</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={newRound}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium"
              >
                🔄 Ny Runde
              </button>
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm font-medium"
              >
                🔄 Reset
              </button>
            </div>
          </div>

          {/* Game Area */}
          <div className="p-6 grid lg:grid-cols-3 gap-6">
            
            {/* Items to Classify */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-4">
              <h3 className="font-semibold text-gray-700 mb-3 text-center">
                🎯 Regnskapsposter
              </h3>
              <div className="flex flex-wrap gap-2 justify-center min-h-[150px]">
                {currentItems.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-lg cursor-move hover:from-blue-600 hover:to-blue-700 transition-all text-sm select-none"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Drop Zones */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.keys(balanceItems).map((category) => (
                <div
                  key={category}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, category)}
                  className="bg-white border-2 border-gray-200 rounded-xl p-3 min-h-[120px] hover:border-blue-400 hover:bg-blue-50 transition-all"
                >
                  <h4 className="font-semibold text-gray-700 mb-2 text-center text-sm border-b pb-1">
                    {getCategoryDisplayName(category)}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {droppedItems[category].map((item, index) => (
                      <div
                        key={`${item.name}-dropped-${index}`}
                        className="bg-green-500 text-white px-2 py-1 rounded text-xs"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback Modal */}
        {showFeedback && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full">
              <h3 className={`text-xl font-bold mb-3 ${feedback.type === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                {feedback.title}
              </h3>
              <p className="text-gray-700 mb-4">{feedback.message}</p>
              <button
                onClick={() => setShowFeedback(false)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

// Main component that includes trigger button and overlay
const BalanceGameWithOverlay = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsGameOpen(true)}
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        🎮 Spill Balanse Quiz
      </button>

      {/* Game Overlay */}
      <BalanceGameOverlay 
        isOpen={isGameOpen} 
        onClose={() => setIsGameOpen(false)} 
      />
    </div>
  );
};

export default BalanceGameWithOverlay;