import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const onContactChange = ({ target }) => {
    const value = target.value;

    props.setContact(value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={props.onTitleChange}
        value={props.title}
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        min={getTodayString()}
        onChange={props.onDateChange}
        value={props.date}
      />
      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        name="time"
        onChange={props.onTimeChange}
        value={props.time}
      />
      <ContactPicker contacts={props.contacts} onChange={onContactChange} />
      <input type="Submit" />
    </form>
  );
};
