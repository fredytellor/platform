import React from "react";

import "../Styles/Atoms/TextButton.css";

const TextButton = ( props ) => {
    const { textContent } = props;
    return (
        <div className="textbutton-div">
            <div className="textbutton-div-button">
                {textContent}
            </div>
        </div>
    );
}

export default TextButton;