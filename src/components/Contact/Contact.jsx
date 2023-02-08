import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from '../Contact/Contact.module.css';
import { delContact } from '../../redux/operationsContacts';

export function Contact({ name, number, id }) {
    const dispatch = useDispatch();
    // const deleteContact = delContact();

    return (
            <div className={css.contact}>
                <p>{name}: {number}</p>
                <button className={css.btn} type="button" onClick={() => dispatch(delContact(id))}>Delete</button>
            </div>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    // deleteContact: PropTypes.func.isRequired,
};