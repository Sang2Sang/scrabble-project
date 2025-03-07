import React from "react";
import "./title.css";

function Tile({letter, value, isSelected, onClick}) {
    return (
        <div className={`tile ${isSelected ? "selected" : ""}`} onClick={onClick}>
            <span className="letter">{letter}</span>
            {value !== undefined && <span className="value">{value}</span>}
        </div>
    )
};

export default Tile; 
