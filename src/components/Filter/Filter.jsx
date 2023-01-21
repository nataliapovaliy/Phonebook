import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export function Filter ({ value, changeFilter }) {
    return (
        <>
            <div>
                <label className={css.label}>
                    Find contacts by name
                    <input
                        className={css.input}
                        type="text"
                        name="contacts"
                        value={value}
                        onChange={changeFilter}
                        required
                    />
                </label>
        </div>
        </>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
};