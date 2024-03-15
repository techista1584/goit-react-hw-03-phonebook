import React, { Component } from 'react';
import Notiflix from 'notiflix';
import ContactList from './ContactList/ContactList';
import FormList from './FormList/FormList';
import Layout from './Layout/Layout';
import GlobalTitle from './Layout/Title';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  state = {
    contacts: JSON.parse(window.localStorage.getItem('contacts')) || [],
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

  render() {
    const { contacts } = this.state;
    return (
      <Layout>
        <GlobalTitle title="Phonebook" />
        <FormList onSubmit={this.addContact} />
        <GlobalTitle title="Contacts" />
        <ContactList contacts={contacts} onDelete={this.deleteContact} />
      </Layout>
    );
  }
}

export default App;
