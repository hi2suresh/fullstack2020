import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({onClick, text}) => {
 return(
   <>
     <button onClick={onClick}>{text}</button>
   </>
 )
}

const Statistic = ({text, value}) => {
 return(
   <>
   <tr>
     <td>{text}</td>
     <td>{value}</td>
   </tr>
   </>
 )
}
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = ((good*1)+(bad*-1))/all
  const positive = (good/all)*100

  if(all === 0) {
    return(
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
  <div>
      <h2>statistics</h2>
      <table>
        <tbody>
      <Statistic text="good" value={good}/>
      <Statistic text="neutral" value={neutral}/>
      <Statistic text="bad" value={bad}/>
      <Statistic text="all" value={all}/>
      <Statistic text="average" value={average}/>
      <Statistic text="positive" value={positive +' %'} />  
      </tbody>  
      </table> 
  </div>
  )
 

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  

  return (
    <div>
       <h2>give feedback</h2>
       <div>
         <Button onClick={() => setGood(good+1)} text={'good'}/>
         <Button onClick={() => setNeutral(neutral+1)} text={'neutral'}/>
         <Button onClick={() => setBad(bad+1)} text={'bad'}/>
        
         <Statistics good={good} neutral={neutral} bad={bad}/>
       </div>
      
    </div>
  )
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


