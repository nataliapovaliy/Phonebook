import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { createContacts, delContact, filterSlice } from '../redux/slice';
import { fetchDelContact } from '../redux/operationsContacts';

const App = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const addContact = (data) => {
    const dublicate = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
    if (dublicate) { return alert(`${data.name} is already in contacts`); }
    data.id = nanoid();

    // dispatch(createContacts(data))
  }

  // const changeFilter = event => {
  //   dispatch(filterSlice(event.target.value))
  // }
  
  const deleteContact = (id) => {
    dispatch(fetchDelContact(fetchDelContact(id)));
  }
  
  const checkContact = () => {
    if (!filter) return contacts;
      const checkFilter = filter?.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase().includes(checkFilter));
    }

    return (
      <div className={css.phonebook}>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm
          addContact={addContact} />

        <h2 className={css.title}>Contacts</h2>

        {/* <Filter
          value={filter}
          changeFilter={changeFilter} /> */}

        <ContactList
          contacts={checkContact()}
          deleteContact={deleteContact} />
      </div>
    )
}

export default App