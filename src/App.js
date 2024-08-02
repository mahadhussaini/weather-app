import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCityChange = (e) => {
    setSearchCity(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchCity) {
      setErrorMessage("Please enter a city name");
      return;
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=7f88633674eabfb7bb8da25149fa9582&units=metric`
      );
      setWeatherData(response.data);
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage("Error fetching weather data");
    }
  };

  const getWeatherCondition = (data) => {
    if (data.weather[0].main === "Rain") {
      return "Rain";
    } else if (data.weather[0].main === "Clouds") {
      return "Cloudy";
    } else if (data.weather[0].main === "Clear") {
      return "Clear";
    } else if (data.weather[0].main === "Smoke") {
      return "Smoke";
    } else {
      return "Other";
    }
  };

  const weatherColors = {
    Rain: "#4285F4",
    Cloudy: "#BDBDBD",
    Clear: "#F7DC6F",
    Smoke: "#EFEFEF",
    Other: "#ffffff",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: weatherData
          ? weatherColors[getWeatherCondition(weatherData)]
          : "",
      }}
    >
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            mb: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="City Name"
              variant="outlined"
              value={searchCity}
              onChange={handleCityChange}
              error={!!errorMessage}
              helperText={errorMessage}
              fullWidth
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Search
            </Button>
          </form>
        </Box>
        {weatherData && (
          <Box sx={{ textAlign: "center", marginBottom: 2 }}>
            <Typography variant="h4" component="h2">
              {getWeatherCondition(weatherData)}
            </Typography>
          </Box>
        )}
        {weatherData && <CurrentWeather data={weatherData} />}
      </Box>
      <Footer />
    </div>
  );
}

export default App;
