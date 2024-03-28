import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const a=<a href ="sdfsdf">this is a link</a>;
const name ="this is from variable";

function One(){
  return(
    <>
      <h1>this is from function</h1>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {One()}
    {name + " string"}
    <p>this is html text </p>
    {a}
    <App />
    <br/>
    {3+89}
    <br/>
    {`this is using back tick, ${name}`}
  </>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//     One()
    
// )
