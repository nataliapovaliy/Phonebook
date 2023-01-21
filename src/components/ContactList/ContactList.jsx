import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';

export function ContactList ({ contacts, deleteContact }) {
    return (
        <ul className={css.list}>
            {contacts.map(({id, name, number}) => {
                return (
                    <li key={id}>
                        <Contact
                            name={name}
                            number={number}
                            id={id}
                            deleteContact={deleteContact}
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