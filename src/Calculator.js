import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const digitClick = (digit) => {
    if (displayValue === '0') {
      setDisplayValue(digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };

  const opClick = (op) => {
    setPrevValue(parseFloat(displayValue));
    setDisplayValue('0');
    setOperator(op);
  };

  const equalsClick = () => {
    const currentValue = parseFloat(displayValue);
    let result;
    switch (operator) {
      case '+':
        result = prevValue + currentValue;
        break;
      case '-':
        result = prevValue - currentValue;
        break;
      case '*':
        result = prevValue * currentValue;
        break;
      case '/':
        result = prevValue / currentValue;
        break;
      case '%':
        result = (prevValue / 100);
        break;
      default:
        result = currentValue;
    }
    setDisplayValue(result.toString());
    setPrevValue(null);
    setOperator(null);
  };

  const clearClick = () => {
    setDisplayValue('0');
    setPrevValue(null);
    setOperator(null);
  };

  const decClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => clearClick()}>C</button>
        <button onClick={() => opClick('/')}>/</button>
        <button onClick={() => opClick('*')}>*</button>
        <button onClick={() => opClick('-')}>-</button>
        <button onClick={() => opClick('+')}>+</button>
        <button onClick={() => opClick('%')}>%</button>

        <button onClick={() => digitClick('0')}>0</button>
        <button onClick={() => digitClick('1')}>1</button>
        <button onClick={() => digitClick('2')}>2</button>
        <button onClick={() => digitClick('3')}>3</button>
        <button onClick={() => digitClick('4')}>4</button>
        <button onClick={() => digitClick('5')}>5</button>
        <button onClick={() => digitClick('6')}>6</button>
        <button onClick={() => digitClick('7')}>7</button>
        <button onClick={() => digitClick('8')}>8</button>
        <button onClick={() => digitClick('9')}>9</button>
    
        <button onClick={() => equalsClick()}>=</button>
        <button onClick={() => decClick()}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
