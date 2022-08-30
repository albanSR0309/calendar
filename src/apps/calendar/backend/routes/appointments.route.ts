import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {Authentication} from '../middleware/Authentication';

export const register = (router: Router) => {
  const appointmentPutController = container.get('Apps.calendar.controllers.AppointmentPutController');
  router.put('/appointments/:id', Authentication, (req: Request, res: Response) => appointmentPutController.run(req, res));

  const appointmentGetController = container.get('Apps.calendar.controllers.AppointmentGetController');
  router.get('/appointments/:id', Authentication, (req: Request, res: Response) => appointmentGetController.run(req, res));

  const appointmentDeleteController = container.get('Apps.calendar.controllers.AppointmentDeleteController');
  router.delete('/appointments/:id', Authentication, (req: Request, res: Response) => appointmentDeleteController.run(req, res));

  const appointmentsGetController = container.get('Apps.calendar.controllers.AppointmentsGetController');
  router.get('/appointments', Authentication, (req: Request, res: Response) => appointmentsGetController.run(req, res));
};
