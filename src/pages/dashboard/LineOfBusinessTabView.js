import React from "react";
import { lineOfBusinessList } from "./external-links/externalAppList";
import CardMedia from "@mui/material/CardMedia";
import "../../scss/line-of-business-tab-view.scss"

const LineOfBusinessTabView = () => {

    return(
        <div className="line-of-business-tab-view-grid-layout-element">
            {
                lineOfBusinessList.map((business) => {
                    return(
                        <div key={business.id} className="line-of-business-tab-view-grid-item">
                            <CardMedia component="img" className="line-of-business-tab-view-grid-item-image" src={business.appImage} title="hi" />
                            <a className="line-of-business-tab-view-grid-item-link" href="###">
                                {business.appName}
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LineOfBusinessTabView;