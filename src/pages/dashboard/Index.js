import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import EnterpriseTabView from "./EnterpriseTabView";
import LineOfBusinessTabView from "./LineOfBusinessTabView";
import ITHelpDesk from "./ITHelpDesk";
import "../../scss/dashboard.scss";

const Dashboard = () => {
    const [tabValue,setTabValue] = useState("0");

    const onHandleChange = (_,newTabValue) => {
        setTabValue(newTabValue);
    }

    return(
        <div className="dashboard-root-element">
            <TabContext value={tabValue}>
                <div>
                    <TabList 
                        onChange={onHandleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"   
                    >
                        <Tab label="enterprise" value="0" className="custom-tab-style" />
                        <Tab label="line-of-business" value="1" className="custom-tab-style" />
                        <Tab label="it-helpdesk" value="2" className="custom-tab-style" />
                    </TabList>
                </div>
                <TabPanel value="0" className="custom-tab-panel-style">
                    <EnterpriseTabView />
                </TabPanel>
                <TabPanel value="1" className="custom-tab-panel-style">
                    <LineOfBusinessTabView />
                </TabPanel>
                <TabPanel value="2" className="custom-tab-panel-style">
                    <ITHelpDesk />
                </TabPanel>
            </TabContext>
        </div>
    );
}

export default Dashboard;