import React, { useState, useEffect } from "react";
import ContactItem from "./ContactItem/ContactItem";

const Main = (props) => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return (
    <div>
      <h3>My Contacts</h3>

      {props.contactsList.length ? (
        <table>
          <tr>
            <th>Name</th> <th>email</th>
          </tr>
          {props.contactsList.map((contact, i) => (
            <tr>
              <ContactItem contact={contact} />
            </tr>
          ))}{" "}
        </table>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};
export default Main;
