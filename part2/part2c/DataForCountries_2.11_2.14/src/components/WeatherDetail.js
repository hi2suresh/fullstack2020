import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherDetail = ({ country }) => {
  const capital = country.capital;
  const api_key = process.env.REACT_APP_API_KEY;
  const url = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query=' + capital;
  const [weatherData, SetWeatherData] = useState(null)
  //Fetch the weather details and then set it
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log("Got the weather details")
        SetWeatherData(response.data);
      });

  }, [url])

  //Check if fetch of weather details are complete
  if (weatherData === null) {
    return (
      <>
      </>
    )
  }
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <b>weather: </b><span>{weatherData.current.temperature} Celsius</span>
      <br />
      <img alt="Flag" style={{ width: '100px' }} src={weatherData.current.weather_icons[0]} />
      <br />
      <b>wind: </b><span>{weatherData.current.wind_speed}mph direction {weatherData.current.wind_dir}</span>

    </div>
  )
}

export default WeatherDetail