import React, { useState, useEffect } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return <div>my content</div>;
};
export default FAQ;
