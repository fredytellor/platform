import React from "react";

import "../Styles/Atoms/Card.css";

const Card = ({ children }) => {

    return (
        <div className="card-div">
            {children}
        </div>
    );
};

export default Card;