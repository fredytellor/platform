import React from "react";
import MyHeader from '../Organisms/MyHeader';
import MyMenu from "../Molecules/MyMenu";

import "../Styles/Templates/Layout.css";

const Layout = ({ children }) => {
    return (
        <div className="layout-div">
            <MyHeader />
            <div className="layout-children">            
                {children}
            </div>
            <MyMenu />
        </div>
    );
};

export default Layout;