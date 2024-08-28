import React from "react";
import {enterpriseList} from "./external-links/externalAppList";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../../scss/enterprise-tab-view.scss";

const EnterpriseTabView = () => {

    return(
        <div className="enterprise-tab-view-grid-layout-element">
            {
                enterpriseList.map((enterprise) => {
                    return(
                        <Card key={enterprise.id} className="enterprise-tab-view-grid-item">
                            <CardMedia component="img" sx={{height: "150px",objectFit: "cover"}} src={enterprise.appImage} title="hi" />
                            <CardContent>
                                <Typography variant="body1" component="div" sx={{textTransform: "capitalize"}}>
                                    {enterprise.appName}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {enterprise.appDescription}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button sx={{padding: "3px",backgroundColor: "primary.main",color: "#FFF",width: "50%"}} size="small">login using seatrium email</Button>
                                <Button sx={{padding: "3px",backgroundColor: "primary.main",color: "#FFF",width: "50%"}} size="small">don't have seatrium email</Button>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default EnterpriseTabView;