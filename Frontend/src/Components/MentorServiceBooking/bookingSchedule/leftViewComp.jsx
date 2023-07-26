import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import "./leftViewComponent.css"; // Import the CSS file

const LeftViewComponent = ({ serviceName, serviceDuration, servicePrice }) => {
  return (
    <Paper elevation={3} className="left-view-component">
      <div>
        <Box className="left-view-component-header">
          <Typography variant="h3" gutterBottom component="div">
            Shivam Lakhanpal
          </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            {serviceName}
          </Typography>
        </Box>
      </div>
      <Box className="left-view-component-footer">
        <Typography variant="h6">{servicePrice} CAD</Typography>
        <div className="divider-vertical" />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EventIcon sx={{ fontSize: "1.2rem", marginRight: "4px" }} />
          <Typography variant="h6">{serviceDuration} of meeting</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default LeftViewComponent;
