import { ConfirmRideValidator } from '../../validators/confirm-ride.validator';

describe('ConfirmRideValidator', () => {
  let validator: ConfirmRideValidator;

  beforeEach(() => {
    validator = new ConfirmRideValidator();
  });

  it('should return errors', () => {
    expect(() => validator.validate({} as any)).toThrow(
      new Error(
        'customer_id: is required, destination: is required, origin: is required, name: is required, duration: is required, distance: is required, id: is required, value: is required, origin and destination: origin and destination cannot be the same',
      ),
    );
  });

  it('Should return correct values', () => {
    const customer_id = 'customer_id';
    const data = {
      destination: 'destination',
      origin: 'origin',
      driver: {
        name: 'name',
        id: 1,
      },
      distance: 1,
      duration: '1:1',
      value: 1,
    };

    expect(validator.validate({ ...data, customer_id })).toEqual({
      ...data,
      customerId: customer_id,
    });
  });
});
