
import logo from './logo.svg';
import './index';
import Game from "./components/Game";

function App() {
  return (
    <>
    <div className="headline">Tic Tac Toe</div>
    <div className="App">
      <div className="flex-container">
        <Game> </Game>
      </div>
    </div></>
  );
}

export default App;
