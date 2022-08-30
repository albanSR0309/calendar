import { UserId } from '../../../../../../src/Contexts/Calendar/Shared/domain/Users/UserId';
import { UuidMother } from '../../../../Shared/domain/UuidMother';

export class UserIdMother {
  static create(value: string): UserId {
    return new UserId(value);
  }

  static creator() {
    return () => UserIdMother.random();
  }

  static random(): UserId {
    return this.create(UuidMother.random());
  }
}
