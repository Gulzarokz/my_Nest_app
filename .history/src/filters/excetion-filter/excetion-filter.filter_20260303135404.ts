import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class ExcetionFilterFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

  }
}
