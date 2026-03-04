import { useState, useEffect, useRef } from 'react';
import confetti from "canvas-confetti";

function Tictoe(){
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const winner = calculate(board);

  const hasCelebrated = useRef(false);

  useEffect(() => {
    if (winner && !hasCelebrated.current) {
      hasCelebrated.current = true;

      confetti({
        particleCount: 300,
        spread: 200,
        origin: { x: 0 }
      });

      confetti({
        particleCount: 300,
        spread: 200,
        origin: { x: 1 }
      });
    }

    if (!winner) {
      hasCelebrated.current = false;
    }
  }, [winner]);

  function handleClick(index){
    if(board[index] !== null || winner){
      return;
    };

    const newBoard = [...board];
    newBoard[index] = turn ? "X" : "O";

    setBoard(newBoard);
    setTurn(!turn);
  };

  function calculate(board){
    const winnerPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i=0; i < winnerPatterns.length; i++){
      const [a, b, c] = winnerPatterns[i];

      if(
        board[a] && board[a] === board[b] && board[a] === board[c]
      ){
        return board[a];
      }
    };

    return null;
  };

  function tableReset(){
    const arr = Array(9).fill(null);
  
    setBoard(arr);
    setTurn(true);
    hasCelebrated.current = false;
  }

  return(
      <>
        <h1 className="text-4xl">Tic-Tac-Toe</h1>
        <table className=' border-4 border-dashed '>
          <tbody>
           {[0, 1, 2].map((row) => (
              <tr key={row}>
              {[0, 1, 2].map((col) => {
                const index = (row * 3) + col;
                return(
                  <td key={index} onClick={() => {handleClick(index)}}>
                      {board[index]}
                    </td>
                );
              })}
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="text-4xl">
            {winner ? `winner: ${winner}` : `turn :${turn ? "X" : "O"}`}
        </h2>
        <button className="ttt-btn" onClick={() => {tableReset()}}>
          Reset
        </button>
      </>
  )
}

export default Tictoe;