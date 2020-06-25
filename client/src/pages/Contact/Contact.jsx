import "./Contact.css";
import React from "react";
import { useParams } from "react-router-dom";
import ContactIcon from "@material-ui/icons/AccountCircle";

const Contact = (props) => {
  const { id } = useParams();
  let personId = Number(id);
  const contact = props.contactsList[personId];
  return (
    <>
      <ContactIcon />
      <span>{contact.name}</span>
      <span>{contact.email}</span>
    </>
  );
};
export default Contact;
