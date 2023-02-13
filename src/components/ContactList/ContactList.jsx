import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';
import { fetchContacts } from '../../redux/contacts/operationsContacts';
import { selectToken } from 'redux/auth/selectorAuth';


export function ContactList({ contacts }) {
    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    useEffect(() => {
    token &&
    dispatch(fetchContacts());
}, [dispatch, token]);

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
        number: PropTypes.string.isRequired,
        })
    ),
};