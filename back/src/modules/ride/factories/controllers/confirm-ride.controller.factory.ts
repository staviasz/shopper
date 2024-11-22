import { ConfirmRideController, Controller } from '@/modules/ride/controllers';
import { ConfirmRideValidator } from '../../validators';

export const makeConfirmRideController = (): Controller => {
  const validator = new ConfirmRideValidator();
  return new ConfirmRideController(validator);
};
