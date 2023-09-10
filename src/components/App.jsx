import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { SearchFilter } from './SearchFilter';
import { ContactList } from './ContactList';
import css from './App.module.css';

export function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const savedContacts = localStorage.getItem('contacts');

  const [contacts, setContacts] = useState(() =>
    savedContacts ? JSON.parse(savedContacts) : initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (existingContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={css.box}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h1>Contacts</h1>
      <SearchFilter filter={filter} onChange={handleFilterChange} />
      <ContactList
        filteredContacts={filteredContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
}
