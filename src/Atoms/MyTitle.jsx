import React from "react";
import "../Styles/Atoms/MyTitle.css"

const MyTitle = (props) => {
    const {text,isEvents}=props;
    return (<h1 className={isEvents?"mytitle-h1-events":"mytitle-h1"}>{text}</h1>);
};

export default MyTitle;