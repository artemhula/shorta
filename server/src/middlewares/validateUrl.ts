import type { NextFunction, Request, Response } from 'express';
import validator from 'validator';

export function validateUrl(req: Request, res: Response, next: NextFunction) {
  const url = req.body.originalUrl;
  if (validator.isURL(url)) {
    next();
  } else {
    res.status(400).send({ error: 'Invalid URL' });
  }
}
