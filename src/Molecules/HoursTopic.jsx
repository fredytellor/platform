import React from "react";
import ColorBall from "../Atoms/ColorBall";
import Subtitle from "../Atoms/Subtitle";

import "../Styles/Molecules/HoursTopic.css";

const HoursTopic = (props) => {
    const { isComplete } = props;
    return (
        <div className="hourstopic-div">
            <ColorBall isComplete={isComplete} />
            <Subtitle contentText={isComplete ? "Completed" : "Left to go"} isProgress={true} />
        </div>
    );
};

export default HoursTopic;
