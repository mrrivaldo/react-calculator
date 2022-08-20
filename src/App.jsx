import { useState } from "react";

import "./App.css";

function App() {
  const [equal, setEqual] = useState("");

  const handleClick = (e) => {
    setEqual(equal.concat(e.target.value));
  };

  // const handleClick = (value) => {
  //   setEqual(value);
  // };

  const clear = () => {
    setEqual("");
  };

  const backspace = () => {
    setEqual(equal.slice(0, -1));
  };

  const calculate = () => {
    try {
      setEqual(eval(equal));
    } catch (error) {
      setEqual("Error");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form>
          <input type="text" value={`${equal ? equal : "0"}`} />
        </form>

        <div className="buttons">
          <button onClick={clear} className="sign" id="clear">
            Clear
          </button>
          <button onClick={backspace} className="sign" id="backspace">
            C
          </button>
          <button onClick={handleClick} className="sign" id="divide" value="/">
            &divide;
          </button>
          <button
            onClick={handleClick}
            className="numbers"
            id="seven"
            value="7"
          >
            7
          </button>
          <button
            onClick={handleClick}
            className="numbers"
            id="eight"
            value="8"
          >
            8
          </button>
          <button onClick={handleClick} className="numbers" id="nine" value="9">
            9
          </button>
          <button onClick={handleClick} className="sign" id="add" value="+">
            +
          </button>
          <button onClick={handleClick} className="numbers" id="four" value="4">
            4
          </button>
          <button onClick={handleClick} className="numbers" id="five" value="5">
            5
          </button>
          <button onClick={handleClick} className="numbers" id="six" value="6">
            6
          </button>

          <button
            onClick={handleClick}
            className="sign"
            id="subtract"
            value="-"
          >
            -
          </button>
          <button onClick={handleClick} className="numbers" id="one" value="1">
            1
          </button>
          <button onClick={handleClick} className="numbers" id="two" value="2">
            2
          </button>
          <button
            onClick={handleClick}
            className="numbers"
            id="three"
            value="3"
          >
            3
          </button>
          <button
            onClick={handleClick}
            className="sign"
            id="multiply"
            value="*"
          >
            x
          </button>

          <button onClick={handleClick} className="numbers" id="zero" value="0">
            0
          </button>
          <button
            onClick={handleClick}
            className="numbers"
            id="decimal"
            value="."
          >
            .
          </button>
          <button onClick={calculate} className="sign" id="equals">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
