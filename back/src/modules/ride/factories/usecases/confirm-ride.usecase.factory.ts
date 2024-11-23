import dbClient from '@/main/infra/helper/prisma.helper';
import { ConfirmRideUsecase } from '@/modules/ride/usecases';

export const makeConfirmRideUsecase = () => {
  const db = dbClient.client;
  return new ConfirmRideUsecase(db);
};
