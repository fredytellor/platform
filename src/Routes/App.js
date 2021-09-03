import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../Templates/Layout";
import Dashboard from "../Templates/Dashboard";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Dashboard/>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
