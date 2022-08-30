import jwt from 'jsonwebtoken';
import { InvalidArgumentError } from './InvalidArgumentError';
import config from '../../../Calendar/Shared/infrastructure/config';

export class Jwt {
  readonly value: string;

  constructor(value: string) {
    this.ensureIsValidJwt(value);
    this.value = value;
  }

  static generate(id: string): Jwt {
    const secret: unknown = config.get('secret');
    const payload = {sub: id};

    // @ts-ignore
    return new Jwt(jwt.sign(payload, secret));
  }

  toPrimitives() {
    return this.value;
  }

  private ensureIsValidJwt(accessToken: string): void {
    // @ts-ignore
    const secret: string = config.get('secret');

    if (!jwt.verify(accessToken, secret)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${accessToken}>`);
    }
  }
}
