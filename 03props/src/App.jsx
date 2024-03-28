import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  let obj={
    name:"hashir",
    age: 19
  }
  return (
    <>
    <Card userName= "hashir" passedObject= {obj}/>
    </>
  )
}


export default App
