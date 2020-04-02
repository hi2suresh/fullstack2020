import React from 'react'

const Header = ({heading}) => {
    return(
      <>
       <h1>{heading}</h1>
      </>
    )
  }
  
  const Part = ({part}) => {
    return(
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((total, currentValue) => {
      const result = total + currentValue.exercises;
      return result
    },0);
      return(
        <h3>total of {total} exercises</h3>
      )
    }

  const Course = ({course}) => {  
    return(
      <div>
      <Header heading={course.name}/>
       {course.parts.map((part) => <Part key={part.id} part={part}/>)}
      <Total parts={course.parts}/>
      </div>
    )
  }

  export default Course
  
  