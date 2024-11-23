import { Controller } from '@/main/app';
import { ok } from '@/main/helpers/http.helpers';
import { ConfirmRideUsecase } from '@/modules/ride/usecases';
import { ConfirmRideValidator } from '@/modules/ride/validators/';
import { Request, Response } from 'express';

export class ConfirmRideController extends Controller {
  constructor(
    private readonly validator: ConfirmRideValidator,
    private readonly usecase: ConfirmRideUsecase,
  ) {
    super();
    this.execute = this.execute.bind(this);
  }
  async execute(req: Request, res: Response): Promise<void> {
    try {
      const { origin, destination, customerId, driver, distance, duration, value } =
        this.validator.validate(req.body);

      await this.usecase.execute({
        origin,
        destination,
        customerId,
        driver,
        distance,
        duration,
        value,
      });

      ok(res, { success: true });
    } catch (error) {
      this.formattedErrors(error, res);
    }
  }
}
