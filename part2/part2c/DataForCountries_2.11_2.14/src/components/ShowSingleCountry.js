import React, { useState, useEffect } from 'react'
import WeatherDetail from './WeatherDetail'


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

export default ShowSingleCountry