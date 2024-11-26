import { CustomHttpError } from '@/main/errors/custom-http.erros';
import { badRequest, notAcceptable, notFound, serverError } from '@/main/helpers/http.helpers';
import { Request, Response } from 'express';

export abstract class Controller {
  abstract execute(req: Request, res: Response): Promise<void> | void;

  protected formattedErrors(error: any, res: Response): void {
    if (error instanceof CustomHttpError === false) {
      serverError(res);
      return;
    }
    switch (error.status) {
      case 400:
        badRequest(res, error.message);
        break;
      case 404:
        notFound(res, error.message);
        break;
      case 406:
        notAcceptable(res, error.message);
        break;
      default:
        serverError(res);
    }
  }
}
