import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;

  return (
    <select name="contacts" id="contacts" onChange={onChange}>
      <option key="1" value="" selected="selected">
        No Contact Selected
      </option>
      {contacts.map((contact, index) => {
        index += 2;

        return (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
