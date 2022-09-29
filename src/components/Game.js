import {Board} from "./Board";
import {useState} from "react";
import {calculateWinner} from "../util";

export const Game = () => {
  const defaultSquares = [{ square: Array(9).fill(null)}]
  const [history, setHistory] = useState(defaultSquares)
  const [xIsNext, setXIsNext] = useState(true)
  const current = history[history.length - 1]
  const winner = calculateWinner(current.square)
  const status = winner ? 'Winner is ' + winner :'Next player: ' + (xIsNext ? 'X' : 'O')
  const handleClick = (i) => {
    if(winner || current.square[i]) return
    const square = current.square.slice()
    square[i] = xIsNext ? 'X' : 'O'
    setHistory(history.concat({ square }))
    setXIsNext(!xIsNext)
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.square} onClick={(i)=> handleClick(i)} />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}
