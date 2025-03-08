
import React from "react";

function ScoreBoard({ players, currentPlayerIndex }) {

    return (
        <div className="scoreboard">
            <h2>ScoreBoard</h2>
            
            <div className="player-list">
                {players.map((player, index) => (
                    <div
                        key={index}
                        className={`player-info ${index === currentPlayerIndex ? "current-player" : ""
                            }`}>

                    <div className="player-name">{player.name}</div>
                        <div className="player-score">Score: {player.score}</div>
                    </div>
                ))}
            </div>

        </div>
    );
}
export default ScoreBoard;