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

const ShowSingleCountry = ({ country }) => {
  return (
    <>
      <h2>{country.name}</h2>
      <div>
        {(`capital `).concat(country.capital)}
        <br />
        {(`population `).concat(country.population)}
      </div>
      <div>
        <h2>Spoken languages</h2>
        {country.languages.map((language, index) => <li key={index}>{language.name}</li>)}
        <br />
        <img alt="Flag" style={{ width: '100px' }} src={country.flag} />
      </div>
      <WeatherDetail country={country} />
    </>
  )

}

const ShowCountryDetails = ({ countries, input, SetFilterInput }) => {
  //Show nothing if user hasn't entered any input to filter
  if (!input) {
    return (<></>)
  } else { //Filter for countries based on user input
    const filterResults = countries.filter(country => country.name.toLowerCase().includes(input.toLowerCase()))
    if (filterResults.length > 10) {
      return (<p>too many matches, specify another filter </p>)
    } else if (filterResults.length === 1) { //Show details of the selected country
      return (<ShowSingleCountry country={filterResults[0]} />)
    } else { //Show list of countries
      return (
        <>
          {filterResults.map(result => {
            return <li key={result.name}>{result.name} <button onClick={() => SetFilterInput(result.name)}>show</button></li>
          })
          }
        </>)
    }
  }
}


const App = () => {
  const [filterInput, SetFilterInput] = useState('')
  const [countries, SetCountries] = useState([])

  //Fetch the countries details and then set it
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        SetCountries(response.data)
      });
    console.log('countries ', countries.length);
  }, [countries.length])
  const onFilterInputChange = (event) => {
    SetFilterInput(event.target.value);
  }

  return (
    <div>
      find countries: <input onChange={onFilterInputChange} value={filterInput} />
      <ShowCountryDetails countries={countries} input={filterInput} SetFilterInput={SetFilterInput} />
    </div>
  )
}

export default App