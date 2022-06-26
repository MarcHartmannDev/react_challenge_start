import React from "react";

export const ContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={props.onNameChange}
        value={props.name}
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        pattern="^0\d{3}\/?\d+$"
        onChange={props.onPhoneChange}
        value={props.phone}
      />
      <label htmlFor="email">Email Address:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={props.onEmailChange}
        value={props.email}
      />
      <input type="submit" />
    </form>
  );
};
