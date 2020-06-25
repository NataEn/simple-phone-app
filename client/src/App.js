import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SideBar from "./components/SideBar/SideBar";
import MyAccount from "./pages/MyAccount/MyAccount";
import MyOrders from "./pages/MyOrders/MyOrders";
import MyPrices from "./pages/MyPrices/MyPrices";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import "./App.css";

const getContacts = () => {
  // const fetchUrl = "http://localhost:3030/contacts";
  const fetchUrl = "https://jsonplaceholder.typicode.com/users";
  const data = fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return data;
};

function App() {
  const [contactsList, setContactsList] = useState([]);

  const fetchPeople = async () => {
    const contacts = await getContacts();
    console.log("contacts: ", contacts);
    setContactsList([...contacts]);
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
          <Route path="/contact/:id" component={Contact} />
          <Route exact path="/">
            <Main contactList={contactsList} />
          </Route>
        </Switch>
        <footer>footer</footer>
      </Router>
    </div>
  );
}

export default App;
