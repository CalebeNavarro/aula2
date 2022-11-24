import logo from "./logo.svg";
import banansplit from "./img/acessopng.png";

import "./App.css";
import { useState } from "react";

function App() {
  const [isAcesa, setIsAcesa] = useState(false);

  function handleOnClick() {
    if (isAcesa === true) {
      setIsAcesa(false);
    } else {
      setIsAcesa(true);
    }
  }
  console.log(isAcesa);
  return (
    <div className="App">
      {/* {isAcesa ? <div>Lampada acessa</div> : <div>Lampada apagada</div>} */}

      <button onClick={handleOnClick}>Acender|Apagar</button>
    </div>
  );
}

export default App;
