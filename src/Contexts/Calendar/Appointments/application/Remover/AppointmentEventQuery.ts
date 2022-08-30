import { Query } from '../../../../Shared/domain/Query';

type Params = {
  id: string;
};

export class AppointmentEventQuery implements Query {
  id: string;

  constructor({id}: Params) {
    this.id = id;
  }
}
