import dbClient from '@/main/infra/helper/prisma.helper';
import { GetRidesUsecase } from '@/modules/ride/usecases';

export const makeGetRidesUsecase = () => {
  const db = dbClient.client;
  return new GetRidesUsecase(db);
};
