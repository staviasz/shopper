import { FetchAdapter } from '@/main/adapter/fetch.adapter';
import dbClient from '@/main/infra/helper/prisma.helper';
import { ApiRoutesService } from '@/modules/ride/services/api-routes.service';
import { EstimateRideUsecase } from '@/modules/ride/usecases';

export const makeEstimateRideUsecase = () => {
  const externalRequests = new FetchAdapter();
  const apiRoutesService = new ApiRoutesService(externalRequests);
  const db = dbClient.client;
  return new EstimateRideUsecase(apiRoutesService, db);
};
