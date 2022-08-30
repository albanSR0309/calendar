import { Controller } from '../Controller';
import { Request, Response } from 'express';
import httpStatus = require('http-status');
import { QueryBus } from '../../../../../Contexts/Shared/domain/QueryBus';
import {
  AuthenticateUserQuery
} from '../../../../../Contexts/Calendar/Users/application/Authenticator/AuthenticateUserQuery';
import {
  AuthenticateUserResponse
} from '../../../../../Contexts/Calendar/Users/application/Authenticator/AuthenticateUserResponse';

export class UserPostController implements Controller {
  constructor(private queryBus: QueryBus) {}
  async run(req: Request, res: Response): Promise<void> {

    const email: string = req.body.email;
    const password: string = req.body.password;

    try {
      const query = new AuthenticateUserQuery({email, password});
      const token = await this.queryBus.ask<AuthenticateUserResponse>(query);

      res.status(httpStatus.OK).send(token);
    } catch (e) {
        res.status(httpStatus.BAD_REQUEST).send();
    }
  }
}

