import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {Authentication} from '../middleware/Authentication';

export const register = (router: Router) => {
  const userPutController = container.get('Apps.calendar.controllers.UserPutController');
  router.put('/users/:id', (req: Request, res: Response) => userPutController.run(req, res));

  const userGetController = container.get('Apps.calendar.controllers.UserGetController');
  router.get('/users', Authentication, (req: Request, res: Response) => userGetController.run(req, res));

  const userPostController = container.get('Apps.calendar.controllers.UserPostController');
  router.post('/auth', (req: Request, res: Response) => userPostController.run(req, res));
};
