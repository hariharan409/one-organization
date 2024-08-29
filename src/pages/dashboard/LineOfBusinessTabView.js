import React from "react";
import { lineOfBusinessList } from "./external-links/externalAppList";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";
import Grow from "@mui/material/Grow";
import { sliderProps } from "./sliderProps";
import "../../scss/line-of-business-tab-view.scss"

const LineOfBusinessTabView = () => {

    return(
        <div className="line-of-business-tab-view-layout-element">
            <Slider {...sliderProps(lineOfBusinessList.length)}>
                {
                    lineOfBusinessList.map((business,index) => {
                        return(
                            <Grow key={business.id} in={true} style={{transformOrigin: "0 0 0"}} timeout={index * 1000}>
                                <div className="line-of-business-tab-view-item">
                                    <a href={business.appLink} target="_blank" rel="noreferrer">
                                        <CardMedia component="img" className="line-of-business-tab-view-item-image" src={business.appImage} />
                                    </a>
                                    <span className="line-of-business-tab-view-item-app-name">
                                        {business.appName}
                                    </span>
                                </div>
                            </Grow>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default LineOfBusinessTabView;