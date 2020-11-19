export interface Restaurant {
  id: string;
  name: string;
  address?: string;
  booking: string[];
  pictures: string[];
  cuisine: string;
  menu: string;
  verified: boolean;
  seatsAvailable: number;
}
