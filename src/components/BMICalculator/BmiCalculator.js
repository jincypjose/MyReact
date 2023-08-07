import React, { useState} from 'react';

export default function BmiCalculator(){
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [result, setResult] = useState("");

    const BMI = weight/height;

    const checkResult = () => {
        if(BMI<18){
            setResult("you are under weight");
        } else if (BMI >= 18 && BMI < 25){
            setResult("you are normal");
        } else if (BMI > 18) {
            setResult("you are over weight");
        }
    }

    return(
        <>
        <span>weight(kg):</span>
        <input type="number" name='weight' className='' onChange={(e)=>setWeight(eval(e.target.value))} value={weight}></input>
        <span>height(mm):</span>
        <input type="number" name='height' className='' onChange={(e)=>setHeight(parseFloat(e.target.value))} value={height}></input><br/>
        <button type="submit" className="btn btn-success" onClick={(e)=>checkResult(e)}>check now</button>
        <div>{result}</div>
        </>
    )
}