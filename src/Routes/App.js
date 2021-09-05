import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../Templates/Layout";
import Dashboard from "../Templates/Dashboard";
import Events from "../Templates/Events";
import Activities from "../Templates/Activities";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Dashboard />
          <Events />
          <Activities />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
