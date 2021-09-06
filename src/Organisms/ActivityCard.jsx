import React, { useState } from "react";
import ActivityIcon from "../Atoms/ActivityIcon";
import ActivityCardTitle from "../Atoms/ActivityCardTitle";
import continueArrow from "../assets/static/Arrow-Up-Bold@2x.png";
import Names from "../Atoms/Names";

import "../Styles/Organisms/ActivityCard.css";

const ActivityCard = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const { iconSrc, leadText, name1, name2 } = props;
    return (
        <div className={isOpen ? "activitycard-div-open" : "activitycard-div"} onClick={() => setIsOpen(!isOpen)}>
            <ActivityIcon iconSrc={iconSrc} isOpen={isOpen} />
            <div className="activitycard-content">
                <ActivityCardTitle text={leadText} isOpen={isOpen} />
                {name1 !== undefined &&
                    < Names name1={name1} name2 = { name2 } isOpen={isOpen}/>
                }
                <ActivityIcon iconSrc={continueArrow} isArrow={true} isOpen={isOpen} />
            </div>
        </div>
    );
};

export default ActivityCard;