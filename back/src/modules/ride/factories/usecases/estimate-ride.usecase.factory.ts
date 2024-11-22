import { FetchAdapter } from '@/main/adapter/fetch.adapter';
import { DbClient } from '@/main/infra/db/prisma.helper';
import { ApiRoutesService } from '@/modules/ride/services/api-routes.service';
import { EstimateRideUsecase } from '@/modules/ride/usecases';

export const makeEstimateRideUsecase = () => {
  const externalRequests = new FetchAdapter();
  const apiRoutesService = new ApiRoutesService(externalRequests);
  const dbClient = DbClient.connect();
  return new EstimateRideUsecase(apiRoutesService, dbClient);
};
