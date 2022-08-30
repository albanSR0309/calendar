import {Workspace} from './Workspace';
import {UserId} from '../../Shared/domain/Users/UserId';
import {Nullable} from '../../../Shared/domain/Nullable';

export interface WorkspaceRepository {
  save(workspace: Workspace): Promise<void>;
  search(userId: UserId): Promise<Nullable<Array<Workspace>>>;
}
