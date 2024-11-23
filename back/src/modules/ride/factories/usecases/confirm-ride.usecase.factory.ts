import { DbClient } from '@/main/infra/db/prisma.helper';
import { ConfirmRideUsecase } from '@/modules/ride/usecases';

export const makeConfirmRideUsecase = () => {
  const dbClient = DbClient.connect();
  return new ConfirmRideUsecase(dbClient);
};
