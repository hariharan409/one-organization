import React from "react";
import {enterpriseList} from "./external-links/externalAppList";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";
import Grow from "@mui/material/Grow";
import { sliderProps } from "./sliderProps";
import "../../scss/enterprise-tab-view.scss";

const EnterpriseTabView = () => {

    return(
        <div className="enterprise-tab-view-layout-element">
            <Slider {...sliderProps(enterpriseList.length)}>
                {(enterpriseList instanceof Array && enterpriseList.length > 0) ?
                    enterpriseList.map((enterprise,index) => {
                        return(
                            <Grow key={enterprise.id} in={true} style={{transformOrigin: "0 0 0"}} timeout={index * 1000}>
                                <div className="enterprise-tab-view-item">
                                    <a href={enterprise.appLink} target="_blank" rel="noreferrer">
                                        <CardMedia component="img" className="enterprise-tab-view-item-image" src={enterprise.appImage} />
                                    </a>
                                    {
                                    enterprise.noSeatriumLink ?
                                    (<a className="enterprise-tab-view-item-dont-have-seatrium-email-link" href={enterprise.noSeatriumLink} target="_blank" rel="noreferrer">
                                        Don't Have Seatrium Email
                                    </a>) : <div className="enterprise-tab-view-item-app-name">{enterprise.appName}</div>
                                    }
                                </div>
                            </Grow>
                        )
                    }) : <h3>No Data Available</h3>
                }
            </Slider>
        </div>
    )
}

export default EnterpriseTabView;