import React from "react";
import "../Styles/Atoms/LearningTitle.css"

const LearningTitle = (props) => {
    const {text}=props;
    return (<h1 className="learningtitle-h1">{text}</h1>);
};

export default LearningTitle;