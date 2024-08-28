import React from "react";
import { itHelpDeskList } from "./external-links/externalAppList";
import { CardMedia } from "@mui/material";
import Slider from "react-slick";
import { sliderProps } from "./sliderProps";
import "../../scss/it-helpdesk.scss";

const ITHelpDesk = () => {

    return(
        <div className="it-helpdesk-tab-view-layout-element">
            <Slider {...sliderProps}>
                {
                    itHelpDeskList.map((helpdesk) => {
                        return(
                            <div key={helpdesk.id} className="it-helpdesk-tab-view-item">
                                <CardMedia component="img" className="it-helpdesk-tab-view-item-image" src={helpdesk.appImage} />
                                <a className="it-helpdesk-tab-view-item-link" href="###">
                                    {helpdesk.appName}
                                </a>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default ITHelpDesk;