import "./App.css";
import { useState } from "react";

function App() {

 
  const [bill,setBill] = useState(0)
 
  
   const [tip,setTip] = useState()
  const [total,setTotal] = useState(bill + tip )

  
   
  function tipCalc(){
  
   
  if( bill >= 50 && bill <= 300 ){
    setTip(0.15 * bill);
    setTotal(bill + tip)

  } else {
    setTip(0.20 * bill);
    setTotal(bill + tip)
     
  }};

  return (
    <div className='main'>
      <div className="container">
        <h1>Tip Calculator</h1>
        <input type='text' placeholder="Enter your bill" onChange={(e)=>{
           setBill(+e.target.value)
        
        }}/>
        
        <button onClick={tipCalc}>Calculate</button>
        <p>Your bill  was {bill}, the tip was {tip}, and the total value is </p>
        <div className="total"> {total}</div>
      </div>
      
    </div>
  );
}

export default App;
