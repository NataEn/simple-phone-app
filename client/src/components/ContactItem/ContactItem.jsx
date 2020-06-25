import "./ContactItem.css";
import React from "react";
import ContactIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const Contact = (props) => {
  return (
    <div>
      <Link to={`contact/:${props.id}`}>
        <ContactIcon />
        {props.name}
      </Link>
    </div>
  );
};
export default Contact;
