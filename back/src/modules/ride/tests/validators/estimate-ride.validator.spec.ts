import { EstimateRidesValidator } from '../../validators/estimate-ride.validator';

describe('EstimateRideValidator', () => {
  let validator: EstimateRidesValidator;

  beforeEach(() => {
    validator = new EstimateRidesValidator();
  });

  it('should return errors', () => {
    expect(() => validator.validate({} as any)).toThrow(
      new Error(
        'customer_id: is required, destination: is required, origin: is required, origin and destination: origin and destination cannot be the same',
      ),
    );
  });

  it('Should return correct values', () => {
    const customer_id = 'customer_id';
    const data = {
      destination: 'destination',
      origin: 'origin',
    };

    expect(validator.validate({ ...data, customer_id })).toEqual({
      ...data,
      customerId: customer_id,
    });
  });
});
