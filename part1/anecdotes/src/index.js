import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {
return(
  <div style={{ display: "inline"}}>
    <button onClick={props.onClick}>next anectode</button>
  </div>
)
}

const Vote = (props) => {
  return(
    <>
      <button  onClick={props.onClick}>vote</button>
    </>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0);
  const[points, setPoints] = useState(() => Array(props.anecdotes.length).fill(0));
  function findIndexOfHighestVotes (){
     //Sort the array to find the index of highest votes
    const arr = [...points];
    arr.sort((a,b) => b-a);
    return points.indexOf(arr[0]);
  }
  const indexOfHighestVote = findIndexOfHighestVotes();

  const addVotes = () => {
    // console.log(points);
    setPoints(previousState => {
      const temp = [...previousState];
      temp[selected] +=1
      return temp;
    })
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br/>
      <Vote onClick={addVotes}/>
      <Button onClick={() => setSelected(Math.floor(Math.random() * props.anecdotes.length))}/>
      <h2>Anecdote with most values</h2>
      {props.anecdotes[indexOfHighestVote]}
      <br/>
      has {points[indexOfHighestVote]} votes
    </div>
  )
}


ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)