import React from "react";
import MyTitle from "../Atoms/MyTitle";
import Divider from "../Atoms/Divider";

import "../Styles/Molecules/ActivityHeader.css";
import EventsSlideButton from "../Atoms/EventsSlideButton";

const ActivityHeader = (props) => {
    const {title}=props;
    return (
        <div className="activityheader-div">
            <MyTitle text={title}/>
            <Divider isActivity={true}/>
            <EventsSlideButton isActivity={true}/>
        </div>
    );
};

export default ActivityHeader;