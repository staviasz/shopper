import { Controller } from '@/modules/ride/controllers/';
import { ConfirmRideValidator } from '@/modules/ride/validators/';
import { Request, Response } from 'express';

type ReqBody = {
  origin: string;
  destination: string;
  customerId: string;
};

export class ConfirmRideController extends Controller {
  constructor(private readonly validator: ConfirmRideValidator) {
    super();
    this.execute = this.execute.bind(this);
  }
  async execute(req: Request, res: Response): Promise<void> {
    const { origin, destination, customerId } = this.validator.validate(req.body);

    res.status(200).json({ origin, destination, customerId });
  }
}
