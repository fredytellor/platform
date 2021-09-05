import React from "react";
import MyTitle from "../Atoms/MyTitle";
import Subtitle from "../Atoms/Subtitle";

import "../Styles/Molecules/HoursAmount.css";

const HoursAmount = (props) => {
    const { hours } = props;
    return (
        <div className="hoursamount-div">
          <MyTitle isHours={true} text={hours}/>
          <Subtitle contentText="hours" isHours={true} />
        </div>
    );
};

export default HoursAmount;
