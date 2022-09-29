import {Square} from "./Square";

export const Board = (props) => {
  const { squares, onClick } = props
  const renderSquare = (start) => {
    return (
      <div className="board-row">{
        Array.from({ length: 3 }).map((item, index) => {
         return <Square key={start + index} value={squares[start + index]} onClick={() => onClick(start + index)}/>
        })
      }</div>
    )
  }
  return <>
    { renderSquare(0) }
    { renderSquare(3) }
    { renderSquare(6) }
  </>
}
