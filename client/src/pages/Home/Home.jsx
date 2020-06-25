import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    setItem(2);
  }, []);
  return <div>my content</div>;
};
export default Home;
