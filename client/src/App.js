import React, { useEffect, useState } from "react";
import Main from "./components/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Main data={123} />
          </Route>
        </Switch>
        <footer>footer</footer>
      </Router>
    </div>
  );
}

export default App;
