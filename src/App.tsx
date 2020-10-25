import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "hoc/layout/Layout";
import Home from "./components/Home/Home";
import Activities from "components/Activities/Activities";
import Events from "components/Events/Events";
import History from "components/History/History";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/activities" component={Activities} />
          <Route path="/events" component={Events} />
          <Route path="/history" component={History} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
