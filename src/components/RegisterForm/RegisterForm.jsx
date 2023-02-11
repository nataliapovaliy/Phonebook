import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { registerUser } from '../../services/auth-services/auth-services';

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
        <form   autoComplete="off">
        <label >
            Username
                <input handleChange={handleChange} value={userName} type="text" name="name" />
        </label>
        <label >
            Email
            <input handleChange={handleChange} value={email} type="email" name="email" />
        </label>
        <label >
            Password
                <input handleChange={handleChange} value={password} type="password" name="password" />
        </label>
        <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
    );
}