
import container from '../../../../../../src/apps/calendar/backend/dependency-injection';
import { AppointmentRepository } from '../../../../../../src/Contexts/Calendar/Appointments/domain/AppointmentRepository';
import { EnvironmentArranger } from '../../../../Shared/infrastructure/arranger/EnvironmentArranger';
import { AppointmentMother } from '../../domain/AppointmentMother';

const repository: AppointmentRepository = container.get('Calendar.appointments.AppointmentRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Calendar.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('AppointmentRepository',
  () => {
    describe('#save', () => {
      it('should save a event', async () => {
        const event = AppointmentMother.random();

        await repository.save(event);
      });
    });

    describe('#search', () => {
      it('should return an existing event', async () => {
        const expectedEvent = AppointmentMother.random();
        await repository.save(expectedEvent);

        const event = await repository.search(expectedEvent.id);

        expect(expectedEvent).toEqual(event);
      });

      it('should not return a non existing event', async () => {
        expect(await repository.search(AppointmentMother.random().id)).toBeFalsy();
      });
    });
  });
