export abstract class Validator<Input = object, Output = object> {
  private errors: string[] = [];
  constructor() {}

  abstract validate(data: Input): Output;

  protected setError(key: string, message: string): void {
    this.errors.push(`${key}: ${message}`);
  }

  protected getErrors(): string[] | null {
    const errors = this.errors.length ? [...new Set(this.errors)] : null;
    return errors;
  }
  protected clearErrors(): void {
    this.errors = [];
  }
}
