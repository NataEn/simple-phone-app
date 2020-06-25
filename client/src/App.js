import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SideBar from "./components/SideBar/SideBar";
import MyAccount from "./pages/MyAccount/MyAccount";
import MyOrders from "./pages/MyOrders/MyOrders";
import MyPrices from "./pages/MyPrices/MyPrices";
import FAQ from "./pages/FAQ/FAQ";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    // const people = await getPeople();
    setPeople([1, 2, 3, 4]);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div className="App">
      <Router>
        <header>header</header>
        <SideBar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/myOrders">
            <MyOrders />
          </Route>
          <Route exact path="/myPrices">
            <MyPrices />
          </Route>
          <Route exact path="/updateDetails">
            <MyAccount />
          </Route>
          <Route exact path="/changePassword">
            <MyAccount />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/">
            <Main data={123} />
          </Route>
        </Switch>
        <footer>footer</footer>
      </Router>
    </div>
  );
}

export default App;
