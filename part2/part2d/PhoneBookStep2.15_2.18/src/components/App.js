import React, { useState, useEffect } from 'react'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Filter from './Filter'
import HandleRest from '../services/HandleRest'

const App = () => {
    const [persons, setPersons] = useState([])
    HandleRest.getAll()
        .then(response => setPersons(response))
    const [showAll, setShowAll] = useState(true);

    const [filterValue, SetFilterValue] = useState('');
    const onFilterChange = event => {
        SetFilterValue(event.target.value);
        setShowAll(false);
    }

    const onHandleAdd = (event) => {
        event.preventDefault();
        const existingPerson = persons.find(person => person.name === newName);
        if (existingPerson) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
                const updatedDetails = { ...existingPerson, number: newNumber }
                HandleRest.update(existingPerson.id, updatedDetails)
                    .then(response => setPersons(persons.map(person => person.id === existingPerson.id ? updatedDetails : person)))
            }
        } else {
            const person = { name: newName, number: newNumber }
            HandleRest.create(person)
                .then((response) => {
                    console.log(response);
                    setPersons(persons.concat(person));
                });

        }
        setNewName('')
        setNewNumber('')
        setShowAll(true)
    }

    const [newName, setNewName] = useState('')
    const onNameChange = event => {
        setNewName(event.target.value);
    }

    const [newNumber, setNewNumber] = useState('')
    const onNumberChange = event => setNewNumber(event.target.value)

    const showThesePersons = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))


    return (
        <div>
            <h2>Phonebook</h2>
            <Filter onFilterChange={onFilterChange} filterValue={filterValue} />
            <h2>Add a new Name and Number</h2>
            <PersonForm onHandleAdd={onHandleAdd} onNameChange={onNameChange}
                onNumberChange={onNumberChange} newName={newName} newNumber={newNumber} />
            <h2>Numbers</h2>
            <Persons showThesePersons={showThesePersons} />
        </div>
    )
}

export default App