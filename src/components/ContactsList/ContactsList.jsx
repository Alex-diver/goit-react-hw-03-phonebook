import {
  ItemStyled,
  NameStyled,
  NumberStyled,
  DeleteButton,
  ListStyled,
} from './ContactsList.styled';

export const ContactList = ({ contacts, onHandleDelete }) => {
  return (
    <ListStyled>
      {contacts.map(({ name, number, id }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onHandleDelete={() => onHandleDelete(id)}
        />
      ))}
    </ListStyled>
  );
};
export const Contact = ({ name, number, onHandleDelete }) => {
  return (
    <ItemStyled>
      <NameStyled>{name} :</NameStyled>
      <NumberStyled>{number}</NumberStyled>
      <DeleteButton type="button" onClick={onHandleDelete}>
        Delete
      </DeleteButton>
    </ItemStyled>
  );
};
