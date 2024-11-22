export abstract class Validator<Input = object, Output = object> {
  private errors: string = '';

  abstract validate(data: Input): Output;

  protected setError(key: string, message: string): void {
    this.errors += `${key}: ${message}\n`;
  }

  protected getErrors(): string {
    return this.errors;
  }
}
