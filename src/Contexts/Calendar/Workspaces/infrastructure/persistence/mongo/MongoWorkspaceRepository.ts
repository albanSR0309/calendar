import {MongoRepository} from '../../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {WorkspaceRepository} from '../../../domain/WorkspaceRepository';
import {Workspace} from '../../../domain/Workspace';
import {UserId} from '../../../../Shared/domain/Users/UserId';
import {Nullable} from '../../../../../Shared/domain/Nullable';

export class MongoWorkspaceRepository extends MongoRepository<Workspace> implements WorkspaceRepository {
  public save(workspace: Workspace): Promise<void> {
    return this.persist(workspace.id.value, workspace);
  }

  public async search(userId: UserId): Promise<Nullable<Array<Workspace>>> {
    const collection = await this.collection();
    const documents = await collection.find({userId: userId.value}).toArray();

    return documents.length ? documents.map((document: any) => Workspace.fromPrimitives({
      ...document, id: document.workspace
    })) : null;
  }

  protected moduleName(): string {
    return 'workspaces';
  }
}
