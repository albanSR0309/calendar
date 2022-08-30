import {Controller} from '../Controller';
import {Request, Response} from 'express';
import httpStatus = require('http-status');
import {QueryBus} from '../../../../../Contexts/Shared/domain/QueryBus';
import {SearchWorkspaceQuery} from '../../../../../Contexts/Calendar/Workspaces/application/Searcher/SearchWorkspaceQuery';
import {SearchWorkspaceResponse} from '../../../../../Contexts/Calendar/Workspaces/application/Searcher/SearchWorkspaceResponse';

export class WorkspacesGetController implements Controller {
  constructor(private queryBus: QueryBus) {
  }

  async run(req: Request, res: Response): Promise<void> {

    const {body: bodyParams} = req;
    const {userId} = bodyParams;

    try {
      const query = new SearchWorkspaceQuery({userId});
      const events = await this.queryBus.ask<SearchWorkspaceResponse>(query);

      res.status(httpStatus.OK).send(events.value);
    } catch (e) {
        res.status(httpStatus.NOT_FOUND).send();
    }
  }
}

