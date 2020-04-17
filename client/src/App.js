import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateTrip from "./components/CreateTrip";
import MyTrips from "./components/MyTrips";
import EditTrip from "./components/EditTrip";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/create" component={CreateTrip} />
        <Route path="/mytrips" component={MyTrips} />
        <Route path="/edit/:id" component={EditTrip} />
        <Route path="/signin" component={Login} />
      </div>
    </Router>
  );
}

export default App;
