/* eslint-disable react-refresh/only-export-components */
import { Ride, RideDone } from '@/types/ride.type';
import React, { createContext, useState } from 'react';

export interface RideContext {
  estimateRide: Ride | null;
  setEstimateRide: React.Dispatch<React.SetStateAction<Ride | null>>;
  page: 'formEstimate' | 'optionsDriver' | 'historyRides';
  setPage: React.Dispatch<React.SetStateAction<'formEstimate' | 'optionsDriver' | 'historyRides'>>;
  ridesDone: RideDone[];
  setRidesDone: React.Dispatch<React.SetStateAction<RideDone[]>>;
}

export const RidesContext = createContext<RideContext>({} as RideContext);
RidesContext.displayName = 'ride context';

interface RidesProviderProps {
  children: React.ReactNode;
}

export function RidesProvider({ children }: RidesProviderProps) {
  const [estimateRide, setEstimateRide] = useState<Ride | null>(null);
  const [page, setPage] = useState<'formEstimate' | 'optionsDriver' | 'historyRides'>(
    'formEstimate',
  );
  const [ridesDone, setRidesDone] = useState<RideDone[]>([]);
  return (
    <RidesContext.Provider
      value={{ estimateRide, setEstimateRide, page, setPage, ridesDone, setRidesDone }}
    >
      {children}
    </RidesContext.Provider>
  );
}
