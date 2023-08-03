import React, { useState } from "react";

export default function StateInFunction() {
    const [counter, setCounter] = useState(0)

    const onCounterIncrement = () => {
        setCounter(counter+1)
    }

    const onCounterDecrement = () => {
        setCounter(counter-1)
    }

    return(
        <>
        <h3>Hello you can create your own state in this function</h3>
        <h3>COUNTER:{counter}</h3>
        <button onClick={onCounterIncrement}>Counter Increment</button>
        <button onClick={onCounterDecrement}>Counter Decrement</button>
        </>
    )
}