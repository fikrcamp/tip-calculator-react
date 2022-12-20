import { useState } from "react";
import React from "react";
import { ReactDOM } from "react";
import "./App.css";

function App() {
   
        const [bill,setBill] = useState()
        const [tips,setTips] = useState("")
        const [result,setResult]=  useState("")
      
        function CheckBill(){

          let tip = ""
          if(bill > 50 && bill < 300){
            tip = bill * 0.15
            setTips(tip)
          }else 
          tip = bill * 0.20
          
          setResult(`Your bill was ${bill} and tip is ${tips} and the Total value is ${bill + tips}`)
        }
          
  return (
    <div className="tip">
      <h2>Tip Calculator</h2>
     <span>Enter your Bill</span> <input type="number" placeholder="Bill" onChange={(e) => setBill(e.target.value *1)}/>
       
       <button onClick={(CheckBill)}>Check</button>
 
       <p>{result}</p>
  
    </div>
  );
}

export default App;
