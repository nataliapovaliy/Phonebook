import PropTypes from 'prop-types';
import css from '../Contact/Contact.module.css';

export function Contact ({ name, number, id, deleteContact }) {
    return (
            <div className={css.contact}>
                <p>{name}: {number}</p>
                <button className={css.btn} type="button" onClick={() => deleteContact(id)}>Delete</button>
            </div>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};