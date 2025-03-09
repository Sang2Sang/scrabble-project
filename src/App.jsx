import React from 'react'
import GameBoard from './components/GameBoard'
import ScoreBoard from './components/ScoreBoard'
import TileRack from './components/TileRack'
import './tile.css'  // Add global CSS import

export default function App() {
  return (
    <div className="app-container">
      <ScoreBoard />
      <GameBoard />
      <TileRack />
    </div>
  )
}