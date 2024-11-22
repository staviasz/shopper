import { Router } from 'express';
import { Controller } from '../controllers/controller';

type RouterOptions = {
  path: string;
  controller: Controller;
  middlewares?: any[];
};

export class Routes {
  private readonly router: Router;
  constructor(private readonly basePath: string = '') {
    this.router = Router();
  }

  public getRoutes(): Router {
    return this.router;
  }

  public setPutRoute(path: string, controller: any, middlewares?: any[]): void {
    this.router.put(`${this.basePath}${path}`, ...(middlewares || []), controller.execute);
  }

  public setPostRoute({ path, controller, middlewares }: RouterOptions): void {
    this.router.post(`${this.basePath}${path}`, ...(middlewares || []), controller.execute);
  }

  public setGetRoute({ path, controller, middlewares }: RouterOptions): void {
    this.router.get(`${this.basePath}${path}`, ...(middlewares || []), controller.execute);
  }

  public setDeleteRoute(path: string, controller: any, middlewares?: any[]): void {
    this.router.delete(`${this.basePath}${path}`, ...(middlewares || []), controller.execute);
  }
}
