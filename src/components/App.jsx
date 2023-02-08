import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectItems, selectIsLoading, selectError, selectFilter } from '../redux/selectorContacts';


const App = () => {
  const contacts  = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const checkContact = () => {
    if (!filter) return contacts;
      const checkFilter = filter?.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase().includes(checkFilter));
    }

    return (
      <div className={css.phonebook}>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm />

        <h2 className={css.title}>Contacts</h2>

        <Filter />

        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}

        <ContactList contacts={checkContact()}/>
        
      </div>
    )
}

export default App
