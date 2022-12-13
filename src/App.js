import { useState } from "react";
import "./App.css";

function App() {
  const [Bill, setBill] = useState("");
   const [Input, setInput] = useState("");
  const [Tip, setTip] = useState("")
  function TipCalculate() {
    if(Input >= 50 && Input <=300 ){
      const newTip =  (15/100)*Input;
      setTip(newTip);
      setBill(parseInt(Input) + parseInt(Tip))
    }
    else if(Input > 300){
      const newTip =  (20/100)*Input;
      setTip(newTip);
      setBill(parseInt(Input) + parseInt(Tip))
    }
  }
  return (
    <div className="header">
      <h1 className="header-tittle">Tip Calculator💴</h1>
      <div className="header-Tip">

        <label className="header-Tip-label ">Enter Your bill Here</label>
        <input className="header-Tip-input" onChange={(e) => { setInput(e.target.value) }} ></input>
        <button   className="header-Tip-btn" onClick={TipCalculate}>calculate</button>

        {Input && <h4 className="header-result">Your bill is <span className="header-result-output">{Input}</span> , your tip is <span className="header-result-output"> {Tip}</span>, and your total bill value is   <span className="header-result-output">{Bill}</span> </h4>}
      </div>
    </div>
  );
}

export default App;

