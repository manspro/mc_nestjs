import { ExpressRequestInterface } from './../../types/expressRequest.interface';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//декоратор читает или меняет информацию из запроса и возвращает данные
export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<ExpressRequestInterface>();

  if (!request.user) {
    return null;
  }
  if (data) {
    return request.user[data]; //data это это то, что мы указали в декораторе в User.controller
  }
  return request.user;
});
