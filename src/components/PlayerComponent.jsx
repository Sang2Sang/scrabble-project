import React from "react";

function PlayerComponent({name,score,onPass,onSwapTiles}){
    return(
    <div className="player">
    <h2 className="player-name">{name}</h2>
    <p className="player-score">
        <strong>Score:</strong>{score}
    </p>
    <div className="player-actions">
    <button className="pass-btn" onClick={onPass}></button>
    <button className="swap-btn" onClick={onSwapTiles}></button>
    </div>
    </div>

    )
}
export default PlayerComponent;