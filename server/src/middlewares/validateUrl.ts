import type { NextFunction, Request, Response } from 'express';
import validator from 'validator';

export function validateUrl(req: Request, res: Response, next: NextFunction) {
  if (!req.body || typeof req.body !== 'object') {
    return res
      .status(400)
      .send({ error: 'Request body is missing or invalid' });
  }
  const url = req.body.originalUrl;
  if (typeof url !== 'string' || url.trim() === '') {
    return res.status(400).send({ error: 'originalUrl is required' });
  }
  if (!validator.isURL(url)) {
    return res.status(400).send({ error: 'Invalid URL' });
  }
  next();
}
