import React, { createContext, useContext, useReducer } from 'react'

const GameContext = createContext()

const initialTiles = [
  { letter: 'A', value: 1 }, { letter: 'B', value: 3 },
  { letter: 'C', value: 3 }, { letter: 'D', value: 2 },
  { letter: 'E', value: 1 }, { letter: 'F', value: 4 },
  { letter: 'G', value: 2 }
]

const initialState = {
  board: Array(15).fill().map(() => Array(15).fill(null)),
  players: [
    { id: 1, name: 'Player 1', score: 0, tiles: initialTiles },
    { id: 2, name: 'Player 2', score: 0, tiles: [] }
  ],
  currentPlayer: 0,
  selectedTile: null
}

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'PLACE_TILE':
      return {
        ...state,
        board: state.board.map((row, i) =>
          i === action.row ? row.map((cell, j) =>
            j === action.col ? action.tile : cell
          ) : row
        )
      }
    case 'SELECT_TILE':
      return { ...state, selectedTile: action.tile }
    case 'SHUFFLE_TILES':
      return {
        ...state,
        players: state.players.map((player, index) =>
          index === state.currentPlayer ? {
            ...player,
            tiles: action.shuffledTiles
          } : player
        )
      }
    default:
      return state
  }
}

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => useContext(GameContext)