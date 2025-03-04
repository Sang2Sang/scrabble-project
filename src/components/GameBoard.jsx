import React from "react";
import Tile from "./Tile";

// It receives a board prop which is an array of letters, and onTileClick handles when a tile is clicked.

function GameBoard(props) {
  const { board, onTileClick } = props;

  return (
    <div className="board">
      {board.map(function (row, rowIndex) {
        return row.map(function (letter, colIndex) {
          return (
            <Tile
              key={`${rowIndex}-${colIndex}`}
              letter={letter}
              onClick={function () {
                onTileClick(rowIndex, colIndex);
              }}
            />
          );
        });
      })}
    </div>
  );
}

export default GameBoard;
