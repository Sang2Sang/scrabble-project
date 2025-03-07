import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard"; 
import TileRack from "./components/TileRack";
import PlayerComponent from "./components/PlayerComponent";


function App(){

    const [players,setPlayers]= useState([
        {name:"Player 1", score: 0},
        {name: "Player 2", score: 0},
    ])

    const [currentPlayerindex, setCurrentPlayerIndex]= useState[0];

    function updateScore(playerIndex,points){
        setPlayers(function(prevPlayers){
            return (
                prevPlayers.map((player,index) =>
                index === playerIndex ?{...player, score:player.score + points} : player)
            )
        })
    }

    function nextTurn() {
        setCurrentPlayerIndex(function(prevIndex) {
          return (prevIndex + 1) % players.length;
        });
      }

    
    return(
        <div className="app">
            <h1>Scrabble Game</h1>
           <ScoreBoard players={players} currentPlayerindex={currentPlayerindex}/>
           <GameBoard />
           <TileRack />
           <PlayerComponent />
           
        </div>
    );
}
export default App;