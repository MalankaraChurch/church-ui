import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "hoc/layout/layout";
import Home from "./components/home/home";
import Activities from "components/activities/activities";
import Events from "components/events/events";
import History from "components/history/history";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/activities" component={Activities} />
          <Route path="/events" component={Events} />
          <Route path="/history" component={History} />
          <Route path="/contact-us" component={History} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
