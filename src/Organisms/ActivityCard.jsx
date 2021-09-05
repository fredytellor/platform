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
            <ActivityIcon iconSrc={iconSrc} isOpen={isOpen} />
            <ActivityCardTitle text={leadText} isOpen={isOpen} />
            {highlight !== undefined && <ActivityCardTitle isHighlight={true} text={highlight} isOpen={isOpen} />}
            {(otherHighlight !== undefined && isOpen !== true) && <ActivityCardTitle text="and" isOpen={isOpen} />}
            {highlight !== undefined && <ActivityCardTitle isHighlight={true} text={otherHighlight} isOpen={isOpen} />}
            <ActivityIcon iconSrc={continueArrow} isArrow={true} isOpen={isOpen} />
        </div>
    );
};

export default ActivityCard;