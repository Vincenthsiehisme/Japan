import React, { useState, useEffect } from 'react';
import { DaySchedule, Activity } from '../types';
import { ActivityCard } from './ActivityCard';
import { Building2, Navigation, Map } from 'lucide-react';

interface TimelineProps {
  schedule: DaySchedule;
}

export const Timeline: React.FC<TimelineProps> = ({ schedule }) => {
  const { startHotel, endHotel, activities, locationTitle } = schedule;
  const [activeRoute, setActiveRoute] = useState<'A' | 'B'>('A');

  // Reset route when schedule changes (e.g. switching days)
  useEffect(() => {
    setActiveRoute('A');
  }, [schedule.date]);

  // Check if current day has branching routes
  const hasRoutes = activities.some(a => a.route);

  // Filter activities based on active route
  // Show if: 1. No route assigned (common activity) OR 2. Matches active route
  const displayedActivities = activities.filter(a => !a.route || a.route === activeRoute);

  return (
    <div className="px-4 pb-20 pt-4 max-w-xl mx-auto">
      {/* Day Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{locationTitle}</h2>
        <p className="text-gray-500">{schedule.fullDate} {schedule.dayOfWeek}</p>
        
        {/* Route Toggle Switch */}
        {hasRoutes && (
          <div className="mt-4 p-1 bg-gray-100 rounded-lg flex relative">
            <button
              onClick={() => setActiveRoute('A')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 z-10 ${
                activeRoute === 'A' 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              路線 A：早起組
            </button>
            <button
              onClick={() => setActiveRoute('B')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 z-10 ${
                activeRoute === 'B' 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              路線 B：逛街組
            </button>
          </div>
        )}
      </div>

      {/* Start Hotel (Context) */}
      <div className="flex gap-4 mb-6 opacity-80">
        <div className="flex flex-col items-center gap-2 min-w-[40px]">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
            <Building2 size={16} />
          </div>
          <div className="w-[2px] flex-1 bg-gradient-to-b from-transparent to-gray-200 h-8"></div>
        </div>
        <div className="flex-1 py-1">
          <div className="text-xs text-gray-500 uppercase tracking-wide">出發地</div>
          <div className="text-sm font-medium text-gray-700 flex items-center gap-2">
             {startHotel.name}
             <a 
                href={startHotel.url || '#'} 
                target="_blank"
                className="text-gray-400 hover:text-blue-600"
                rel="noreferrer"
             >
                <Map size={14} />
             </a>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="relative">
        {displayedActivities.map((activity, index) => (
          <ActivityCard 
            key={activity.id} 
            activity={activity} 
            isLast={index === displayedActivities.length - 1} 
          />
        ))}
      </div>

      {/* End Hotel (Context) */}
      <div className="flex gap-4 mt-2 opacity-80">
        <div className="flex flex-col items-center gap-2 min-w-[40px]">
           <div className="w-[2px] bg-gradient-to-b from-gray-200 to-transparent h-6 -mt-4"></div>
           <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 border border-indigo-100">
            <Building2 size={16} />
          </div>
        </div>
        <div className="flex-1 py-1">
          <div className="text-xs text-gray-500 uppercase tracking-wide">返回 / 入住</div>
          <div className="font-medium text-gray-900 mb-1">{endHotel.name}</div>
          {endHotel.url && (
             <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(endHotel.addressQuery || endHotel.name)}&travelmode=transit`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full"
             >
                <Navigation size={12} />
                回飯店路線
             </a>
          )}
        </div>
      </div>
    </div>
  );
};