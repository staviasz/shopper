export class CustomHttpError {
  constructor(
    public status: number,
    public message: string,
  ) {}
}
