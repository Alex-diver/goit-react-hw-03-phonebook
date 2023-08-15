import { nanoid } from 'nanoid';

import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';

import { TitleStyled, ContactsTitle, ConteinerStyled } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onFormSubmit = ({ name, number }) => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
    } else {
      const contactId = nanoid(3);

      this.setState({
        contacts: [
          ...this.state.contacts,
          {
            id: contactId,
            name: name,
            number: number,
          },
        ],
      });
    }
  };

  onSearch = event => {
    const searchName = event.target.value.toLowerCase();
    this.setState({ filter: searchName });
  };

  contactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    const displayedContacts = filter ? filteredContacts : contacts;
    return (
      <ConteinerStyled>
        <TitleStyled>Phonebook</TitleStyled>
        <ContactForm onSubmit={this.onFormSubmit} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={filter} onHandleSearch={this.onSearch} />
        <ContactList
          contacts={displayedContacts}
          onHandleDelete={this.contactDelete}
        />
        <GlobalStyle />
      </ConteinerStyled>
    );
  }
}
