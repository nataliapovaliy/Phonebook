import { NavLink } from "react-router-dom";
import css from '../Navigation/Navigation.module.css';

export const Navigation = () => {
    return (
        <nav>
            <li><NavLink className={css.link} to='/'>Home</NavLink></li>
            <li><NavLink className={css.link} to='phonebook'>Phonebook</NavLink></li>

            <li><NavLink className={css.link} to='register'>Registred</NavLink></li>
            <li><NavLink className={css.link} to='login'>Login</NavLink></li>

            <li><NavLink className={css.link} to='usermenu'>Profile</NavLink></li>
        </nav>
    )
}