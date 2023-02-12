import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delContact } from '../../redux/contacts/operationsContacts';
import { Stack, Button, Box, Text } from '@chakra-ui/react';

export function Contact({ name, number, id }) {
    const dispatch = useDispatch();

    return (
        <Box width="400px">
            <Stack spacing={4} direction='row' align='center'>
                <Text fontSize={16} textDecoration='none'> {name}: {number} </Text>
            <Button colorScheme='teal' variant='outline' size='xs' m={[3, 4]} type="submit"
                onClick={() => dispatch(delContact(id))}>Delete</Button >
            </Stack>
            
        </Box>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,

};