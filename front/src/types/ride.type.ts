import { Driver } from './driver.type';

export type Ride = {
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  customerId: string;
  options: Driver[];
  polyline: string;
};

export type RideDone = Omit<Ride, 'options' | 'customerId'> & {
  id: number;
  date: string;
  value: number;
  driver: {
    id: number;
    name: string;
  };
};
