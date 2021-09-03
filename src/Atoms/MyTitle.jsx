import React from "react";
import "../Styles/Atoms/MyTitle.css"

const MyTitle = (props) => {
    const {text}=props;
    return (<h1 className="mytitle-h1">{text}</h1>);
};

export default MyTitle;