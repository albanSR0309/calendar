import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import config from '../../../../Contexts/Calendar/Shared/infrastructure/config';
const secret: unknown = config.get('secret');

export const Authentication = function (req: Request, res: Response, next: NextFunction) {
  try {
    ensureTokenIsExist(req.headers.authorization);
    verifyToken(req.headers.authorization);
    // @ts-ignore
    const payload = jwt.decode(req.headers.authorization, secret);
    // @ts-ignore
    req.body.userId = payload.sub;
  } catch (e) {
    return res.status(httpStatus.UNAUTHORIZED).send();
  }
  next();
};

export const UserAuthorization = function (req: Request, res: Response, next: NextFunction) {
  // @ts-ignore
  const payload = jwt.decode(req.headers.authorization, secret);
  if (req.params.id !== payload?.sub) {
    return res.status(httpStatus.UNAUTHORIZED).send();
  }
  next();
};

export const CompanyAuthorization = function (req: Request, res: Response, next: NextFunction) {
  // @ts-ignore
  const payload = jwt.decode(req.headers.authorization, secret);
  if (req.params.id !== payload?.companyId) {
    return res.status(httpStatus.UNAUTHORIZED).send();
  }
  next();
};

function ensureTokenIsExist(token: unknown) {
  if (!token) {
    throw new Error();
  }
}

function verifyToken(token: unknown) {
  try {
    // @ts-ignore
    jwt.verify(token, secret);
  } catch (e) {
    throw new Error();
  }
}
