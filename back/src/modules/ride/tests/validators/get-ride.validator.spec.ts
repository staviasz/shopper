import { GetRidesValidator } from '../../validators/get-rides.validator';

describe('EstimateRideValidator', () => {
  let validator: GetRidesValidator;

  beforeEach(() => {
    validator = new GetRidesValidator();
  });

  it('should return errors', () => {
    expect(() => validator.validate({} as any)).toThrow(
      new Error('customer_id: field is required'),
    );
  });

  it('Should return correct values', () => {
    const customer_id = 'customer_id';
    const driver_id = '2';

    expect(validator.validate({ driver_id, customer_id })).toEqual({
      driverId: parseInt(driver_id),
      customerId: customer_id,
    });
  });
});
