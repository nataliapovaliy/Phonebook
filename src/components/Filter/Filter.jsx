import { useDispatch, useSelector } from 'react-redux';
import css from '../Filter/Filter.module.css';
import { selectFilter } from '../../redux/contacts/selectorContacts';
import { filterSlice } from '../../redux/contacts/sliceFilter';
import { Input, Stack, Button, Box, Heading } from '@chakra-ui/react';

export function Filter() {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const changeFilter = event => {
        dispatch(filterSlice(event.target.value))
    }
    
    return (
        <>
            <Box width="400px">
                <Heading m={[3, 4]} fontSize={22}>Contacts</Heading>
                <Stack spacing={3} ml={4} autoComplete="off">

                    <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2'
                        placeholder='Find contacts by name'
                        onChange={changeFilter} value={filter} type="text" name="contacts"
                        required />
                </Stack>

            </Box>

            {/* <div className={css.filter}>
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
        </div> */}
        </>
    )
}
