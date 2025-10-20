import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  shortId: { type: String, required: true, unique: true },
  originalUrl: { type: String, required: true },
  ipAddress: { type: String },
  createdAt: { type: Date, default: Date.now },
  clicks: [
    {
      ipAddress: { type: String },
      country: { type: String },
      countryCode: { type: String },
      browser: { type: String },
      device: { type: String },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  totalClicks: { type: Number, default: 0 },
});

export default mongoose.model('Link', linkSchema);
