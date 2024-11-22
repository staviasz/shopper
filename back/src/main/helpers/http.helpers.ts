import { Response } from 'express';

export const badRequest = (res: Response, message: string): void => {
  res.status(400).json({ error_code: 'INVALID_DATA', error_description: message });
};
