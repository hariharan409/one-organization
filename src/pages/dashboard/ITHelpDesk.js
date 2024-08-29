import React from "react";
import { itHelpDeskList } from "./external-links/externalAppList";
import { CardMedia } from "@mui/material";
import Slider from "react-slick";
import Grow from "@mui/material/Grow";
import { sliderProps } from "./sliderProps";
import "../../scss/it-helpdesk.scss";

const ITHelpDesk = () => {

    return(
        <div className="it-helpdesk-tab-view-layout-element">
            <Slider {...sliderProps(itHelpDeskList.length)}>
                {
                    itHelpDeskList.map((helpdesk,index) => {
                        return(
                            <Grow in={true} style={{transformOrigin: "0 0 0"}} timeout={index * 1000}>
                                <div key={helpdesk.id} className="it-helpdesk-tab-view-item">
                                    <CardMedia component="img" className="it-helpdesk-tab-view-item-image" src={helpdesk.appImage} />
                                    <a className="it-helpdesk-tab-view-item-link" href="###">
                                        {helpdesk.appName}
                                    </a>
                                </div>
                            </Grow>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default ITHelpDesk;