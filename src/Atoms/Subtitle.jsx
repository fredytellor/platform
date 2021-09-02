import React from "react";

import "../Styles/Atoms/Subtitle.css";

const Subtitle = (props) => {
    const { contentText } = props;
    return (
        <div className={contentText === "Fredy Tello" ? "subtitle-div-name" : "subtitle-div"}>
            <span className="span-subtitle">{contentText}</span>
        </div>
    );
};

export default Subtitle;