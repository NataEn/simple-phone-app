import React, { useState, useEffect } from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return <div>my content</div>;
};
export default ChangePassword;
