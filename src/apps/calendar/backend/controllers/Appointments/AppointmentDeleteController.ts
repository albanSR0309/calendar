import {Controller} from '../Controller';
import {Request, Response} from 'express';
import httpStatus = require('http-status');
import {QueryBus} from '../../../../../Contexts/Shared/domain/QueryBus';
import {AppointmentEventQuery} from '../../../../../Contexts/Calendar/Appointments/application/Remover/AppointmentEventQuery';
import {RemoveAppointmentResponse} from '../../../../../Contexts/Calendar/Appointments/application/Remover/RemoveAppointmentResponse';

export class AppointmentDeleteController implements Controller {
  constructor(private queryBus: QueryBus) {
  }

  async run(req: Request, res: Response): Promise<void> {

    const id: string = req.params.id;

    try {
      const query = new AppointmentEventQuery({id});
      await this.queryBus.ask<RemoveAppointmentResponse>(query);
      res.status(httpStatus.OK).send();
    } catch (e) {

      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();

    }
  }
}

