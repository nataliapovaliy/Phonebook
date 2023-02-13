import { useState } from "react";
import { loginUser } from "../../services/auth-services/auth-services";
import { useDispatch } from "react-redux";
import { Input, Stack, Button, Box, Heading } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'email') setEmail(value);
        else setPassword(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            loginUser({ email, password }))
            .unwrap()
        .then( () => navigate('/phonebook'))
    }

    return (
        <Box width="400px">
            <Heading m={[3, 4]} fontSize={22}>Log In</Heading>
            <Stack spacing={3} ml={4} autoComplete="off">
            
                <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2'
                    placeholder='Email' onChange={handleChange}
                    value={email} type="email" name="email" />
                
                <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2'
                    placeholder='Password' onChange={handleChange}
                    value={password} type="password" name="password" />
            </Stack>

            <Button colorScheme='teal' variant='solid' m={[3, 4]} type="submit"
                onClick={handleSubmit}>Log In</Button >
        
        </Box>
    );
}

export default LoginForm