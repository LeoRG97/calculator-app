import { useRef, useState } from 'react';

enum Operators {
  add, subtract, multiply, divide,
}

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const operatorRef = useRef<Operators>('');

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };


  const createNumber = (value: string) => {
    if (number.includes('.') && value === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {

      if (value === '.') {
        setNumber(number + value);
      } else if (value === '0' && number.includes('.')) {
        setNumber(number + value);
      } else if (value !== '0' && !number.includes('.')) {
        setNumber(value);
      } else if (value === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + value);
      }

    } else {
      setNumber(number + value);
    }

  };

  const erase = () => {
    if (number.length > 1 && !number.includes('-')) {
      setNumber(number.slice(0, -1));
    } else if (number.length > 2 && number.includes('-')) {
      setNumber(number.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const switchNumber = () => {
    if (number.endsWith('.')) {
      // quitar punto decimar solitario
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const buttonDivide = () => {
    switchNumber();
    operatorRef.current = Operators.divide;
  };

  const buttonMultiply = () => {
    switchNumber();
    operatorRef.current = Operators.multiply;
  };

  const buttonSubtract = () => {
    switchNumber();
    operatorRef.current = Operators.subtract;
  };

  const buttonAdd = () => {
    switchNumber();
    operatorRef.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (operatorRef.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
      default:
        break;
    }
    setPreviousNumber('0');
  };

  return {
    number,
    previousNumber,
    clean,
    positiveNegative,
    createNumber,
    erase,
    buttonAdd,
    buttonDivide,
    buttonMultiply,
    buttonSubtract,
    calculate,
  };
};
