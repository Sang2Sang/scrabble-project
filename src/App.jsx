import React from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard"; 
import TileRack from "./components/TileRack";
import Tile from "./components/Tile";

function App(){
    return(
        <div className="app">
            <h1>Scrabble Game</h1>
           <GameBoard />
           <TileRack />
            <Tile />
           <ScoreBoard />
           
        </div>
    );
}
export default App;