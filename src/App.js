

import './index';
import Game from "./components/Game";

function App() {

  
  return (
    <>
      <div className="headline">
        <div className="headline_1">Tic</div>
        <div className="headline_2">Tac</div>
        <div className="headline_1">Toe</div>
      </div>
      <div className="App">
        <div className="flex-container">
          <Game></Game>
        </div>
      </div></>
  );
}

export default App;
