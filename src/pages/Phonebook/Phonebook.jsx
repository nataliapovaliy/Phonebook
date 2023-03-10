import ContactForm from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectItems, selectIsLoading, selectError, selectFilter } from '../../redux/contacts/selectorContacts';

const Phonebook = () => {
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
            <>
                <ContactForm />
                <Filter />
                {isLoading && <p>Loading contacts...</p>}
                {error && <p>{error}</p>}
                <ContactList contacts={checkContact()}/>
            </>
    )
}

export default Phonebook