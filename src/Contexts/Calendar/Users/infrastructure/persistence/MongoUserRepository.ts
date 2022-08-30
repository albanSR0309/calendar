import {Nullable} from '../../../../Shared/domain/Nullable';
import {MongoRepository} from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {UserId} from '../../../Shared/domain/Users/UserId';
import {User} from '../../domain/User';
import {UserRepository} from '../../domain/UserRepository';
import {UserEmail} from '../../domain/UserEmail';

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {
  public save(user: User): Promise<void> {
    return this.persist(user.id.value, user);
  }

  public async find(id: UserId): Promise<Nullable<User>> {
    const collection = await this.collection();
    const document = await collection.findOne({_id: id.value});

    return document ? User.fromPrimitives({...document, id: document._id}) : null;
  }

  public async findSatisfying(email: UserEmail): Promise<Nullable<User>> {
    const collection = await this.collection();
    const document = await collection.findOne({email: email.value});

    return document ? User.fromPrimitives({...document, id: document._id}) : null;

  }

  protected moduleName(): string {
    return 'users';
  }
}
