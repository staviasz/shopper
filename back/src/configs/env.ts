import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export const env = {
  port: process.env.BACK_PORT,
  dbUrl: process.env.DATABASE_URL,
  googleApiKey: process.env.GOOGLE_API_KEY,
};
