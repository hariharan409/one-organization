import React from "react";
import { itHelpDeskList } from "./external-links/externalAppList";
import { CardMedia } from "@mui/material";
import "../../scss/it-helpdesk.scss";

const ITHelpDesk = () => {

    return(
        <div className="it-helpdesk-tab-view-grid-layout-element">
            {
                itHelpDeskList.map((helpdesk) => {
                    return(
                        <div key={helpdesk.id} className="it-helpdesk-tab-view-grid-item">
                            <CardMedia component="img" className="it-helpdesk-tab-view-grid-item-image" src={helpdesk.appImage} />
                            <div className="it-helpdesk-tab-view-grid-item-link">
                                <span>{helpdesk.appName}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ITHelpDesk;