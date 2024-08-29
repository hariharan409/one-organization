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
                {
                    enterpriseList.map((enterprise,index) => {
                        return(
                            <Grow in={true} style={{transformOrigin: "0 0 0"}} timeout={index * 1000}>
                                <div key={enterprise.id} className="enterprise-tab-view-item">
                                    <CardMedia component="img" className="enterprise-tab-view-item-image" src={enterprise.appImage} />
                                    <a className="enterprise-tab-view-item-use-seatrium-email-link" href="###">
                                        Login Using Seatrium Email
                                    </a>
                                    <a className="enterprise-tab-view-item-dont-have-seatrium-email-link" href="###">
                                        Don't Have Seatrium Email
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

export default EnterpriseTabView;