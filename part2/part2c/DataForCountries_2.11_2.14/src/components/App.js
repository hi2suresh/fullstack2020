import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowCountryDetails from './ShowCountryDetails'


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