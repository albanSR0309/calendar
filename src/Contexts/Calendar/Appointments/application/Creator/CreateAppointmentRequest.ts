export type CreateAppointmentRequest = {
  id: string;
  userId: string;
  workspaceId: string;
  name: string;
  description: string;
  startAt: Date;
  endAt: Date;
};
