import React, { Component } from 'react';
import Notiflix from 'notiflix';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import FormList from './FormList/FormList';
import Layout from './Layout/Layout';
import GlobalTitle from './Layout/Title';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = window.localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      window.localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (contact) => {
    const { contacts } = this.state;
    const isContactExist = contacts.some(({ name }) => name === contact.name);
    if (isContactExist) {
      Notiflix.Notify.failure(`${contact.name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  changeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContact();

    return (
      <Layout>
        <GlobalTitle title="Phonebook" />
        <FormList onSubmit={this.addContact} />

        <GlobalTitle title="Contacts" />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          onDelete={this.deleteContact}
          contacts={filteredContacts}
        />
      </Layout>
    );
  }
}

export default App;
