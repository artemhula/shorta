import type { Request, Response } from 'express';

export const shortLink = (req: Request, res: Response) => {
  const url = req.body.originalUrl;
  res.send(url);
};
