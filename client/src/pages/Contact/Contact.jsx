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
      <div className="contact_page_div">
        <ContactIcon />
        <h3>{contact.name}</h3>
        <span>email: {contact.email}</span>
      </div>
    </>
  );
};
export default Contact;
