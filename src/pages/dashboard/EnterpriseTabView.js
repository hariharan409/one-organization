import React from "react";
import {enterpriseList} from "./external-links/externalAppList";
import CardMedia from "@mui/material/CardMedia";
import "../../scss/enterprise-tab-view.scss";

const EnterpriseTabView = () => {

    return(
        <div className="enterprise-tab-view-grid-layout-element">
            {
                enterpriseList.map((enterprise) => {
                    return(
                        <div key={enterprise.id} className="enterprise-tab-view-grid-item">
                            <CardMedia component="img" className="enterprise-tab-view-grid-item-image" src={enterprise.appImage} title="hi" />
                            <div className="enterprise-tab-view-grid-item-use-seatrium-email-button">
                                <span>login using seatrium email</span>
                            </div>
                            <div className="enterprise-tab-view-grid-item-dont-have-seatrium-email-button">
                                <span>don't have seatrium email</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EnterpriseTabView;