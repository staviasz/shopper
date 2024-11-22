import { Request, Response } from 'express';

export abstract class Controller {
  abstract execute(req: Request, res: Response): Promise<void> | void;
}
