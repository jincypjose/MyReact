import React,{useState} from "react";

function FormState(props){
const[counter,setCounter]=useState(0)
const[counter1,setCounter1]=useState(100)
const[user,setUser]=useState({name:"",email:"", phoneNumber:""})
const[addNumbers,setAddNumbers] = useState({number1:"", number2:""})
const[addResult, setAddResult] = useState(0)
const countVal=()=>{
setCounter(counter+1)
setCounter1(counter1-1)

}


const changehan=(e)=>{
    const name1=e.target.name
    const value=e.target.value
    setUser({...user,[name1]:value})
}

const sub=(e)=>{
    e.preventDefault()
    console.log(addNumbers)
}

const addNumber=(e)=>{
    const number1=e.target.name
    const value=e.target.value
    setAddNumbers({...addNumbers,[number1]:value})
}

// const 

    return(
        <div>
         <label>Name : </label>
         the name attribute value should be same as state key
         <input type="text" name="name" onChange={(e)=>changehan(e)} value={user.name}/><br/>
         <label>Email : </label>
         <input type="text" name="email" onChange={(e)=>changehan(e)} value={user.email}/><br/>
         <label>Phone Number : </label>
         <input type="number" name="phoneNumber" onChange={(e)=>changehan(e)} value={user.phoneNumber}/><br/>
         <button type="submit" onClick={(e)=>sub(e)}>Submit</button>
         {/* {addNumbers.map((numbers)=>)} */}
         <input type="number" name="number1" onChange={(e)=>addNumber(e)} value={addNumbers.number1}/>
         <input type="number" name="number2" onChange={(e)=>addNumber(e)} value={addNumbers.number2}/>
         <button onClick={(e)=>sub(e)}>Add</button>
         <div>ghjjkkjk</div>
         {/* <div> */}
            <h3>Name :</h3>
            <h3>email :</h3>
            <p style={{color: 'black'}}>Phone Number :</p>
            <p style={{color: 'black'}}>ADD NUMBER1:{parseInt(addNumbers.number1)+parseInt(addNumbers.number2)}</p>
            <p style={{color: 'black'}}>ADDITION:{addNumbers.number2}</p>
         {/* </div> */}
        </div>
    )
}

export default FormState;