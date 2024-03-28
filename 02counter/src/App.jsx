import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10);

  function addValue(){
    if (counter <20){
      setCounter(counter +1);
    }
    else{
      setCounter(counter)
    }
  };

  const decreaseValue = ()=>{
    if(counter>0){setCounter(counter-1)}
    else{setCounter(counter)}
  }

  return (
    <>
    <h1>Counter value : {counter}</h1>
    <button onClick={addValue}>Increase </button>
    <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
