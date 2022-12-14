import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [total, setTotal] = useState('')

  function calculate(e){
    e.preventDefault()
    let newTip = 0
    if(bill >= 50 && bill <= 300){
      newTip = bill * 0.15
    } else if(bill > 300){
      newTip = bill * 0.20
    }
    setTip(newTip)
    setTotal(Number(bill) + Number(newTip))
  }
  
  return (
    <div className="app">
      <div className="container">
        <h1>TIP CALCULATOR</h1>
        <div className="form">
            <form onSubmit={calculate}>
              <div>
                <label>Enter Your Bill Here</label>
                <input type="number" onChange={(e)=> {setBill(e.target.value)}}/>
              </div>
              <button className="btn" type="submit">Calculate</button>
            </form>
            <div className="message">
            {tip && 
            <h3>Your tip is {tip} and total value is {total}</h3>
           }
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
