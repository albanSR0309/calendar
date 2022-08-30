import {Request, Response} from 'express';
import httpStatus from 'http-status';
import {Controller} from '../Controller';
import {CommandBus} from '../../../../../Contexts/Shared/domain/CommandBus';
import {
  CreateWorkspaceCommand
} from '../../../../../Contexts/Calendar/Workspaces/application/Creator/CreateWorkspaceCommand';

export class WorkspacePutController implements Controller {
  constructor(private commandBus: CommandBus) {
  }

  async run(req: Request, res: Response) {

    const {body: bodyParams, params: reqParams} = req;
    const {id} = reqParams;
    const {name, userId} = bodyParams;

    const createEventCommand = new CreateWorkspaceCommand({
      id,
      name,
      userId,
    });

    try {
      await this.commandBus.dispatch(createEventCommand);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    res.status(httpStatus.CREATED).send();
  }
}
