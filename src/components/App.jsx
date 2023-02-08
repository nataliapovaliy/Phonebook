import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../redux/selectorContacts';


const App = () => {

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

    return (
      <div className={css.phonebook}>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm />

        <h2 className={css.title}>Contacts</h2>

        <Filter />

        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        <ContactList />
      </div>
    )
}

export default App