import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';
import { selectItems } from '../../redux/selectorContacts';
import { fetchContacts } from '../../redux/operationsContacts';


export function ContactList() {
    const dispatch = useDispatch();
    const contacts  = useSelector(selectItems);

useEffect (() => {
    dispatch(fetchContacts());
}, [dispatch]);

    return (
        <ul className={css.list}>
            {contacts.map(({id, name, number}) => {
                return (
                    <li key={id}>
                        <Contact
                            name={name}
                            number={number}
                            id={id}
                        />
                    </li>
                )}
            )}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        })
    ),
};