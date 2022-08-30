import { Controller } from '../Controller';
import { Request, Response } from 'express';
import httpStatus = require('http-status');
import { QueryBus } from '../../../../../Contexts/Shared/domain/QueryBus';
import {FindAppointmentQuery} from '../../../../../Contexts/Calendar/Appointments/application/Finder/FindAppointmentQuery';
import {AppointmentNotExist} from '../../../../../Contexts/Calendar/Appointments/domain/AppointmentNotExist';
import {FindAppointmentResponse} from '../../../../../Contexts/Calendar/Appointments/application/Finder/FindAppointmentResponse';

export class AppointmentGetController implements Controller {
  constructor(private queryBus: QueryBus) {}
  async run(req: Request, res: Response): Promise<void> {

    const id: string = req.params.id;

    try {
      const query = new FindAppointmentQuery({id});
      const event = await this.queryBus.ask<FindAppointmentResponse>(query);

      res.status(httpStatus.OK).send(event.value);
    } catch (e) {
      if (e instanceof AppointmentNotExist) {
        res.status(httpStatus.NOT_FOUND).send();
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
      }
    }
  }
}

