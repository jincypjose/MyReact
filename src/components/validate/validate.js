import React, { useState } from "react"

export default function ValidatePassword(){
    const [password, setPassword] = useState({password:''})
    const [passwordMessage, setPasswordMessage] = useState()
    const [passwordMessageColor, setPasswordMessageColor] = useState({color:'', backgroundColor:'',})
    
    let a=""
    // const b = 9
    // const c = 7
    const b = 9
    const c = 7

    const clikChange = () => {
         a = b + c;
    }

    const onChangeMessage = (e) => {
        const passwordName = e.target.name
        const passwordValue = e.target.value;
        setPassword({...password, [passwordName]: passwordValue})
        console.log(password)
        if(password.password.length + 1 <5){
            setPasswordMessage("The password is not strong")
            setPasswordMessageColor({color:'#FF0000', backgroundColor:'black',})
        } else if(password.password.length + 1 == 5){
            setPasswordMessage("The password is OK")
            setPasswordMessageColor({color:'#008000', backgroundColor:'black',})
        } else if(password.password.length >= 5 && password.password.length <= 10) {
            setPasswordMessage("The password is GOOD")
            setPasswordMessageColor({color:'#FFA500', backgroundColor:'black',})
        } else {
            setPasswordMessage('')
            setPasswordMessageColor({color:'black', backgroundColor:'black',})
        }
    }

    //red #FF0000 green #008000 orange #FFA500

    return (
        <>
        {a}
        <input type="password" id="" className="" name="password" onKeyUp={(e)=>onChangeMessage(e)} ></input>
        <p style={passwordMessageColor}>{passwordMessage}</p>
        <button onClick={(e)=>clikChange(e)}></button>
        </>
    )
}