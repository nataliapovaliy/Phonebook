import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import {Filter} from './Filter/Filter';
import css from './App.module.css';

const CONTACTS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const localData = localStorage.getItem(CONTACTS_KEY);
    if (localData) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = (data) => {
    const { contacts } = this.state;
    const dublicate = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (dublicate) { return alert(`${data.name} is already in contacts`); }
    data.id = nanoid();

    this.setState((prevState) => {
      return ({ contacts: [...prevState.contacts, data], });
    })
  }

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  }
  
  deleteContact = (id) => {
    this.setState((prevState) => {
      return ({contacts: prevState.contacts.filter(contact => contact.id !== id)})
    })
  }

  checkContact = () => {
    const { filter, contacts } = this.state;
    const checkFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(checkFilter));
  }
  
  render() {
    const { filter } = this.state;
    return (
      <div className={css.phonebook}>
        <h1 className={css.title}>Phonebook</h1>
        
        <ContactForm
          addContact={this.addContact} />
        
        <h2 className={css.title}>Contacts</h2>
        
        <Filter
          value={filter}
          changeFilter={this.changeFilter} />
        
        <ContactList
          contacts={this.checkContact()}
          deleteContact={this.deleteContact} />
      </div>
    )
  }
};
