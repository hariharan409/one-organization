import React from "react";
import CompanyLogo from "../../assets/pages/app-header/company-logo.png";
import "../../scss/header.scss";

const AppHeaderOne = () => {

    return(
        <div className="app-header-one-root-element">
            <img src={CompanyLogo} alt="company-logo" className="app-header-one-company-logo"/>
            <span className="app-header-one-company-name">One Stop IT Service Portal</span>
            <div />
        </div>
    )
}

export default AppHeaderOne;