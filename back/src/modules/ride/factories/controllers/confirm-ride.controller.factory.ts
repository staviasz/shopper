import { Controller } from '@/main/app';
import { ConfirmRideController } from '@/modules/ride/controllers';
import { makeConfirmRideUsecase } from '@/modules/ride/factories/usecases';
import { ConfirmRideValidator } from '@/modules/ride/validators';

export const makeConfirmRideController = (): Controller => {
  const validator = new ConfirmRideValidator();
  const usecase = makeConfirmRideUsecase();
  return new ConfirmRideController(validator, usecase);
};
