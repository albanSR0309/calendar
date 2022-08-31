import React, {useEffect} from 'react';
import {Input} from "../../shared/components/Input";
import {useForm} from "../../shared/hooks/UserForm";
import {v4 as uuidv4} from 'uuid';
import {useWorkspaces} from "../../Workspaces/useWorkspaces";
import {Button} from "../../shared/components/Button";

type Props = {
  viewModal: any
  selectedDay: any
  selectedEvent: any
  setAppointments: any
  removeAppointment: any
};

export const AppointmentCreatorModal = ({
                                          viewModal,
                                          selectedDay,
                                          selectedEvent,
                                          setAppointments,
                                          removeAppointment
                                        }: Props): JSX.Element => {

  const {selectedWorkspace}: any = useWorkspaces()

  const initialInputs = {
    id: uuidv4(),
    name: '',
    description: '',
    workspaceId: selectedWorkspace,
    startAt: selectedEvent ? selectedEvent.startAt : selectedDay.set('hour', 8).format('YYYY-MM-DDTHH:mm'),
    endAt: selectedEvent ? selectedEvent.endAt : selectedDay.set('hour', 8).format('YYYY-MM-DDTHH:mm'),
  }

  const {inputs, setInputs, handleInputChange} = useForm(initialInputs)

  useEffect(() => {
    if (selectedEvent) setInputs(selectedEvent)
  }, [selectedEvent, setInputs])

  useEffect(() => {
    setInputs({
      ...inputs,
      workspaceId: selectedWorkspace
    })
  }, [selectedWorkspace, setInputs, inputs]);


  useEffect(() => {
    setInputs({
      ...selectedEvent ? selectedEvent : inputs,
      startAt: inputs.startAt,
      endAt: inputs.startAt
    })
  }, [inputs.startAt, selectedEvent, setInputs, inputs]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAppointments(inputs)
    viewModal(false)
  }

  const handlerRemoveAppointment = () => {
    removeAppointment(inputs.id)
    viewModal(false)
  }

  return (
    <div className="modal">
      <div className="modal-close" onClick={() => viewModal(false)}><Button styles="button-inverted" ariaLabel="close" /></div>
      <div className="modal-content container-md">
        <strong>{!selectedEvent ? 'New' : 'Edit'} Appointment.</strong>
        <div>Please {!selectedEvent ? 'enter' : 'edit'} your appointment data</div>
        <br/>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            label="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleInputChange}
          />
          <div className="inputs-group">
            <Input
              type="datetime-local"
              label="startAt"
              placeholder="Date"
              value={inputs.startAt}
              onChange={(e: any) => handleInputChange(e)}
            />
            <Input
              type="datetime-local"
              label="endAt"
              placeholder="Date"
              value={inputs.endAt}
              min={inputs.startAt}
              onChange={(e: any) => handleInputChange(e)}
            />
          </div>

          <textarea
            className="input"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={(e) => handleInputChange(e)}
            rows={3}/>
          <button type="submit" className="button button-primary">Save Appointment</button>
        </form>
        <small>You want to Delete this appointment? <span className="text-pointer" onClick={() => handlerRemoveAppointment()}>Delete here</span></small>
      </div>
    </div>
  );
};
