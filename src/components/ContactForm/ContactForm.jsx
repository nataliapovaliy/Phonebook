import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleInput = (event) => {
        event.preventDefault();
        this.props.addContact({ ...this.state });
        this.reset();
    }

    reset = () => {this.setState({ name: '', number: '' });}

    render() {
        return (
            <form className={css.form} onSubmit={this.handleInput}>
                <label className={css.label}>
                    Name
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className={css.label}>
                    Number
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={css.btn} type="submit">Add Contacts</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};