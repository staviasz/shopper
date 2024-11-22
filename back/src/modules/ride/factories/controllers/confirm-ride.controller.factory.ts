import { ConfirmRideController, Controller } from '@/modules/ride/controllers';
import { ConfirmRideValidator } from '../../validators';
import { makeConfirmRideUsecase } from '../usecases';

export const makeConfirmRideController = (): Controller => {
  const validator = new ConfirmRideValidator();
  const usecase = makeConfirmRideUsecase();
  return new ConfirmRideController(validator, usecase);
};
