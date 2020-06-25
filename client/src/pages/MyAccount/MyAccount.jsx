import React, { useState, useEffect } from "react";
import "./MyAccount.css";

const MyAccount = () => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return <div>My Account Page</div>;
};
export default MyAccount;
