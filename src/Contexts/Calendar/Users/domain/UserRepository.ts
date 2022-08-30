import { Nullable } from '../../../Shared/domain/Nullable';
import {User} from './User';
import {UserEmail} from './UserEmail';
import {UserId} from '../../Shared/domain/Users/UserId';

export interface UserRepository {
  save(user: User): Promise<void>;
  find(id: UserId): Promise<Nullable<User>>;
  findSatisfying(email: UserEmail): Promise<Nullable<User>>;
}
