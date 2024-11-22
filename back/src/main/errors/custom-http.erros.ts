export class CustomHttpError extends Error {
  constructor(
    public status: number,
    public messages: string | string[],
  ) {
    super();
    this.message = typeof messages === 'string' ? messages : messages.join(', ');
  }
}
