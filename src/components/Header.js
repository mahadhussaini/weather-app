import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ mb: 2, backgroundColor: "#3f51b5" }}>
      {" "}
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ color: "white" }}>
          My Weather App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
