import React from "react";
import Dashboard from "../Templates/Dashboard";
import Events from "../Templates/Events";
import Activities from "../Templates/Activities";
import Progress from "../Templates/Progress";


const Home = () => {
    return (
        <>
            <Dashboard />
            <Events />
            <Activities />
            <Progress />
        </>
    );
};

export default Home;
