import { Controller } from '../Controller';
import { Request, Response } from 'express';
import httpStatus = require('http-status');
import { QueryBus } from '../../../../../Contexts/Shared/domain/QueryBus';
import {FindUserQuery} from '../../../../../Contexts/Calendar/Users/application/Finder/FindUserQuery';
import {FindUserResponse} from '../../../../../Contexts/Calendar/Users/application/Finder/FindUserResponse';
import {UserNotExist} from '../../../../../Contexts/Calendar/Users/domain/UserNotExist';

export class UserGetController implements Controller {
  constructor(private queryBus: QueryBus) {}
  async run(req: Request, res: Response): Promise<void> {

    const id: string = req.body.userId;

    try {
      const query = new FindUserQuery({id});
      const user = await this.queryBus.ask<FindUserResponse>(query);

      res.status(httpStatus.OK).send(user.value);
    } catch (e) {
      if (e instanceof UserNotExist) {
        res.status(httpStatus.NOT_FOUND).send();
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
      }
    }
  }
}

