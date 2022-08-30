import {Request, Response} from 'express';
import httpStatus from 'http-status';
import {Controller} from '../Controller';
import {CommandBus} from '../../../../../Contexts/Shared/domain/CommandBus';
import {CreateAppointmentCommand} from '../../../../../Contexts/Calendar/Appointments/application/Creator/CreateAppointmentCommand';

export class AppointmentPutController implements Controller {
  constructor(private commandBus: CommandBus) {
  }

  async run(req: Request, res: Response) {

    const {body: bodyParams, params: reqParams} = req;
    const {id} = reqParams;
    const {userId, workspaceId, name, description, startAt, endAt} = bodyParams;

    const createEventCommand = new CreateAppointmentCommand({
      id,
      userId,
      workspaceId,
      name,
      description,
      startAt,
      endAt
    });

    try {
      await this.commandBus.dispatch(createEventCommand);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    res.status(httpStatus.CREATED).send();
  }
}
