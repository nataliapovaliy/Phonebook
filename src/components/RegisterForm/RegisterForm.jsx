import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { registerUser } from '../../services/auth-services/auth-services';
import { Input, Stack, Button, Heading, Flex, Box, Spacer,ButtonGroup } from '@chakra-ui/react';

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
        <Stack spacing={3}  autoComplete="off">

            <Input placeholder='Enter the username you want' onChange={handleChange} value={userName} type="text" name="name" />
            <Input placeholder='Email' onChange={handleChange} value={email} type="email" name="email" />
            <Input placeholder='Password' onChange={handleChange} value={password} type="password" name="password" />

        {/* <button type="submit" onClick={handleSubmit}>Register</button> */}
        </Stack>
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