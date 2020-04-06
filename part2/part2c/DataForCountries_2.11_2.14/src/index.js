import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './components/App'

// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)

// axios.get('http://localhost:3001/notes').then(response => {
//     const notes = response.data;
//     // console.log("hey");
//     ReactDOM.render(
//         <App notes={notes}/>,
//         document.getElementById('root')
//     )

// })

ReactDOM.render(<App/>, document.getElementById('root'))