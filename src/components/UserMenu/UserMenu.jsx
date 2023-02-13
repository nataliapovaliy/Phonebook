import { Button, Box, Heading, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../services/auth-services/auth-services';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <>
            <Box width="400px">
                <Heading m={[3, 4]} fontSize={22}>User Menu</Heading>
                <Text m={[3, 4]} fontSize={16} > Wellcome, {user.name}  </Text>
                <Text m={[3, 4]} fontSize={16} > Email:  </Text>
                <Button colorScheme='teal' variant='outline' size='sm' ml={4} type="submit"
                onClick={() => dispatch(logOutUser())}>Log Out</Button >
            </Box>
            {/* <div>
                <p>mango@mail.com</p>
                <button>Log Out</button>
            </div> */}
        </>
    )

}