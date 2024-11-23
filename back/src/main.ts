import { env } from '@/main/configs/env';
import '@/main/infra/helper/process-db.helper';
import { routesRide } from '@/modules/ride';
import cors from 'cors';
import express, { type Express } from 'express';

class App {
  private server: Express;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routesRide);
  }

  public async start(): Promise<void> {
    this.server.listen(env.port, () => {
      console.log(`Server is running on port ${env.port}`);
    });
  }
}
const app = new App();
app.start();
