import { useState } from 'react';
function Square({val, onSquareClick}){
    function handleClick(){
        console.log("clicked")
    }
    return (<button className = "square" onClick={onSquareClick}>
        {val}
        </button>
    );
}

export default function TicTac(){
    const[squares, setSquares] = useState(Array(9).fill(null))
    const[xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = "Winner: "+ winner;
    }
    else{
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    function handleClick(i){
        const nextSquares = squares.slice();
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        if(xIsNext){
            nextSquares[i] = "X";
        }
        else{
            nextSquares[i] = "O";
        }
        setXisNext(!xIsNext)
    
        
        setSquares(nextSquares)
    }
    return(
        <>
        <div className = "status">{status}</div>
        <div className = "board-row">
               <Square val = {squares[0]} onSquareClick={() => handleClick(0)}/>
               <Square val = {squares[1]} onSquareClick={() => handleClick(1)}/>
               <Square val = {squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className = "board-row">
               <Square val = {squares[3]} onSquareClick={() => handleClick(3)}/>
               <Square val = {squares[4]} onSquareClick={() => handleClick(4)}/>
               <Square val = {squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className = "board-row">
               <Square val = {squares[6]} onSquareClick={() => handleClick(6)}/>
               <Square val = {squares[7]} onSquareClick={() => handleClick(7)}/>
               <Square val = {squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
               
        </>
    )
};
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }