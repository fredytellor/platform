import React, { useState } from "react";
import ActivityIcon from "../Atoms/ActivityIcon";
import ActivityCardTitle from "../Atoms/ActivityCardTitle";
import continueArrow from "../assets/static/Arrow-Up-Bold@2x.png";

import "../Styles/Organisms/ActivityCard.css";

const ActivityCard = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const { iconSrc, leadText, highlight, otherHighlight } = props;
    return (
        <div className={isOpen ? "activitycard-div-open" : "activitycard-div"} onClick={() => setIsOpen(!isOpen)}>
            <ActivityIcon iconSrc={iconSrc} />
            <ActivityCardTitle text={leadText} />
            {highlight !== undefined && <ActivityCardTitle isHighlight={true} text={highlight} />}
            {otherHighlight !== undefined && <ActivityCardTitle text="and" />}
            {highlight !== undefined && <ActivityCardTitle isHighlight={true} text={otherHighlight} />}
            <ActivityIcon iconSrc={continueArrow} isArrow={true} isOpen={isOpen} />
        </div>
    );
};

export default ActivityCard;