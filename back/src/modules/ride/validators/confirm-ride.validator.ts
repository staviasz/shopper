import { Validator } from '@/main/validator/validator';

type Input = {
  customer_id: string;
  origin: string;
  destination: string;
  driver: {
    id: string;
    name: string;
  };
  distance: number;
};

type Output = {
  customerId: string;
  origin: string;
  destination: string;
  driver: {
    id: string;
    name: string;
  };
  distance: number;
};

export class ConfirmRideValidator extends Validator<Input, Output> {
  validate(data: Input): Output {
    const { customer_id, destination, origin, driver, distance } = data;

    this.validateFieldsString({
      customer_id,
      destination,
      origin,
      driverId: driver.id,
      driverName: driver.name,
    });

    this.validateFieldsNumber({ distance });
    this.validateRequiredFields(data);
    this.validateFieldsIsDifferent(origin, destination);

    const errors = this.getErrors();
    if (errors) {
      throw new Error(errors);
    }

    return { customerId: customer_id, origin, destination, driver, distance };
  }

  private validateFieldsString(data: Record<string, any>): void {
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value !== 'string') {
        this.setError(key, 'field must be a string');
      }
    });
  }
  private validateFieldsNumber(data: Record<string, any>): void {
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value !== 'number') {
        this.setError(key, 'field must be a number');
      }
    });
  }

  private validateRequiredFields(data: Record<string, any>): void {
    Object.entries(data).forEach(([key, value]) => {
      let valueFormat = typeof value === 'string' ? value.trim() : value;
      if (!valueFormat) {
        this.setError(key, 'field is required');
      }
    });
  }

  private validateFieldsIsDifferent(origin: string, destination: string): void {
    if (origin.replace(/\s/g, '') === destination.replace(/\s/g, '')) {
      this.setError('origin and destination', 'origin and destination cannot be the same');
    }
  }
}
