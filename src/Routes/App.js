import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../Templates/Layout";
import Home from "../Pages/Home";
import NotFound from "../Atoms/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
