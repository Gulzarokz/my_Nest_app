import { Injectable, NestMiddleware } from '@nestjs/common';
import { request, response, NextFunction } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method}] - [${req.url}]`);
    next();
  }
}
