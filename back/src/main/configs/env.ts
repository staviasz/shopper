import dotenv from 'dotenv';
import path, { join } from 'path';

const pathDir = path.resolve(join(__dirname, '../../../../.env'));
dotenv.config({ path: pathDir });

export const env = {
  port: process.env.BACK_PORT,
  dbUrl: process.env.DATABASE_URL,
  googleApiKey: process.env.GOOGLE_API_KEY,
};
