import React, { useState } from 'react'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Filter from './Filter'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [showAll,setShowAll] = useState(true);
   
  const [filterValue,SetFilterValue] = useState('');
  const onFilterChange = event => {
      SetFilterValue(event.target.value);
      setShowAll(false);
  }

  const onHandleAdd = (event) => {
    event.preventDefault();
    if(persons.find(person => person.name === newName)) {
        alert(`${newName} is already added to phonebook`)
    } else{
    setPersons(persons.concat({name: newName, number: newNumber}))    
    }
    setNewName('')
    setNewNumber('')
    setShowAll(true)
  }

  const [ newName, setNewName ] = useState('')
  const onNameChange = event => {
      setNewName(event.target.value);
  }

  const [newNumber, setNewNumber] = useState('')
  const onNumberChange = event => setNewNumber(event.target.value)

  const showThesePersons = showAll ? persons : persons.filter( person => person.name.toLowerCase().includes(filterValue.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilterChange={onFilterChange} filterValue={filterValue}/>
      <h2>Add a new Name and Number</h2>
      <PersonForm onHandleAdd={onHandleAdd} onNameChange={onNameChange} 
                  onNumberChange={onNumberChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons showThesePersons={showThesePersons}/>
      
    </div>
  )
}

export default App