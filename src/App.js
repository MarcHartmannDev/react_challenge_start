import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { Alert } from "react-alert";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (newName, newPhone, newEmail) => {
    setContacts(() => [
      ...contacts,
      {
        name: newName,
        phoneNumber: newPhone,
        email: newEmail,
      },
    ]);
  };

  const addAppointment = (newTitle, newContact, newDate, newTime) => {
    setAppointments(() => [
      ...appointments,
      {
        title: newTitle,
        contact: newContact,
        date: newDate,
        time: newTime,
      },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts{" "}
        </NavLink>{" "}
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments{" "}
        </NavLink>{" "}
      </nav>{" "}
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />{" "}
          </Route>{" "}
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>{" "}
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            />
          </Route>{" "}
        </Switch>{" "}
      </main>{" "}
    </>
  );
}

export default App;
