import React, { useState } from "react";
import "./Cals.css";


export default function Cals() {

    const [result, setResult] = useState(0);
    const [prevNumber, setPrevNumber] = useState(null);
    const [currentNumber, setCurrentNumber] = useState("");
    const [operator, setOperator] = useState("");

    const handleClick = (e) => {
        const value = e.target.value;
        const newCurrentNumber = currentNumber + value;
        setCurrentNumber(newCurrentNumber);
        setResult(parseFloat(newCurrentNumber));
    };

    const clear = () => {
        setResult(0);
        setPrevNumber(null);
        setCurrentNumber("");
        setOperator("");
    };

    const pressOperator = (e) => {
        if (currentNumber === "" && prevNumber === null) return;

        if (prevNumber !== null && currentNumber !== "") {
            calculate();
        } else if (currentNumber !== "") {
            setPrevNumber(parseFloat(currentNumber));
        }

        setOperator(e.target.value);
        setCurrentNumber("");
    };

    const pressEqual = () => {
        if (currentNumber === "" || operator === "") return;

        calculate();
        setOperator("");
    };

    const calculate = () => {
        const current = parseFloat(currentNumber);
        let calcResult;

        switch (operator) {
            case "+":
                calcResult = prevNumber + current;
                break;
            case "-":
                calcResult = prevNumber - current;
                break;
            case "*":
                calcResult = prevNumber * current;
                break;
            case "/":
                calcResult = prevNumber / current;
                break;
            default:
                return;
        }

        setResult(calcResult);
        setPrevNumber(calcResult);
        setCurrentNumber("");
    };


    return (
        <>
            <div className="container">

                <div className="calculator">

                    <h2>Calculator</h2>

                    <div className="resultScreen">
                        <input className="result" type="text" value={result} readOnly/>
                    </div>

                    <div className="row">
                        <button onClick={handleClick} value={7}>7</button>
                        <button onClick={handleClick} value={8}>8</button>
                        <button onClick={handleClick} value={9}>9</button>
                        <button onClick={pressOperator} value={"+"}>+</button>
                    </div>

                    <div className="row">
                        <button onClick={handleClick} value={4}>4</button>
                        <button onClick={handleClick} value={5}>5</button>
                        <button onClick={handleClick} value={6}>6</button>
                        <button onClick={pressOperator} value={"-"}>-</button>
                    </div>

                    <div className="row">
                        <button onClick={handleClick} value={1}>1</button>
                        <button onClick={handleClick} value={2}>2</button>
                        <button onClick={handleClick} value={3}>3</button>
                        <button onClick={pressOperator} value={"*"}>*</button>
                    </div>

                    <div className="row">
                        <button onClick={clear} value={"AC"}>AC</button>
                        <button onClick={handleClick} value={0}>0</button>
                        <button onClick={pressEqual} value={"="}>=</button>
                        <button onClick={pressOperator} value={"/"}>/</button>
                    </div>

                </div>

            </div>

        </>
    )

}
