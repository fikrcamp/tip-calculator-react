import "./App.css";
import { useState } from "react";

function App() {
  const[input, setInput ]= useState()
  const[total, setTotal]= useState()

  function calcTip(){
    if (input>=50&& input<=300){
      let tip1= input*0.15
      let total1 = input * 0.15 / 0.15 + input * 0.15
      let final= `your bill is ${input} and your tip is ${tip1} and your total is ${total1}`
      setTotal(final)
    } else{
      let tip2= input*0.20
      let total2 = input * 0.20/ 0.20 + input * 0.20
      let final= `your bill is ${input} and your tip is ${tip2} and your total is ${total2}`
      setTotal(final)
    }
  }

  return (
    <div>
      <div class="container">
        <h1>TIP CALCULATOR</h1>
       <div class="inputs">
        <input onChange={(e)=>setInput(e.target.value)} placeholder="Ener your bill" type="number"/>
        <br/>
        <button onClick={calcTip}>Calculate</button>
        <br/>
        <h2 class="restult">{total} </h2>



       </div>
    </div>

    </div>
  );
}

export default App;
