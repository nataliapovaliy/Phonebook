import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { registerUser } from '../../services/auth-services/auth-services';
import { Input, Stack, Button, Box, Heading } from '@chakra-ui/react';
import { useDispatch } from "react-redux";

export const RegisterForm = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'userName') setUserName(value);
        else if (name === 'email') setEmail(value);
        else setPassword(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        
        dispatch(
            registerUser({
            name: userName,
            email,
            password,
            })
        ).unwrap()
            .then(() => {
                Notify.success('Create user succesfully');
                navigate('/login');
            }

            ).catch(error => {Notify.failure(`${error}`)})

        // 
        
    }

    return (
        <Box width="400px" >
            <Heading m={[3, 4]} fontSize={22}>Register on Phonebook</Heading>
            <form  autoComplete="off">
            <Stack spacing={3} ml={4}  autoComplete="off">

                <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2' placeholder='Enter username'
                    onChange={handleChange} value={userName} 
                    type="text" name="userName"  />
                <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2' placeholder='Email'
                    onChange={handleChange} value={email} 
                    type="email" name="email" />
                <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2' placeholder='Password'
                    onChange={handleChange} value={password} 
                    type="password" name="password" />
            </Stack>

            <Button onClick={handleSubmit} colorScheme='teal' variant='solid' m={[3, 4]} type="submit">
                Register</Button >
            </form>
        </Box>
    );
}
