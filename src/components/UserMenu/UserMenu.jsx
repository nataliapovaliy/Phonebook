import { Button, Box, Heading, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/auth/auth-services';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <>
            <Box width="400px">
                <Heading m={[3, 4]} fontSize={22}>User Menu</Heading>
                <Text m={[3, 4]} fontSize={16} > Wellcome, {user.name}!  </Text>
                <Text m={[3, 4]} fontSize={16} > Email: {user.email} </Text>
                <Button colorScheme='teal' variant='outline' size='sm' ml={4} type="submit"
                onClick={() => dispatch(logOutUser())}>Log Out</Button >
            </Box>
        </>
    )

}