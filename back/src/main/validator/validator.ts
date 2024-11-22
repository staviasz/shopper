export abstract class Validator<Input = object, Output = object> {
  private errors: string[] = [];
  constructor() {}

  abstract validate(data: Input): Output;

  protected setError(key: string, message: string): void {
    console.log('validator', `${key}: ${message}`);
    this.errors.push(`${key}: ${message}`);
    console.log('validator', this.errors);
  }

  protected getErrors(): string[] | null {
    return this.errors.length ? this.errors : null;
  }
  protected clearErrors(): void {
    this.errors = [];
  }
}
