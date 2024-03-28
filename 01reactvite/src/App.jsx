import Chai from './Chai.jsx';

const a=1;
let b="";
if(a==1) {b="a is one"}
else {b="a is not 1"}

function App() {
  return (
    <>
      <Chai />
      <p>this is from app</p>
      {b}
    </>
    
    
  )
}

export default App
