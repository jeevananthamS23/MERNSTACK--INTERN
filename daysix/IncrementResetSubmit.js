// src/components/IncrementResetSubmit.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNumbers } from './slices/numbersSlicers';

var t=0;
export default function IncrementResetSubmit() {
    const [localNumbers, setnumbers] = useState([]);
    
    const dispatch = useDispatch();

    const increment = () => {
        t=t+1;
        console.log(t)
        setnumbers((prev) => [...prev, t]);
        console.log(localNumbers)
    };

    const reset = () => {
        setnumbers([]);
    };

    const submit = () => {
        dispatch(addNumbers([localNumbers]));
        setnumbers([]); 
    };

    return (
        <>
        <h1> Increment the array</h1>
            <button onClick={increment}>increment</button><br/>
            <br/>
            <button onClick={reset}>Reset</button><br/>
            <br/>
            <button onClick={submit}>Submit</button>
        </>);
}
