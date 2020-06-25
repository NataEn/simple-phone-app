import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return <div>Login page</div>;
};
export default Login;
