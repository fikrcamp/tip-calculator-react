import "./App.css";
import { FcCalculator } from "react-icons/fc";
import { useState } from "react"

function App() {
  const [input, setInput] = useState()
  const [totally, setTotally] = useState()
  function calculate() {
    if (input >= 50 && input <= 300) {
      let tip1 = input * 0.15
      let total1 = input * 0.15 / 0.15 + input * 0.15
      let final = (`Your bill is ${input} and your tip is ${tip1} and finally your total is ${total1}`)
      setTotally(final)

    } else {
      let tip2 = input * 0.20
      let total2 = input * 0.20 / 0.20 + input * 0.20
      let final = (`Your bill is ${input} and your tip is ${tip2} and finally your total is ${total2}`)
      setTotally(final)
    }
  }
  return (
    <div class="parent">
      <div class="container">
        <div class="child">
          <h1 class="header">TIP CALCULATOR <FcCalculator class="icon" /> </h1>
          <label class="label-0">Enter your bill :-
            <input class="input-0" type="number" placeholder="Enter here" onChange={(e) => setInput(e.target.value)} />
          </label>
          <br />
          <br />
          <button class="btn" onClick={calculate}>Check</button>
          <br />

          <h2 class="result">{totally}</h2>
        </div>
      </div>
    </div >
  );
}

export default App;
