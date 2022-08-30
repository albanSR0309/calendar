import { UuidMother } from '../../../../Shared/domain/UuidMother';
import {WorkspaceId} from '../../../../../../src/Contexts/Calendar/Shared/domain/Workspaces/WorkspaceId';

export class WorkspaceIdMother {
  static create(value: string): WorkspaceId {
    return new WorkspaceId(value);
  }

  static creator() {
    return () => WorkspaceIdMother.random();
  }

  static random(): WorkspaceId {
    return this.create(UuidMother.random());
  }
}
