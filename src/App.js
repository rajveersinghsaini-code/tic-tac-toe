import GameBoard from "./components/GameBoard";
import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [resetGame, setResetGame] = useState(true);
  const [boardSize, setBoardSize] = useState(3);
  const [cubeSize, setCubeSize] = useState(80);
  const onSizeChange = (e) => {
    const _boardSize = parseInt(e.target.value);
    setBoardSize(_boardSize);
    const screenWidth =
      window.innerWidth > 0 ? window.innerWidth : window.screen.width;
    if (screenWidth <= 480) {
      if (_boardSize === 5) {
        setCubeSize(60);
      } else if (_boardSize === 4) {
        setCubeSize(70);
      } else {
        setCubeSize(80);
      }
    }
  };

  return (
    <Fragment>
      <GameBoard
        boardSize={parseInt(boardSize)}
        cubeSize={cubeSize}
        resetGame={resetGame}
      >
        Size{" "}
        <select
          onChange={(e) => onSizeChange(e)}
          value={boardSize}
          className="size-select"
        >
          <option value="3">{" 3 "}</option>
          <option value="4">{" 4 "}</option>
          <option value="5">{" 5 "}</option>
        </select>
        <button onClick={setResetGame} className="reset-button">
          RESET
        </button>
      </GameBoard>
    </Fragment>
  );
}

export default App;
