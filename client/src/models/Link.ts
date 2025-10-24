export type Link = {
  shortId: string;
  originalUrl: string;
  ipAddress: string;
  createdAt: Date;
  clicks?: [
    {
      ipAddress: string;
      country: string;
      countryCode: string;
      browser: string;
      device: string;
      timestamp: Date;
    }
  ];
  totalClicks?: number;
};
