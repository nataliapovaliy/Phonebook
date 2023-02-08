import { useDispatch, useSelector } from 'react-redux';
import css from '../Filter/Filter.module.css';
import { selectFilter } from '../../redux/selectorContacts';
import { filterSlice } from '../../redux/sliceFilter';

export function Filter() {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const changeFilter = event => {
        dispatch(filterSlice(event.target.value))
    }
    
    return (
        <>
            <div className={css.filter}>
                <label className={css.label}>
                    Find contacts by name
                    <input
                        className={css.input}
                        type="text"
                        name="contacts"
                        value={filter}
                        onChange={changeFilter}
                        required
                    />
                </label>
        </div>
        </>
    )
}
