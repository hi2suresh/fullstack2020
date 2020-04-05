import React from 'react'

const Persons=({showThesePersons}) => {
    return(
        <>
        {showThesePersons.map(obj => <p key={obj.name}>{obj.name} {obj.number}</p> )}
        </>
    )
}
export default Persons