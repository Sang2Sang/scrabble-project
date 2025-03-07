import React from "react";
<<<<<<< HEAD
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
=======
function Tile(){

}

export default Tile;
>>>>>>> 8ebc50b55ec1701baedc0c8982c2dddcc25b5ca3
