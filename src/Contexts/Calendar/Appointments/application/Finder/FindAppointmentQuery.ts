import { Query } from '../../../../Shared/domain/Query';

type Params = {
  id: string;
};

export class FindAppointmentQuery implements Query {
  id: string;

  constructor({id}: Params) {
    this.id = id;
  }
}
