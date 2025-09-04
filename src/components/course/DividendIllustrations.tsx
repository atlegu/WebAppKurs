import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

export const DividendTimeline = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Tidslinje for utbytteprosessen</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline */}
          <div className="flex justify-between items-start mt-8 mb-4">
            {/* Declaration Date */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="h-16 w-0.5 bg-gray-300"></div>
              <div className="text-center mt-2">
                <p className="font-semibold">15. april</p>
                <p className="text-sm text-gray-600">Erklæringsdato</p>
                <p className="text-xs text-gray-500 mt-1">Styret vedtar<br/>kr 10 i utbytte</p>
              </div>
            </div>
            
            {/* Connection line */}
            <div className="flex-1 h-0.5 bg-gray-300 mt-2"></div>
            
            {/* Ex-dividend Date */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              <div className="h-16 w-0.5 bg-gray-300"></div>
              <div className="text-center mt-2">
                <p className="font-semibold">15. mai</p>
                <p className="text-sm text-gray-600">Ex-utbytte dato</p>
                <p className="text-xs text-gray-500 mt-1">Aksjen faller<br/>med kr 10</p>
              </div>
            </div>
            
            {/* Connection line */}
            <div className="flex-1 h-0.5 bg-gray-300 mt-2"></div>
            
            {/* Record Date */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <div className="h-16 w-0.5 bg-gray-300"></div>
              <div className="text-center mt-2">
                <p className="font-semibold">16. mai</p>
                <p className="text-sm text-gray-600">Registreringsdato</p>
                <p className="text-xs text-gray-500 mt-1">Aksjonærliste<br/>fastlegges</p>
              </div>
            </div>
            
            {/* Connection line */}
            <div className="flex-1 h-0.5 bg-gray-300 mt-2"></div>
            
            {/* Payment Date */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              <div className="h-16 w-0.5 bg-gray-300"></div>
              <div className="text-center mt-2">
                <p className="font-semibold">25. mai</p>
                <p className="text-sm text-gray-600">Utbetalingsdato</p>
                <p className="text-xs text-gray-500 mt-1">Utbytte<br/>utbetales</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm"><strong>Viktig:</strong> Kjøper du aksjen 14. mai eller før, får du utbyttet. Kjøper du 15. mai eller senere, får forrige eier utbyttet.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const ExDividendPriceDrop = () => {
  const data = [
    { date: '12. mai', price: 200, label: '' },
    { date: '13. mai', price: 200, label: '' },
    { date: '14. mai', price: 200, label: 'Siste dag med utbytte' },
    { date: '15. mai', price: 190, label: 'Ex-utbytte' },
    { date: '16. mai', price: 190, label: '' },
    { date: '17. mai', price: 191, label: '' },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Aksjekurs rundt ex-utbytte dato</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[180, 210]} />
              <Tooltip />
              <Legend />
              <ReferenceLine x="15. mai" stroke="red" label="Ex-utbytte" strokeDasharray="5 5" />
              <Line 
                type="stepAfter" 
                dataKey="price" 
                stroke="#2563eb" 
                strokeWidth={2}
                name="Aksjekurs (kr)"
                dot={{ fill: '#2563eb', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800">Før ex-utbytte (14. mai)</h4>
            <p className="text-2xl font-bold mt-2">kr 200</p>
            <p className="text-sm text-gray-600">Handles "cum dividend"</p>
            <p className="text-sm text-green-600 mt-1">✓ Kjøper får utbytte</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-800">På ex-utbytte (15. mai)</h4>
            <p className="text-2xl font-bold mt-2">kr 190</p>
            <p className="text-sm text-gray-600">Handles "ex dividend"</p>
            <p className="text-sm text-red-600 mt-1">✗ Kjøper får ikke utbytte</p>
          </div>
        </div>
        
        <div className="mt-4 text-center p-3 bg-gray-50 rounded">
          <p className="font-semibold">Kursfall = Utbytte = kr 10</p>
          <p className="text-sm text-gray-600 mt-1">I praksis kan kursfallet avvike noe pga. skatt og markedsforhold</p>
        </div>
      </CardContent>
    </Card>
  );
};

export const DividendAnnouncementReactions = () => {
  const data = [
    { type: 'Utbytteøkning', min: 2, max: 5, typical: 3.5, color: '#10b981' },
    { type: 'Uendret', min: -0.5, max: 0.5, typical: 0, color: '#6b7280' },
    { type: 'Utbyttekutt', min: -20, max: -10, typical: -15, color: '#ef4444' },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Typiske markedsreaksjoner på utbyttekunngjøringer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.type} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{item.type}</span>
                <span className="text-sm font-semibold" style={{ color: item.color }}>
                  {item.typical > 0 ? '+' : ''}{item.typical}%
                </span>
              </div>
              <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full rounded-full"
                  style={{
                    backgroundColor: item.color + '30',
                    left: item.min < 0 ? `${50 + (item.min * 2.5)}%` : '50%',
                    right: item.max > 0 ? `${50 - (item.max * 2.5)}%` : '50%',
                  }}
                />
                <div 
                  className="absolute h-full w-1"
                  style={{
                    backgroundColor: item.color,
                    left: `${50 + (item.typical * 2.5)}%`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-0.5 bg-gray-400" style={{ left: '50%', position: 'absolute' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 space-y-3">
          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
            <span className="text-2xl">📈</span>
            <div>
              <p className="font-semibold text-green-800">Utbytteøkning</p>
              <p className="text-sm text-gray-700">Signaliserer styrke og fremtidstro</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-2xl">➡️</span>
            <div>
              <p className="font-semibold text-gray-800">Uendret utbytte</p>
              <p className="text-sm text-gray-700">Som forventet, ingen overraskelse</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
            <span className="text-2xl">📉</span>
            <div>
              <p className="font-semibold text-red-800">Utbyttekutt</p>
              <p className="text-sm text-gray-700">Varsler problemer og usikkerhet</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};