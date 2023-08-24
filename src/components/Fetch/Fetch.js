import { useState,useEffect } from "react"
export function Fetch(){
    const[values,setValues]=useState([])

    useEffect(() => {
        fetchValues()
    },[])

    const fetchValues=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const jsondata=await response.json()
    setValues(jsondata,)
    console.log(values)
    //This would only support in react17 not in 18
    // setValues(jsondata,()=>{console.log(values)})
    }

    // (async function() {
    //     const fetchValues=async()=>{

    //         try{ 
    //         const response=await fetch("https://jsonplaceholder.typicode.com/users")
    //         const jsondata=await response.json()
    //         setValues(jsondata)
    //         console.log(values)
    //         }catch(error){
    //             console.log(error)
    //         }
    //         }
    //         console.log(fetchValues())
    // })(1)

    return (
        <>
        Hello
        <table border={2}>
            <th>Name</th>
            <th>UserName</th>
            {values.map(i=>{
                return <tr>
                    <td>{i.name}</td>
                    <td>{i.username}</td>
                </tr>
            })}
        </table>
        </>
    )
}