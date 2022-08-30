import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {Authentication} from '../middleware/Authentication';

export const register = (router: Router) => {
  const workspacePutController = container.get('Apps.calendar.controllers.WorkspacePutController');
  router.put('/workspaces/:id', Authentication, (req: Request, res: Response) => workspacePutController.run(req, res));

  const workspacesGetController = container.get('Apps.calendar.controllers.WorkspacesGetController');
  router.get('/workspaces', Authentication, (req: Request, res: Response) => workspacesGetController.run(req, res));
};
