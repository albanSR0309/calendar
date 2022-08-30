import {StringValueObject} from '../../../Shared/domain/value-object/StringValueObject';

export class UserPassword extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.value = this.encode(value);
  }

  public isEquals(other: UserPassword) {
    return this.decodeToPrimitives() === other.value;
  }

  encode(value: string) {
    return Buffer.from(value, 'binary').toString('base64');
  }

  decodeToPrimitives() {
    return Buffer.from(this.value, 'base64').toString('binary');
  }
}
