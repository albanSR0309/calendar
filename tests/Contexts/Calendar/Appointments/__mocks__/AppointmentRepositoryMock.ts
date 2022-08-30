import { AppointmentRepository } from '../../../../../src/Contexts/Calendar/Appointments/domain/AppointmentRepository';
import { Appointment } from '../../../../../src/Contexts/Calendar/Appointments/domain/Appointment';
import { AppointmentId } from '../../../../../src/Contexts/Calendar/Shared/domain/Appointments/AppointmentId';
import { Nullable } from '../../../../../src/Contexts/Shared/domain/Nullable';
import {UserId} from '../../../../../src/Contexts/Calendar/Shared/domain/Users/UserId';

export class AppointmentRepositoryMock implements AppointmentRepository {
  private mockSave = jest.fn();
  private mockSearch = jest.fn();
  private mockFindSatisfying = jest.fn();
  private mockRemove = jest.fn();

  async save(event: Appointment): Promise<void> {
    this.mockSave(event);
  }

  assertLastSavedEventIs(expected: Appointment): void {
    const mock = this.mockSave.mock;
    const lastSavedEvent = mock.calls[mock.calls.length - 1][0] as Appointment;
    expect(lastSavedEvent).toBeInstanceOf(Appointment);
    expect(lastSavedEvent.toPrimitives()).toEqual(expected.toPrimitives());
  }

  async search(id: AppointmentId): Promise<Nullable<Appointment>> {
    return this.mockSearch(id);
  }

  async findSatisfying(userId: UserId): Promise<Nullable<Array<Appointment>>> {
    return this.mockFindSatisfying(userId);
  }

  async remove(id: AppointmentId): Promise<void> {
    return this.mockRemove(id);
  }

  whenSearchThenReturn(value: Nullable<Appointment>): void {
    this.mockSearch.mockReturnValue(value);
  }

  assertLastSearchedEventIs(expected: AppointmentId): void {
    expect(this.mockSearch).toHaveBeenCalledWith(expected);
  }
}
