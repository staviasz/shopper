import { DbClient } from '@/main/infra/db/prisma.helper';
import { GetRidesUsecase } from '@/modules/ride/usecases';

export const makeGetRidesUsecase = () => {
  const dbClient = DbClient.connect();
  return new GetRidesUsecase(dbClient);
};
