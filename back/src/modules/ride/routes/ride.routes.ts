import { Routes } from '@/main/app';
import {
  makeConfirmRideController,
  makeEstimateRideController,
  makeRidesByCustomerController,
} from '@/modules/ride/factories/controllers';

const router = new Routes('/ride');

router.setPostRoute({
  path: '/estimate',
  controller: makeEstimateRideController(),
});

router.setPatchRoute({
  path: '/confirm',
  controller: makeConfirmRideController(),
});

router.setGetRoute({
  path: '/:customer_id',
  controller: makeRidesByCustomerController(),
});

export const routesRide = router.getRoutes();
