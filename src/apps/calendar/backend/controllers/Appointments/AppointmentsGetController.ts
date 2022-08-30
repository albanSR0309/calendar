import {Controller} from '../Controller';
import {Request, Response} from 'express';
import httpStatus = require('http-status');
import {QueryBus} from '../../../../../Contexts/Shared/domain/QueryBus';
import {SearchAppointmentQuery} from '../../../../../Contexts/Calendar/Appointments/application/Searcher/SearchAppointmentQuery';
import {SearchAppointmentResponse} from '../../../../../Contexts/Calendar/Appointments/application/Searcher/SearchAppointmentResponse';
import {ThereAreNoAppointments} from '../../../../../Contexts/Calendar/Appointments/domain/ThereAreNoAppointments';

export class AppointmentsGetController implements Controller {
  constructor(private queryBus: QueryBus) {}

  async run(req: Request, res: Response): Promise<void> {

    const {body: bodyParams, query: filters} = req;
    const {userId} = bodyParams;

    try {
      const query = new SearchAppointmentQuery({filters, userId});
      const events = await this.queryBus.ask<SearchAppointmentResponse>(query);

      res.status(httpStatus.OK).send(events.value);
    } catch (e) {
      if (e instanceof ThereAreNoAppointments) {
        res.status(httpStatus.NOT_FOUND).send();
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
      }
    }
  }
}

