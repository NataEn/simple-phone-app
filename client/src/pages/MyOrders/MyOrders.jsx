import React, { useState, useEffect } from "react";
import "./MyOrders.css";

const MyOrders = () => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return <div>my Orders page</div>;
};
export default MyOrders;
