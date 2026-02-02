export type ActivityType = 
  | 'FLIGHT' 
  | 'HOTEL_CHECKIN' 
  | 'HOTEL_CHECKOUT' 
  | 'FOOD' 
  | 'BAR' 
  | 'SIGHTSEEING' 
  | 'SHOPPING' 
  | 'TRANSIT';

export interface LocationInfo {
  name: string;
  url: string; // Google Maps Short Link
  addressQuery?: string; // Used for direction search if needed
}

export interface Activity {
  id: string;
  time: string; // e.g., "14:55", "18:00", "TBC" or empty for flexible
  type: ActivityType;
  title: string;
  location?: LocationInfo;
  description?: string;
  transitDetail?: string; // NEW: Specific exit or transport info
  tips?: string;          // NEW: Warnings, last order times, etc.
  tag?: string;           // NEW: Label for route options (e.g., "路線 A")
  route?: 'A' | 'B';      // NEW: Logic field for filtering routes
}

export interface DaySchedule {
  date: string; // "2/20"
  fullDate: string; // "2024-02-20"
  dayOfWeek: string; // "週四"
  locationTitle: string; // "桃園 - 京都"
  startHotel: LocationInfo;
  endHotel: LocationInfo;
  activities: Activity[];
}