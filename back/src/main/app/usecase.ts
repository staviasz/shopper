export abstract class Usecase<Input, Output> {
  abstract execute(dto: Input): Promise<Output> | Output;
}
