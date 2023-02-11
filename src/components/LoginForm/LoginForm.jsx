import { useState } from "react";
// import { loginUser } from '../../services/auth-services';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { authThunk } from "redux/auth/thunk";
import { useDispatch } from "react-redux";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'email') setEmail(value);
        else setPassword(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(authThunk({email,password}))
       
    }

    return (
        <form   autoComplete="off">
            <label name='email address' >
                Email
                <input onChange={handleChange} value={email} type="email" name="email" />
            </label>
            <label name='password'>
                Password
                <input onChange={handleChange} value={password} type="password" name="password" />
            </label>
        <button type="submit" onClick={handleSubmit}>Log In</button>
        </form>
    );
}

export default LoginForm