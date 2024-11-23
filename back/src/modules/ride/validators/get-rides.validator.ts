import { CustomHttpError } from '@/main/errors/custom-http.erros';
import { Validator } from '@/main/validator/validator';

type Input = {
  customer_id: string;
  driver_id?: string;
};

type Output = {
  customerId: string;
  driverId?: number;
};

export class GetRidesValidator extends Validator<Input, Output> {
  validate(data: Input): Output {
    this.clearErrors();
    const { customer_id, driver_id } = data;
    console.log(data);

    this.validateRequiredFields({ customer_id });
    const driverId = this.validateFieldsNumber({ driver_id });

    const errors = this.getErrors();
    if (errors) {
      throw new CustomHttpError(400, errors);
    }

    return { customerId: customer_id, driverId };
  }

  private validateFieldsNumber({ driver_id }: { driver_id?: string }): undefined | number {
    if (driver_id) {
      const driverId = Number(driver_id);
      if (isNaN(driverId)) {
        this.setError('driver_id', 'field must be a number');
      }
      return driverId;
    }
    return;
  }

  private validateRequiredFields(data: Record<string, any>): void {
    if (!data.customer_id?.trim()) {
      this.setError('customer_id', 'field is required');
    }
  }
}
