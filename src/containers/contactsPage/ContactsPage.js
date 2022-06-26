import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const contacts = props.contacts;
  const addContact = props.addContact;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    if (!checkForDuplicates()) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }

    console.log(contacts);
  };

  const checkForDuplicates = () => {
    const findDuplicate = contacts.find((contact) => contact.name === name);

    return findDuplicate ? true : false;
  };

  const onNameChange = ({ target }) => {
    setName(target.value);
  };
  const onPhoneChange = ({ target }) => {
    setPhone(target.value);
  };
  const onEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          handleSubmit={handleSubmit}
          onNameChange={onNameChange}
          onPhoneChange={onPhoneChange}
          onEmailChange={onEmailChange}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contacts} />
      </section>
    </div>
  );
};
