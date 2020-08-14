import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { User, UserDetail, UserForm } from "./pages";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from "./config/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <h1>React Apollo-Client</h1>
          <Link to="/">/User</Link> <Link to="/create">/Create</Link>
          <hr />
          <Switch>
            <Route exact path="/" component={User} />
            <Route exact path="/create" component={UserForm} />
            <Route path="/:id" component={UserDetail} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
