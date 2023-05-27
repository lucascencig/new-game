import React, { useState } from 'react';
import confetti from 'canvas-confetti'
import './App.css'
const COLORS = {
  A: '🟨',
  AZ: '🟦',
  R: '🟥',
  V: '🟩'
};

const Ar = [

  COLORS.R,
  COLORS.R,
  COLORS.A,
  COLORS.AZ,
  COLORS.A,
  COLORS.R,
  COLORS.V,
  COLORS.AZ,
  COLORS.AZ,
  COLORS.R,
  COLORS.V,
  COLORS.AZ,
  COLORS.V,
  COLORS.A,
  COLORS.V,
  COLORS.AZ,
  COLORS.A,
  COLORS.AZ,
  COLORS.V,
  COLORS.V,
  COLORS.A,
  COLORS.AZ,
  COLORS.A,
  COLORS.R,
  COLORS.A,
  COLORS.V,
  COLORS.AZ,
  COLORS.R
];

function App() {
  const [board, setBoard] = useState(Ar);
  const [selected, setSelected] = useState(null);
  const [win, setWin] = useState(null)

  const handleClick = (index) => {
    if (selected === null) {
      setSelected(index);
    } else {
      // Intercambia los elementos seleccionados
      const updatedBoard = [...board];
      [updatedBoard[selected], updatedBoard[index]] = [updatedBoard[index], updatedBoard[selected]];
      setBoard(updatedBoard);
      setSelected(null);
    }

    if (
      board[0] === COLORS.AZ && board[7] === COLORS.A && board[14] === COLORS.A && board[21] === COLORS.AZ
      &&
      board[1] === COLORS.R && board[8] === COLORS.A && board[15] === COLORS.V && board[22] === COLORS.V
      &&
      board[2] === COLORS.R && board[9] === COLORS.V && board[16] === COLORS.AZ && board[23] === COLORS.V
      &&
      board[3] === COLORS.V && board[10] === COLORS.A &&
      board[17] === COLORS.A && board[24] === COLORS.V
      &&
      board[4] === COLORS.R && board[11] === COLORS.A &&
      board[18] === COLORS.R && board[25] === COLORS.AZ
      &&
      board[5] === COLORS.AZ && board[12] === COLORS.V &&
      board[19] === COLORS.A && board[26] === COLORS.AZ
      &&
      board[6] === COLORS.R && board[13] === COLORS.R &&
      board[20] === COLORS.AZ && board[27] === COLORS.AZ
    ) {
      confetti()
      alert("ganaste")
      setWin("win")
    }
  };

  const handleRestart = () => {
    setBoard(Ar)
  }


  const Square = ({ value, index }) => {
    const isSelected = selected === index;

    return (
      <div className="buttons">
        <button onClick={() => handleClick(index)} className={isSelected ? 'selected' : ''}
        >
          {value}
        </button>
      </div>
    );
  };

  return (
    <div className="App">

      <section>
        <h2>Instrucciones:</h2>
        <p>Hay 7 columnas y 4 filas</p>
        <p>Cada cuadrado de columnas debajo tiene numeros de colores relacionados a los colores dentro del tablero, SE DEBE UBICAR CADA COLOR EN SU LUGAR (FILA O COLUMNA) SEGUN LA CANTIDAD QUE MARCA EL NUMERO.</p>
        <p>Ej: si una columna tiene un numero "3" con color <u>rojo</u>, esa columna debe tener 3 colores rojos en el tablero.</p>
        <p>Lo mismo para las filas. Si hay un numero "2" con color <u>amarillo</u>, en esa fila solo pueden haber 2 colores amarillos</p>
        <p>Los números debajo en "columnas" y "filas" brillaran si las columnas y filas coinciden con la cantidad correcta de colores.</p>
        <h3>Movimientos:</h3>
        <p>Al presionar un boton, puedes cambiarlo de posición presionando otro color para ubicarlos de diferentes maneras.</p>

      </section>

      <section>
        <div className="board">
          {board.map((value, index) => (
            <Square
              key={index} value={value} index={index} />
          ))}
        </div>
      </section>
      <section className='restart'>
        <div>
          <button onClick={handleRestart}>↺</button>
        </div>

      </section>

      <h2>Columnas:</h2>
      <section className='columnas'>
        <div className='coordUp'>
          {
            board[0] === COLORS.AZ &&
              board[21] === COLORS.AZ ?
              <p className='blueL'>2</p> :
              <p className='blue'>2</p>
          }
          {
            board[7] === COLORS.A &&
              board[14] === COLORS.A ?
              <p className='yellowL'>2</p> :
              <p className='yellow'>2</p>
          }
        </div>
        <div className='coordUp'>
          {
            board[1] === COLORS.R ?
              <p className='redL'>1</p> :
              <p className='red'>1</p>
          }
          {
            board[8] === COLORS.A ?
              <p className='yellowL'>1</p> :
              <p className='yellow'>1</p>

          }
          {
            board[15] === COLORS.V &&
              board[22] === COLORS.V ?
              <p className='greenL'>2</p> :
              <p className='green'>2</p>

          }
        </div>
        <div className='coordUp'>
          {
            board[2] === COLORS.R ?
              <p className='redL'>1</p> :
              <p className='red'>1</p>
          }
          {
            board[9] === COLORS.V &&
              board[23] === COLORS.V ?
              <p className='greenL'>2</p> :
              <p className='green'>2</p>
          }
          {
            board[16] === COLORS.AZ ?
              <p className='blueL'>1</p> :
              <p className='blue'>1</p>
          }
        </div>
        <div className='coordUp'>
          {
            board[3] === COLORS.V &&
              board[24] === COLORS.V ?
              <p className='greenL'>2</p> :
              <p className='green'>2</p>
          }
          {
            board[10] === COLORS.A &&
              board[17] === COLORS.A ?
              <p className='yellowL'>2</p> :
              <p className='yellow'>2</p>
          }
        </div>
        <div className='coordUp'>
          {
            board[4] === COLORS.R &&
              board[18] === COLORS.R ?
              <p className='redL'>2</p> :
              <p className='red'>2</p>
          }
          {
            board[11] === COLORS.A ?
              <p className='yellowL'>1</p> :
              <p className='yellow'>1</p>
          }
          {
            board[25] === COLORS.AZ ?
              <p className='blueL'>1</p> :
              <p className='blue'>1</p>
          }
        </div>
        <div className='coordUp'>
          {
            board[5] === COLORS.AZ &&
              board[26] === COLORS.AZ ?
              <p className='blueL'>2</p> :
              <p className='blue'>2</p>
          }
          {
            board[12] === COLORS.V ?
              <p className='greenL'>1</p> :
              <p className='green'>1</p>
          }
          {
            board[19] === COLORS.A ?
              <p className='yellowL'>1</p> :
              <p className='yellow'>1</p>
          }
        </div>
        <div className='coordUp'>
          {
            board[6] === COLORS.R &&
              board[13] === COLORS.R ?
              <p className='redL'>2</p> :
              <p className='red'>2</p>
          }
          {
            board[20] === COLORS.AZ &&
              board[27] === COLORS.AZ ?
              <p className='blueL'>2</p> :
              <p className='blue'>2</p>
          }
        </div>
      </section>

      <h2>Filas:</h2>
      <section className='filas'>
        <div className='coordLeft'>
          {
            board[0] === COLORS.AZ &&
              board[5] === COLORS.AZ ?
              <p className='blueL'>2</p> :
              <p className='blue'>2</p>
          }
          {
            board[3] === COLORS.V ?
              <p className='greenL'>1</p> :
              <p className='green'>1</p>
          }
          {
            board[1] === COLORS.R &&
              board[2] === COLORS.R &&
              board[4] === COLORS.R &&
              board[6] === COLORS.R ?
              <p className='redL'>4</p> :
              <p className='red'>4</p>
          }
        </div>
        <div className='coordLeft'>
          {
            board[7] === COLORS.A &&
              board[8] === COLORS.A &&
              board[10] === COLORS.A &&
              board[11] === COLORS.A ?
              <p className='yellowL'>4</p> :
              <p className='yellow'>4</p>
          }
          {
            board[9] === COLORS.V &&
              board[12] === COLORS.V ?
              <p className='greenL'>2</p> :
              <p className='green'>2</p>
          }
          {
            board[13] === COLORS.R ?
              <p className='redL'>1</p> :
              <p className='red'>1</p>
          }
        </div>
        <div className='coordLeft'>
          {
            board[14] === COLORS.A &&
              board[17] === COLORS.A &&
              board[19] === COLORS.A ?
              <p className='yellowL'>3</p> :
              <p className='yellow'>3</p>
          }
          {
            board[15] === COLORS.V ?
              <p className='greenL'>1</p> :
              <p className='green'>1</p>
          }
          {
            board[16] === COLORS.AZ &&
              board[20] === COLORS.AZ ?
              <p className='blueL'>2</p> :
              <p className='blue'>2</p>
          }
          {
            board[18] === COLORS.R ?
              <p className='redL'>1</p> :
              <p className='red'>1</p>
          }
        </div>
        <div className='coordLeft'>
          {
            board[21] === COLORS.AZ &&
              board[25] === COLORS.AZ &&
              board[26] === COLORS.AZ &&
              board[27] === COLORS.AZ ?
              <p className='blueL'>4</p> :
              <p className='blue'>4</p>
          }
          {
            board[22] === COLORS.V &&
              board[23] === COLORS.V &&
              board[24] === COLORS.V ?
              <p className='greenL'>3</p> :
              <p className='green'>3</p>
          }
        </div>

      </section>



    </div>
  );
}

export default App;
