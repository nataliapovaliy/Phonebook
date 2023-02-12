import { Button, Box, Heading, Text } from '@chakra-ui/react';
import { logOutUser } from '../../services/auth-services/auth-services';
export const UserMenu = () => {
    return (
        <>
            <Box width="400px">
                <Heading m={[3, 4]} fontSize={22}>User Menu</Heading>
                <Text m={[3, 4]} fontSize={16} > Email:  </Text>
                <Button colorScheme='teal' variant='outline' size='sm' ml={4} type="submit"
                onClick={logOutUser}>Log Out</Button >
            </Box>
            {/* <div>
                <p>mango@mail.com</p>
                <button>Log Out</button>
            </div> */}
        </>
    )

}