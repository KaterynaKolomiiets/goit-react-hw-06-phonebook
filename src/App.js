import {useEffect } from "react";
import { v4 } from "uuid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { useSelector, useDispatch } from "react-redux";
import { addContact, importContacts } from "./redux/contacts/contacts-actions";
import { getItems } from "./redux/contacts/contacts-selectors";

const App = () => {
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      dispatch(importContacts(JSON.parse(localStorage.getItem("contacts"))));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(items));
  }, [items]);

  const formSubmitHandler = ({ name, number }) => {
    if (items.some((item) => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is alerady in your contacts`);
      return;
    }
    dispatch(addContact({ id: v4(), name, number }));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
