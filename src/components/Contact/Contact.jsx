import PropTypes from 'prop-types';

export function Contact ({ name, number, id, deleteContact }) {
    return (
            <div>
                <p>{name}:{number}</p>
                <button type="button" onClick={deleteContact(id)}>Delete</button>
            </div>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};