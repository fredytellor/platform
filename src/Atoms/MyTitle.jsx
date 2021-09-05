import React from "react";
import "../Styles/Atoms/MyTitle.css"

const MyTitle = (props) => {
    const { text, isEvents, isProgress, isHours } = props;
    return (<h1 className={isEvents ? "mytitle-h1-events" : isProgress ? "mytitle-h1-progress" : isHours ? "mytitle-h1-progress-hour" : "mytitle-h1"
    }> {text}</h1 >);
};

export default MyTitle;