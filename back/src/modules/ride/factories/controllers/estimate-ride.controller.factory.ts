import { Controller, EstimateRideController } from '@/modules/ride/controllers';
import { makeEstimateRideUsecase } from '../usecases/estimate-ride.usecase.factory';

export const makeEstimateRideController = (): Controller => {
  const usecase = makeEstimateRideUsecase();
  return new EstimateRideController(usecase);
};
