import React from "react";

import "../Styles/Atoms/LearningIcon.css";

const LearningIcon = (props) => {
    const { imgSrc } = props;
    return (<img className="learningicon-img" src={imgSrc} alt="learning icon"/>);
}

export default LearningIcon;

