import {AppointmentCreator} from '../../../../../src/Contexts/Calendar/Appointments/application/Creator/AppointmentCreator';
import {AppointmentMother} from '../domain/AppointmentMother';
import {AppointmentRepositoryMock} from '../__mocks__/AppointmentRepositoryMock';
import {CreateAppointmentCommandMother} from './CreateAppointmentCommandMother';
import EventBusMock from '../__mocks__/EventBusMock';
import {
  CreateAppointmentCommandHandler
} from '../../../../../src/Contexts/Calendar/Appointments/application/Creator/CreateAppointmentCommandHandler';

let repository: AppointmentRepositoryMock;
let handler: CreateAppointmentCommandHandler;

const eventBus = new EventBusMock();

beforeEach(() => {
  repository = new AppointmentRepositoryMock();
  const creator = new AppointmentCreator(repository, eventBus);
  handler = new CreateAppointmentCommandHandler(creator);
});

describe('AppointmentCreator', () => {
  it('should create a valid event', async () => {
    const command = CreateAppointmentCommandMother.random();
    await handler.handle(command);

    const event = AppointmentMother.fromCommand(command);
    repository.assertLastSavedEventIs(event);
  });
});
