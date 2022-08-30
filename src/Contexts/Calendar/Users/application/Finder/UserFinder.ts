import { UserRepository } from '../../domain/UserRepository';
import { UserNotExist } from '../../domain/UserNotExist';
import { FindUserResponse } from './FindUserResponse';
import {UserId} from '../../../Shared/domain/Users/UserId';

export class UserFinder {
  constructor(private repository: UserRepository) {}

  async run(id: string) {
    const userId = new UserId(id);
    const user = await this.repository.find(userId);

    if (!user) {
      throw new UserNotExist();
    }

    return new FindUserResponse(user);
  }
}
