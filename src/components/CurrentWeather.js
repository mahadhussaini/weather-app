import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

function CurrentWeather({ data }) {
  return (
    <Card sx={{ maxWidth: 345, mx: "auto" }}>
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          {data.name}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <Typography variant="h2" component="div">
            {data.main.temp}°C
          </Typography>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather icon"
            style={{ width: 50, height: 50, marginLeft: 10 }}
          />
        </Box>
        <Typography variant="body2" component="p" align="center">
          Feels like: {data.main.feels_like}°C
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Humidity: {data.main.humidity}%
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Wind speed: {data.wind.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CurrentWeather;
