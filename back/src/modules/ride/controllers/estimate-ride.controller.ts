import { badRequest } from '@/main/helpers/http.helpers';
import { Controller } from '@/modules/ride/controllers';
import { EstimateRideUsecase } from '@/modules/ride/usecases';
import { Request, Response } from 'express';

type ReqBody = {
  origin: string;
  destination: string;
  customerId: string;
};

export class EstimateRideController extends Controller {
  constructor(private readonly usecase: EstimateRideUsecase) {
    super();
    this.execute = this.execute.bind(this);
  }
  async execute(req: Request, res: Response): Promise<void> {
    const { isValid, origin, destination, customerId } = this.validateRequest(req, res);
    if (!isValid) return;

    const result = await this.usecase.execute({ origin, destination, customerId });

    res.status(200).json(result);
  }

  private validateRequest(req: Request, res: Response): { isValid: boolean } & ReqBody {
    const { origin, destination, customer_id: customerId } = req.body;
    let isValid = true;

    if (!origin || !destination || !customerId) {
      isValid = false;
      badRequest(res, 'Fields origin, destination and customerId are required');
      return { isValid } as any;
    }

    if (origin.replace(/\s/g, '') === destination.replace(/\s/g, '')) {
      isValid = false;
      badRequest(res, 'Origin and destination cannot be the same');
    }

    return { isValid, origin, destination, customerId };
  }
}
