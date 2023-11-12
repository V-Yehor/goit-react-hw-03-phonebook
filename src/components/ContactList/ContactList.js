import { List, ListItem, ListItemBtn } from './ContactList.styled';

export const ContactList = ({ onDelete, contactInfo }) => {
  return (
    <>
      {contactInfo.length > 0 && (
        <List>
          {contactInfo.map(contact => (
            <ListItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <ListItemBtn onClick={() => onDelete(contact.id)}>
                Delete
              </ListItemBtn>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
