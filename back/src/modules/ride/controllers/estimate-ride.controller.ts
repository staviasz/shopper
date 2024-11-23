import { ok } from '@/main/helpers/http.helpers';
import { Controller } from '@/main/app';
import { EstimateRideUsecase } from '@/modules/ride/usecases';
import { EstimateRidesValidator } from '@/modules/ride/validators/estimate-ride.validator';
import { Request, Response } from 'express';

type ReqBody = {
  origin: string;
  destination: string;
  customerId: string;
};

export class EstimateRideController extends Controller {
  constructor(
    private readonly usecase: EstimateRideUsecase,
    private readonly validator: EstimateRidesValidator,
  ) {
    super();
    this.execute = this.execute.bind(this);
  }
  async execute(req: Request, res: Response): Promise<void> {
    try {
      const { origin, destination, customerId } = this.validator.validate(req.body);

      const result = await this.usecase.execute({ origin, destination, customerId });

      ok(res, result);
    } catch (error) {
      this.formattedErrors(error, res);
    }
  }
}
