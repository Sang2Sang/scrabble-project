import React, { useState } from 'react';
import Tile from './Tile';

function TileRack({ playerTiles, onTileDrop }) {
  const [shuffledTiles, setShuffledTiles] = useState(playerTiles);

  function shuffleTiles() {
    const shuffled = [...shuffledTiles];
    for(let i = shuffled.length-1; i>0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledTiles(shuffled);
  };
function handleTileDrag(event, tile) {
  event.dataTransfer.setData("tile", JSON.stringify(tile));
};

const handleDrop = (e) => {
  e.preventDefault();
  const tileData = JSON.parse(e.dataTransfer.getData("tile"));
  onTileDrop(tileData);
};

const handleDragOver = (e) => {
  e.preventDefault();
};


  return(
   <div
   className='title-rack'
   onDrop={handleDrop}
   onDragOver={handleDragOver}
   >
  <button className='shuffle-btn' onClick={shuffleTiles}>Shuffle Tiles</button>
  {
    shuffledTiles.map((tile, index) => (
      <div
      key={index}
      className='tile'
      draggable
      onDragStart={(e) => handleTileDrag(e, tile)}
     >

    <Tile letter={tile.letter} value={tile.value}/>
     </div>
    ))}
   </div>
  );
};

export default TileRack;