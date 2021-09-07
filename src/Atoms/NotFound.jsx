import React from "react";
import { Link } from "react-router-dom";

import "../Styles/Atoms/NotFound.css";

const NotFound = () => (
    <div className="notfound-div">
        <div className="notfound-div-texts">
            <h1 className="notfound-h1">NOT FOUND</h1>
            <h2 className="notfound-h2">{`Currently only "Home" is available.`}</h2>
        </div>
       <div className="notfound-link-div">
       <Link className="notfound-link" to="/">Home</Link>
       </div>
    </div>
);

export default NotFound;