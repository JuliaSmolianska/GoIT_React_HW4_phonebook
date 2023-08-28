import { AiFillDelete } from 'react-icons/ai';
import css from './App.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <button
            className={css.button_delete}
            onClick={() => deleteContact(contact.id)}
          >
            {' '}
            <AiFillDelete />
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
