import s from "./ContactList.module.css";
import ContactListItem from "./ContactListItem";
import { v4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, filterContactsList } from "../../redux/contacts/contacts-actions";
import { getItems, getFilter } from "../../redux/contacts/contacts-selectors";

const ContactList = () => {

  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  let contacts = items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
  
  return <ul className={s.ul}>{items.map((item) => (
    <ContactListItem
      key={v4()}
      props={item}
      onDelete={() => dispatch(deleteContact(item.id))}
    />
  ))}</ul>;
};


export default ContactList;
