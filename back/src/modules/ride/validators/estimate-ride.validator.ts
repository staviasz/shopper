import { CustomHttpError } from '@/main/errors/custom-http.erros';
import { Validator } from '@/main/validator/validator';

type Input = {
  customer_id: string;
  origin: string;
  destination: string;
};

type Output = {
  customerId: string;
  origin: string;
  destination: string;
};

export class EstimateRidesValidator extends Validator<Input, Output> {
  validate(data: Input): Output {
    this.clearErrors();
    const { customer_id, destination, origin } = data;

    this.validateFieldsString({ customer_id, destination, origin });
    this.validateRequiredFields({ customer_id, destination, origin });
    this.validateFieldsIsDifferent(origin, destination);

    const errors = this.getErrors();
    if (errors) {
      throw new CustomHttpError(400, errors);
    }

    return { customerId: customer_id, origin, destination };
  }

  private validateFieldsString(data: Record<string, any>): void {
    this.baseValidateFields(
      data,
      (key, value) => typeof value !== 'string',
      'field must be a string',
    );
  }

  private validateRequiredFields(data: Record<string, any>): void {
    this.baseValidateFields(
      data,
      (key, value) => {
        const v = typeof value === 'string' ? value.trim() : value;
        return !v;
      },
      'field is required',
    );
  }

  private validateFieldsIsDifferent(origin: string, destination: string): void {
    if (origin?.replace(/\s/g, '') === destination?.replace(/\s/g, '')) {
      this.setError('origin and destination', 'origin and destination cannot be the same');
    }
  }

  private baseValidateFields(
    data: Record<string, any>,
    verification: (key: string, value: any) => boolean,
    message: string,
  ): void {
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'object' || !value) {
        !value || Object.keys(value).length === 0
          ? this.setError(key, 'is required')
          : this.baseValidateFields(value, verification, message);
        return;
      }
      if (verification(key, value)) {
        this.setError(key, message);
      }
    });
  }
}
