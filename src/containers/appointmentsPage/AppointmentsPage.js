import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addAppointment = props.addAppointment;

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  const onTitleChange = ({ target }) => {
    setTitle(target.value);
  };
  const onDateChange = ({ target }) => {
    setDate(target.value);
  };
  const onTimeChange = ({ target }) => {
    setTime(target.value);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          onTitleChange={onTitleChange}
          contact={contact}
          setContact={setContact}
          date={date}
          onDateChange={onDateChange}
          time={time}
          onTimeChange={onTimeChange}
          handleSubmit={handleSubmit}
          contacts={props.contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={props.appointments} />
      </section>
    </div>
  );
};
