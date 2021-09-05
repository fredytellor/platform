import React from "react";

import "../Styles/Atoms/ColorBall.css";

const ColorBall=(props)=>{
    const {isComplete}=props;
    return (
        <div className={isComplete?"colorball-div":"colorball-incomplete-div"}>        
        </div>
    );
};

export default ColorBall; 
