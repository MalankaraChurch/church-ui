import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "hoc/layout/Layout";
import Home from "./components/home/Home";
import Activities from "components/activities/Activities";
import Events from "components/events/Events";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/activities" component={Activities} />
          <Route path="/events" component={Events} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
