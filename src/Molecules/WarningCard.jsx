import React from "react";

import "../Styles/Molecules/WarningCard.css";

const WarningCard = ({ children }) => {
    return (<div className="warningcard-div">
        {children}
    </div>);
}

export default WarningCard;