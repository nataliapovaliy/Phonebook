import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { registerUser } from '../../services/auth-services/auth-services';
import { Input, Stack, Button, Box, Heading } from '@chakra-ui/react';

export const RegisterForm = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleChange = ({ target }) => {
        const { name, value } = target
        if (name === 'email') setEmail(value)
        else if (name === 'userName') setUserName(value)
        else setPassword(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        registerUser({
            name: userName,
            email,
            password,
        }).then(() => {
            Notify.success('Create user succesfully');
            navigate('/login');
        })
            
            .catch((error) => Notify.failure(`${error.response.data.message}`));
    }

    return (
        <Box width="400px">
            <Heading m={[3, 4]} fontSize={22}>Register on Phonebook</Heading>
            <Stack spacing={3} ml={4} autoComplete="off">

            <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2' placeholder='Enter the username you want' onChange={handleChange} value={userName} type="text" name="name" />
            <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2' placeholder='Email' onChange={handleChange} value={email} type="email" name="email" />
            <Input boxShadow='base' rounded='md' border='1px' borderColor='#C1C1C1' p='2' placeholder='Password' onChange={handleChange} value={password} type="password" name="password" />
            </Stack>

            <Button colorScheme='teal' variant='solid' m={[3, 4]} type="submit"
                onClick={handleSubmit}>Register</Button >
        
        </Box>
        // maxwidthsize='md' p='2' fontSize={18} color='white' bg='teal' boxShadow='lg' rounded='md'
    );
}

//  return (
        //  <form   autoComplete="off">
        // <label >
        //     Username
        //         <input onChange={handleChange} value={userName} type="text" name="name" />
        // </label>
//         <label >
//             Email
//             <input onChange={handleChange} value={email} type="email" name="email" />
//         </label>
//         <label >
//             Password
//                 <input onChange={handleChange} value={password} type="password" name="password" />
//         </label>
//         <button type="submit" onClick={handleSubmit}>Register</button>
//         </form>
//     );