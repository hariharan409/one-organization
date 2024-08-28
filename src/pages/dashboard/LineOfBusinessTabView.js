import React from "react";
import { lineOfBusinessList } from "./external-links/externalAppList";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";
import { sliderProps } from "./sliderProps";
import "../../scss/line-of-business-tab-view.scss"

const LineOfBusinessTabView = () => {

    return(
        <div className="line-of-business-tab-view-layout-element">
            <Slider {...sliderProps(lineOfBusinessList.length)}>
                {
                    lineOfBusinessList.map((business) => {
                        return(
                            <div key={business.id} className="line-of-business-tab-view-item">
                                <CardMedia component="img" className="line-of-business-tab-view-item-image" src={business.appImage} />
                                <a className="line-of-business-tab-view-item-link" href="###">
                                    {business.appName}
                                </a>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default LineOfBusinessTabView;