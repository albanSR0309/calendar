import {Nullable} from '../../../../Shared/domain/Nullable';
import {MongoRepository} from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {AppointmentId} from '../../../Shared/domain/Appointments/AppointmentId';
import {Appointment} from '../../domain/Appointment';
import {AppointmentRepository} from '../../domain/AppointmentRepository';

export class MongoAppointmentRepository extends MongoRepository<Appointment> implements AppointmentRepository {
  public save(event: Appointment): Promise<void> {
    return this.persist(event.id.value, event);
  }

  public async search(id: AppointmentId): Promise<Nullable<Appointment>> {
    const collection = await this.collection();
    const document = await collection.findOne({_id: id.value});

    return document ? Appointment.fromPrimitives({...document, id: document._id}) : null;
  }

  public async findSatisfying(filters: any): Promise<Nullable<Array<Appointment>>> {
    const collection = await this.collection();

    const documents = await collection.find({
      workspaceId: filters.workspaceId,
      userId: filters.onlyMain ? filters.userId.value : undefined
    }).toArray();

    return documents.length ? documents.map((document: any) => Appointment.fromPrimitives({
      ...document, id: document._id
    })) : null;
  }

  public async remove(id: AppointmentId): Promise<void> {
    const collection = await this.collection();

    await collection.deleteOne({_id: id.value});
  }

  protected moduleName(): string {
    return 'appointments';
  }
}
