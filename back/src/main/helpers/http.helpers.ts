import { Response } from 'express';

export const ok = (res: Response, data: any): void => {
  res.status(200).json(data);
};

export const badRequest = (res: Response, message: string): void => {
  res.status(400).json({ error_code: 'INVALID_DATA', error_description: message });
};

export const notFound = (res: Response, message: string): void => {
  res.status(404).json({ error_code: 'DRIVER_NOT_FOUND', error_description: message });
};

export const notAcceptable = (res: Response, message: string): void => {
  res.status(406).json({ error_code: 'INVALID_DISTANCE', error_description: message });
};

export const serverError = (res: Response): void => {
  res.status(500).json({ error_code: 'SERVER_ERROR', error_description: 'Server error' });
};
