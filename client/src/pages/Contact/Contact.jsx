import "./Contact.css";
import React from "react";
import { useParams } from "react-router-dom";
import ContactIcon from "@material-ui/icons/AccountCircle";

const Contact = (props) => {
  let { id } = useParams();

  return (
    <div className="contact_page_div">
      <ContactIcon />
      <h3> contact with ID: {id}</h3>
    </div>
  );
};
export default Contact;
