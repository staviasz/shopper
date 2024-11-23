import { CustomHttpError } from '../errors/custom-http.erros';
import { Validator } from './validator';

describe('Validator', () => {
  let validator: Validator;

  class TestValidator extends Validator {
    validate(data: any): any {
      this.clearErrors();
      if (
        typeof data.name !== 'string' ||
        (data.professional && typeof data.professional !== 'string')
      ) {
        this.setError('data', 'Data is not a string');
      }

      if (typeof data.age !== 'number') {
        this.setError('age', 'Age is not a number');
      }

      const errors = this.getErrors();
      if (errors) {
        throw new CustomHttpError(400, errors);
      }
    }
  }
  beforeEach(() => {
    validator = new TestValidator();
  });

  it('should return errors', () => {
    const data = { name: 1, age: '1' };
    expect(() => validator.validate(data)).toThrow(
      new CustomHttpError(400, ['data: Data is not a string', 'age: Age is not a number']),
    );
  });

  it('should not return duplicate errors ', () => {
    const data = { name: 1, professional: 1, age: '1' };
    expect(() => validator.validate(data)).toThrow(
      new CustomHttpError(400, ['data: Data is not a string', 'age: Age is not a number']),
    );
  });

  it('should success', () => {
    const data = { name: '1', age: 1 };
    expect(() => validator.validate(data)).not.toThrow();
  });
});
