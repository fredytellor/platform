import React from "react";
import "../Styles/Atoms/Titles.css"

const Titles = (props) => {
    const {text}=props;
    return (<h1>{text}</h1>);
};

export default Titles;