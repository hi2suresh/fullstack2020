import React from 'react'
import ShowSingleCountry from './ShowSingleCountry'


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

export default ShowCountryDetails