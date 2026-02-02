import React from 'react';
import { Activity } from '../types';
import { 
  Plane, 
  Bed, 
  Utensils, 
  Martini, 
  MapPin, 
  ShoppingBag, 
  Train, 
  ExternalLink,
  Navigation,
  Footprints,
  AlertCircle
} from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  isLast: boolean;
}

const getIcon = (type: Activity['type']) => {
  switch (type) {
    case 'FLIGHT': return <Plane size={20} className="text-sky-500" />;
    case 'HOTEL_CHECKIN':
    case 'HOTEL_CHECKOUT': return <Bed size={20} className="text-indigo-500" />;
    case 'FOOD': return <Utensils size={20} className="text-orange-500" />;
    case 'BAR': return <Martini size={20} className="text-pink-500" />;
    case 'SHOPPING': return <ShoppingBag size={20} className="text-emerald-500" />;
    case 'TRANSIT': return <Train size={20} className="text-slate-500" />;
    default: return <MapPin size={20} className="text-gray-500" />;
  }
};

const getColors = (type: Activity['type']) => {
   switch (type) {
    case 'FLIGHT': return 'bg-sky-50 border-sky-100';
    case 'HOTEL_CHECKIN':
    case 'HOTEL_CHECKOUT': return 'bg-indigo-50 border-indigo-100';
    case 'FOOD': return 'bg-orange-50 border-orange-100';
    case 'BAR': return 'bg-pink-50 border-pink-100';
    case 'SHOPPING': return 'bg-emerald-50 border-emerald-100';
    case 'TRANSIT': return 'bg-slate-50 border-slate-200';
    default: return 'bg-white border-gray-100';
  }
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, isLast }) => {
  const { time, type, title, location, description, transitDetail, tips, tag } = activity;

  // Generate directions URL
  // If we have an addressQuery, we can create a specific directions link
  const getDirectionsUrl = () => {
    if (!location) return '#';
    // If it's a transit type, we prioritize public transit directions
    const mode = type === 'TRANSIT' ? 'transit' : 'transit'; // Default to transit for Japan
    const destination = encodeURIComponent(location.addressQuery || location.name);
    return `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=${mode}`;
  };

  return (
    <div className="flex gap-4 relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[19px] top-10 bottom-[-16px] w-[2px] bg-gray-200 z-0"></div>
      )}

      {/* Time & Icon Column */}
      <div className="flex flex-col items-center gap-2 z-10 min-w-[40px]">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white border shadow-sm ${activity.type === 'TRANSIT' ? 'border-slate-300' : 'border-gray-200'}`}>
          {getIcon(type)}
        </div>
        <div className="text-xs font-medium text-gray-500 mt-1 tabular-nums">{time}</div>
      </div>

      {/* Content Card */}
      <div className={`flex-1 p-4 rounded-xl border mb-6 shadow-sm relative overflow-hidden ${getColors(type)}`}>
        
        {/* Route Tag Badge */}
        {tag && (
          <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg shadow-sm">
            {tag}
          </div>
        )}

        <h3 className="font-bold text-gray-800 text-lg leading-tight pr-6">{title}</h3>
        
        {location && (
          <div className="mt-2 flex items-start gap-1 text-gray-600">
            <MapPin size={14} className="mt-1 shrink-0 opacity-70" />
            <span className="text-sm font-medium">{location.name}</span>
          </div>
        )}

        {description && (
          <p className="mt-2 text-sm text-gray-600 leading-relaxed border-t border-black/5 pt-2">
            {description}
          </p>
        )}

        {/* New Sections: Transit Detail & Tips */}
        {(transitDetail || tips) && (
          <div className="mt-3 space-y-2">
            {transitDetail && (
              <div className="flex items-start gap-2 text-xs bg-black/5 rounded-lg p-2 text-gray-700">
                <Footprints size={14} className="mt-0.5 shrink-0 opacity-60" />
                <span>{transitDetail}</span>
              </div>
            )}
            {tips && (
              <div className="flex items-start gap-2 text-xs bg-amber-50 text-amber-800 border border-amber-100 rounded-lg p-2">
                <AlertCircle size={14} className="mt-0.5 shrink-0 text-amber-600" />
                <span>{tips}</span>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        {location && location.url && (
          <div className="mt-4 flex gap-2">
            {/* View on Map Button */}
            <a 
              href={location.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-700 text-sm font-medium py-2 px-3 rounded-lg border border-gray-200 shadow-sm active:bg-gray-50 transition-colors"
            >
              <ExternalLink size={16} />
              查看地圖
            </a>
            
            {/* Directions Button */}
            <a 
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded-lg shadow-md active:bg-blue-700 transition-colors"
            >
              <Navigation size={16} />
              導航
            </a>
          </div>
        )}
      </div>
    </div>
  );
};