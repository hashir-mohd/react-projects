import React,{ useState } from "react"

function App() {
  const [color,setColor] = useState("black"); 
  
  return (
    <div style={{backgroundColor:color, width :"100vw", height:"100vh"}}>
      <button style={{backgroundColor:"yellow"}} onClick={() =>setColor("yellow")}>Yellow</button>
      <button style={{backgroundColor:"pink"}} onClick={() =>setColor("pink")}>Pink</button>
      <button style={{backgroundColor:"green"}} onClick={() =>setColor("green")}>Green</button>
      
    </div>
    
  )
}

export default App
