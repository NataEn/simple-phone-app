import React, { useState, useEffect } from "react";

const Main = () => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return <div></div>;
};
export default Main;
