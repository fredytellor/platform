import React from "react";

import "../Styles/Molecules/CircularProgressBar.css";

const CircularProgressBar = () => {
    return (
        <div className="circularprogressbar-div">
            <div className="circular">
                <div className="inner"></div>
                <div className="number">40%</div>
                <div className="circle">
                    <div className="barleft">
                        <div className="progress"></div>
                    </div>
                    <div className="barright">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircularProgressBar;