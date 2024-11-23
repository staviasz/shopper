import { Controller } from '@/main/app';
import { ok } from '@/main/helpers/http.helpers';
import { GetRidesUsecase } from '@/modules/ride/usecases';
import { GetRidesValidator } from '@/modules/ride/validators';
import { Request, Response } from 'express';

export class GetRidesByCustomerController extends Controller {
  constructor(
    private readonly validator: GetRidesValidator,
    private readonly usecase: GetRidesUsecase,
  ) {
    super();
    this.execute = this.execute.bind(this);
  }

  async execute(req: Request, res: Response): Promise<void> {
    try {
      const { customer_id } = req.params;
      const { driver_id } = req.query;

      const { customerId, driverId } = this.validator.validate({
        customer_id,
        driver_id: driver_id as string,
      });

      const rides = await this.usecase.execute({ customerId, driverId });

      ok(res, rides);
    } catch (error) {
      this.formattedErrors(error, res);
    }
  }
}
