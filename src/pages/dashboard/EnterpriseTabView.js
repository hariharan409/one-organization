import React, { useContext, useEffect, useState } from "react";
import {enterpriseList} from "./external-links/externalAppList";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";
import Grow from "@mui/material/Grow";
import { sliderProps } from "./sliderProps";
import { SearchContext } from "../../contexts/SearchContext";
import "../../scss/enterprise-tab-view.scss";

const EnterpriseTabView = () => {
    const {searchText} = useContext(SearchContext);
    const [appList,setAppList] = useState([]);

    useEffect(() => {
        if(!searchText) {
            setAppList(enterpriseList);
            return;
        }
        let tempList = enterpriseList.filter((enterprise) => enterprise.appName.toLowerCase().includes(searchText.toLowerCase()));
        setAppList(tempList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchText]);

    return(
        <div className="enterprise-tab-view-layout-element">
            <Slider {...sliderProps(enterpriseList.length)}>
                {(appList instanceof Array && appList.length > 0) ?
                    appList.map((enterprise,index) => {
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
                                    </a>) : <div style={{height: "40px",marginTop: "10px",padding: "3px"}}></div>

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