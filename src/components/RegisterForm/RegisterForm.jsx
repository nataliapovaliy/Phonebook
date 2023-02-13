import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { registerUser } from '../../redux/auth/auth-services';
import { Input, Stack, Button, Box, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { selectErrorAuth } from "../../redux/auth/selectorAuth"

export const RegisterForm = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errorAuth = useSelector(selectErrorAuth);

    const dispatch = useDispatch();
    // const navigate = useNavigate();

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
            }),
            errorAuth ? Notify.failure(`${errorAuth}`) : Notify.success('Create user succesfully')
        )


        // dispatch(
        //     registerUser({
        //     name: userName,
        //     email,
        //     password,
        //     })
        // ).unwrap()
        //     .then(() => {
        //     errorAuth ? Notify.failure(`${errorAuth}`) : Notify.success('Create user succesfully')
        //     })
        
            // Працювало але зауваження
            // .then(() => {
            //     Notify.success('Create user succesfully');
            //     navigate('/login');
            // }
            // ).catch(error => {Notify.failure(`${error}`)})
    }

    return (
        <Box width="400px" >
            <Heading m={[3, 4]} fontSize={22}>Register on Phonebook</Heading>
            <form  autoComplete="off">
            <Stack spacing={3} ml={4}  autoComplete="off">

                <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2'
                    placeholder='Enter your Name'
                    onChange={handleChange} value={userName} 
                    type="text" name="userName" />
                    
                <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2'
                    placeholder='Email: example@gmail.com'
                    onChange={handleChange} value={email} 
                    type="email" name="email" />
                    
                <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2'
                    placeholder='Password: min 8 simbol'
                    onChange={handleChange} value={password} 
                    type="password" name="password" />
            </Stack>

            <Button onClick={handleSubmit} colorScheme='teal' variant='solid' m={[3, 4]} type="submit">
                Register</Button >
            </form>
        </Box>
    );
}
