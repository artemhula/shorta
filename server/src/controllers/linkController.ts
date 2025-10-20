import type { Request, Response } from 'express';
import Link from '../schemas/link.js';
import { nanoid } from 'nanoid';
import { UAParser } from 'ua-parser-js';
import { log } from 'console';

export const shortLink = async (req: Request, res: Response) => {
  let { originalUrl } = req.body;
  if (!/^https?:\/\//.test(originalUrl)) {
    originalUrl = 'http://' + originalUrl;
  }
  const link = await Link.create({
    shortId: nanoid(7),
    originalUrl,
    ipAddress: req.ip,
  });
  res.status(201).send(link);
};

export const redirectLink = async (req: Request, res: Response) => {
  try {
    const { shortId } = req.params;
    log('Redirecting shortId:', shortId);
    const link = await Link.findOne({ shortId });
    if (!link) {
      return res.status(404).json({ error: 'Not found' });
    }

    link.totalClicks += 1;

    const click: any = { ipAddress: req.ip };

    try {
      const ipRes = await fetch(`http://ip-api.com/json/${req.ip}`);
      const json = await ipRes.json();
      if (json.status === 'success') {
        click.country = json.country;
        click.countryCode = json.countryCode;
      }
    } catch {}

    const parser = new UAParser(req.headers['user-agent']);
    click.browser = parser.getBrowser().name;
    click.device = parser.getDevice().type;

    link.clicks.push(click);
    await link.save();

    res.redirect(link.originalUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
