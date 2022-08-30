import {Request, Response} from 'express';
import httpStatus from 'http-status';
import {Controller} from '../Controller';
import {CommandBus} from '../../../../../Contexts/Shared/domain/CommandBus';
import {CreateUserCommand} from '../../../../../Contexts/Calendar/Users/application/Creator/CreateUserCommand';

export class UserPutController implements Controller {
  constructor(private commandBus: CommandBus) {
  }

  async run(req: Request, res: Response) {
    const id: string = req.params.id;
    const name: string = req.body.name;
    const email: string = req.body.email;
    const password: string = req.body.password;

    const createUserCommand = new CreateUserCommand({
      id,
      name,
      email,
      password,
    });

    try {
      await this.commandBus.dispatch(createUserCommand);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json(error);
    }

    res.status(httpStatus.CREATED).send();
  }
}
