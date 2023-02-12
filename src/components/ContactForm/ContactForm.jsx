import css from '../ContactForm/ContactForm.module.css';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operationsContacts';
import { selectItems } from '../../redux/contacts/selectorContacts';
import { Input, Stack, Button, Box, Heading } from '@chakra-ui/react';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts  = useSelector (selectItems);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') setName(value);
        else setNumber(value);
    }

    const handleInput = (event) => {
        console.log('event', event.target[0].value);
        event.preventDefault();
        const dublicate = contacts.find(contact => contact.name.toLowerCase() === event.target[0].value.toLowerCase());
        if (dublicate) { return alert(`${event.name} is already in contacts`); }

        dispatch(addContact({
            name,
            number,}));
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
            
        <Box width="400px">
            <Stack spacing={3} ml={4} autoComplete="off">

                <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2'
                    placeholder='Enter Name'
                    onChange={handleChange} value={name} type="text" name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            
                <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2'
                    placeholder='Enter phone'
                    onChange={handleChange} value={number} type="tel" name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Stack>

            <Button colorScheme='teal' variant='solid' m={[3, 4]} type="submit"
                onSubmit={handleInput}>Add Contacts</Button >
        
        </Box>

            // <form className={css.form} onSubmit={handleInput}>
            //     <label className={css.label}>
            //         Name
            //         <input
            //             className={css.input}
            //             type="text"
            //             name="name"
            //             value={name}
            //             onChange={handleChange}
            //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //             required
            //         />
            //     </label>
            //     <label className={css.label}>
            //         Number
            //         <input
            //             className={css.input}
            //             type="tel"
            //             name="number"
            //             value={number}
            //             onChange={handleChange}
            //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            //             required
            //         />
            //     </label>
            //     <button className={css.btn} type="submit">Add Contacts</button>
            // </form>
        )
}

export default ContactForm