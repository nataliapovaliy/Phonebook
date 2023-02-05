import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

const CONTACTS_KEY = 'contacts';

const App = () => {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(
  //   [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]
  // )

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  useEffect(() => {
    const localData = localStorage.getItem(CONTACTS_KEY);
    if (localData) {
      setContacts(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (data) => {
    const dublicate = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
    if (dublicate) { return alert(`${data.name} is already in contacts`); }
    data.id = nanoid();

    setContacts(prev => [...prev, data]);
  }

    const changeFilter = event => {
      setFilter(event.currentTarget.value);
    }

    const deleteContact = (id) => {
      setContacts(prev => {
        prev.filter(contact => contact.id !== id);
      })
    }

    const checkContact = () => {
      const checkFilter = filter.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase().includes(checkFilter));
    }

    return (
      <div className={css.phonebook}>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm
          addContact={addContact} />

        <h2 className={css.title}>Contacts</h2>

        <Filter
          value={filter}
          changeFilter={changeFilter} />

        <ContactList
          contacts={checkContact()}
          deleteContact={deleteContact} />
      </div>
    )
}

export default App