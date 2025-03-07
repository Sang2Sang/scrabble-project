// This component keeps track of each player scores, it will useState to update 
// the scores and also to keep track of the player turns to avoid updating the 
// wrong player score
//Will need player info as props and also playerindex(check whose turn)

import React from "react";

function ScoreBoard(){
    return (
        <div className="scoreboard">
            <h2>ScoreBoard</h2>
            <div className="player-list">

            </div>

        </div>
    );
}
export default ScoreBoard;