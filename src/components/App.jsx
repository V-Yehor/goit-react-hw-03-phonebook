import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

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

  addContact = newConact => {
    const hasName = this.state.contacts.some(
      contact => contact.name === newConact.name
    );
    if (hasName) {
      alert(`${newConact.name} is already in contacts.`);
      return;
    } else {
      const contact = { ...newConact, id: nanoid() };
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, contact] };
      });
    }
  };

  setFilter = newSearch => {
    this.setState(prevState => {
      return { filter: newSearch };
    });
  };

  deleteContact = ContactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== ContactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact => {
      const hasFilteredName = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());

      return hasFilteredName;
    });

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          onSetFilter={this.setFilter}
          currentFilter={this.state.filter}
        />
        <ContactList
          contactInfo={visibleContacts}
          onDelete={this.deleteContact}
        />

        <GlobalStyle />
      </div>
    );
  }
}
