import React from "react";

import "../Styles/Atoms/ActivityCardTitle.css";

const ActivityCardTitle = (props) => {
    const { text, isOpen } = props;
    return (
        <div className={isOpen ? "activitycardtitle-div-open" : "activitycardtitle-div"}>
            <h2 className={"activitycardtitle-h2"}>{text}</h2>
            {isOpen &&
                <div className="activitycard-open-content">
                    <p>
                        es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
                    </p>
                </div>
            }
        </div>
    );
};

export default ActivityCardTitle;