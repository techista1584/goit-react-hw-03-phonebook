import React from 'react';
import PropTypes from 'prop-types';
import { ListWrap, List, Paragraf } from './ContactList.styled';
import { Button } from 'components/FormList/FormList.styled';
import { UserDeleteOutlined } from '@ant-design/icons';

const ContactList = ({ contacts, onDelete }) => {
  return(
    <ListWrap>
    {contacts.map(({ id, name, number }) => (
      <List key={id}>
        <Paragraf>{name}</Paragraf>
        <Paragraf>{number}</Paragraf>
        <Button type="button" onClick={() => onDelete(id)}>
        <UserDeleteOutlined />
        </Button>
      </List>
    ))}
  </ListWrap>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
