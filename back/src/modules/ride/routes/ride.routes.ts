import { makeEstimateRideController } from '@/modules/ride/factories/controllers/estimate-ride.controller.factory';
import { Routes } from './routes';

const router = new Routes('/ride');

router.setPostRoute({
  path: '/',
  controller: makeEstimateRideController(),
});

export const routesRide = router.getRoutes();
