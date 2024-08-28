import React from "react";
import CompanyLogo from "../../assets/pages/app-header/company-logo.png";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import SearchIcon from '@mui/icons-material/Search';
import Divider from "@mui/material/Divider";
import "../../scss/header.scss";

const AppHeader = () => {

    return(
        <div className="app-header-root-element">
            <div className="app-header-overlay-content">
                <div className="app-header-overlay-content-row-1">
                    <img src={CompanyLogo} alt="company-logo" className="app-header-company-logo"/>
                    <span className="app-header-company-name">integrated service portal</span>
                    <div />
                </div>
                <div className="app-header-overlay-content-row-2">
                    <label style={{color: "#FFF",fontSize: "2rem",fontFamily: "serif"}}>How can we help you?</label>
                    <Paper sx={{width: "50%",display: "flex",flexDirection: "row",padding: "10px",columnGap: "10px"}}>
                        <IconButton aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <Divider orientation="vertical" />
                        <InputBase placeholder="Search Apps..." sx={{width: "100%"}} inputProps={{"aria-label": "search"}} />
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;