import {Command} from '../../../../Shared/domain/Command';

type Params = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export class CreateUserCommand extends Command {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor({id, name, email, password}: Params) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
