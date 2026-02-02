import React, { useState, useEffect } from 'react';
import { SCHEDULE_DATA } from './constants';
import { Timeline } from './components/Timeline';
import { CalendarDays, Map as MapIcon } from 'lucide-react';

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-scroll to top when date changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedIndex]);

  const currentSchedule = SCHEDULE_DATA[selectedIndex];

  return (
    <div className="min-h-screen pb-10">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-600">
            <CalendarDays size={20} />
            <h1 className="font-bold text-lg tracking-tight">關西之旅</h1>
          </div>
          <div className="text-xs font-medium bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
            2/20 - 2/26
          </div>
        </div>

        {/* Date Tabs - Scrollable */}
        <div className="max-w-xl mx-auto px-2 pb-2">
          <div className="flex overflow-x-auto no-scrollbar gap-2 px-2 pb-1 snap-x">
            {SCHEDULE_DATA.map((day, index) => {
              const isActive = index === selectedIndex;
              return (
                <button
                  key={day.date}
                  onClick={() => setSelectedIndex(index)}
                  className={`
                    snap-start shrink-0 flex flex-col items-center justify-center w-[4.5rem] py-2 rounded-xl transition-all duration-200
                    ${isActive 
                      ? 'bg-indigo-600 text-white shadow-md scale-100' 
                      : 'bg-white text-gray-500 border border-gray-100 scale-95'}
                  `}
                >
                  <span className={`text-xs font-medium ${isActive ? 'opacity-80' : 'opacity-60'}`}>
                    {day.date}
                  </span>
                  <span className="text-sm font-bold leading-none mt-1">
                    {day.dayOfWeek}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="animate-fade-in">
        <Timeline schedule={currentSchedule} />
      </main>

      {/* Bottom Floating Map Button (Global context) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={currentSchedule.startHotel.url}
          target="_blank"
          rel="noopener noreferrer" 
          className="flex items-center justify-center w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all active:scale-95"
          title="飯店位置"
        >
          <MapIcon size={24} />
        </a>
      </div>
    </div>
  );
}