import React, { useState, useEffect } from "react";
import ContactItem from "./ContactItem/ContactItem";
const sample = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const Main = () => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return (
    <div>
      Main page
      <ContactItem id={sample.id} name={sample.name} />
    </div>
  );
};
export default Main;
