import "./ContactItem.css";
import React from "react";
import ContactIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const Contact = (props) => {
  return (
    <>
      <ContactIcon />
      <Link to={`contact/${props.contact.id}`}>
        <td>{props.contact.name}</td>
      </Link>
      <td>{props.contact.email}</td>
    </>
  );
};
export default Contact;
