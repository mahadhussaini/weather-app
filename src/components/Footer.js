import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: "16px",
      }}
    >
      {" "}
      <Typography variant="body2" component="p">
        © 2024 My Weather App. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
