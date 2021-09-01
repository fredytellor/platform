import React from "react";

import "../Styles/Atoms/Subtitle.css";

const Subtitle = (props) => {
    const { contentText } = props;
    return (
        <div className="subtitle-div">
            <span className="span-subtitle">{contentText}</span>
        </div>
    );
};

export default Subtitle;