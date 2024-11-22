import {
  makeConfirmRideController,
  makeEstimateRideController,
} from '@/modules/ride/factories/controllers';
import { Routes } from './routes';

const router = new Routes('/ride');

router.setPostRoute({
  path: '/estimate',
  controller: makeEstimateRideController(),
});

router.setPatchRoute({
  path: '/confirm',
  controller: makeConfirmRideController(),
});

export const routesRide = router.getRoutes();
