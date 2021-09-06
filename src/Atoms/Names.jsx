import React from "react";

import "../Styles/Atoms/Names.css";

const Names = (props) => {
    const { name1, name2,isOpen } = props;
    return (<div className={isOpen ? "names-div-open" : "names-div"}>
        <h2 className={"names-h2"}>{name1}</h2>
        <h2 className={"names-connector"}>and</h2>
        <h2 className={"names-h2"}>{name2}</h2>
        {/* {isOpen &&
            <div className="activitycard-open-content">
                <p>
                    es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
                </p>
            </div>
        } */}
    </div>);
};


export default Names;