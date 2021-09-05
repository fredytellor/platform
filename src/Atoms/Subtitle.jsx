import React from "react";

import "../Styles/Atoms/Subtitle.css";

const Subtitle = (props) => {
    const { contentText,isProgress,isHours} = props;
    return (
        <div className={"subtitle-div"}>
            <span className={isProgress?"subtitle-span-progress":isHours?"subtitle-span-hours":"span-subtitle"}>{contentText}</span>
        </div>
    );
};

export default Subtitle;