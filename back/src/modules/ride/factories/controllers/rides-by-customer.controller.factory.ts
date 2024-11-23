import { Controller } from '@/main/app';
import { GetRidesByCustomerController } from '@/modules/ride/controllers';
import { GetRidesValidator } from '@/modules/ride/validators';
import { makeGetRidesUsecase } from '../usecases';

export const makeRidesByCustomerController = (): Controller => {
  const validator = new GetRidesValidator();
  const usecase = makeGetRidesUsecase();
  return new GetRidesByCustomerController(validator, usecase);
};
