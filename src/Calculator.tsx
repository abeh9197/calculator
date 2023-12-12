import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [result, setResult] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setResult(result.concat(e.currentTarget.name));
  }

  const clear = () => {
    setResult("");
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error");
    }
  }

  return (
    <div className="calculator">
      <form>
        <input type="text" value={result} />
      </form>

      <div className="keypad">
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>-</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick}>*</button>
        <button name="C" onClick={clear}>C</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="=" onClick={calculate}>=</button>
        <button name="/" onClick={handleClick}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
