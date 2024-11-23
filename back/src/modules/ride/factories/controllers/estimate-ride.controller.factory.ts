import { Controller } from '@/main/app';
import { EstimateRideController } from '@/modules/ride/controllers';
import { EstimateRidesValidator } from '../../validators/estimate-ride.validator';
import { makeEstimateRideUsecase } from '../usecases/estimate-ride.usecase.factory';

export const makeEstimateRideController = (): Controller => {
  const validator = new EstimateRidesValidator();
  const usecase = makeEstimateRideUsecase();
  return new EstimateRideController(usecase, validator);
};
