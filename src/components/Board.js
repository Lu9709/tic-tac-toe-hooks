import {Square} from "./Square";
import {useState} from "react";
import {calculateWinner} from '../util'

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(squares)
  const status = winner ? 'Winner is ' + winner :'Next player: ' + (xIsNext ? 'X' : 'O')
  const handleClick = (i) => {
    if(winner || squares[i]) return
    const squares_copy = squares.slice()
    squares_copy[i] = xIsNext ? 'X' : 'O'
    setSquares(squares_copy)
    setXIsNext(!xIsNext)
  }
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)}/>
  }
  return <>
    <div className="status">{status}</div>
    <div className="board-row">
      { renderSquare(0) }
      { renderSquare(1) }
      { renderSquare(2) }
    </div>
    <div className="board-row">
      { renderSquare(3) }
      { renderSquare(4) }
      { renderSquare(5) }
    </div>
    <div className="board-row">
      { renderSquare(6) }
      { renderSquare(7) }
      { renderSquare(8) }
    </div>
  </>
}

// /**
//  * 棋盘组件
//  * @param {Array} squares 当前棋盘棋子状态
//  * @param {Function} onClick 父组件的点击事件
//  */
// export const Board = (squares, onClick) => {
//   const renderSquare = (start) => {
//    return (
//      <div className="board-row">{
//        Array(start).map((val, index) => (
//          <Square key={index} value={ squares[start + index] } onClick={() => onClick(start + index)} />
//        ))
//      }
//      </div>
//    )
//   }
//   return <>
//     { renderSquare(0) }
//     { renderSquare(1) }
//     { renderSquare(2) }
//   </>
// }
