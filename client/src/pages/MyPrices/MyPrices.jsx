import React, { useState, useEffect } from "react";
import "./MyPrices.css";

const MyPrices = () => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return <div>my prices Page</div>;
};
export default MyPrices;
