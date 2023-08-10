 import React, {useEffect, useState} from "react"
 import axios from "axios"
 const initial={name:"",email:""}

 export default function AxiosComponent(){
    const [users, setUsers] = useState([])
    const[data,setData]=useState({name:"",email:""})

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setUsers(response.data)
        })
        .catch((error) => {
            console.log(error)
        });
    }
    const handleChange=(e)=>{
       const names=e.target.name
       const values=e.target.value
        setData({...data,[names]:values})
        console.log(data)
    }

    const dataSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users",data)
        .then((response) => {
            console.log(response.data)
            if(response.data!=""){
                alert("data insert successfully")
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return (
        <>
        <h3>this is how axios work in GET Method</h3>
        {users.map(user =>(
            <ul key={user.name}>
                <li >{user.name}</li>
                <li >{user.address.city}</li>
            </ul>
        ))}
         <h3>this is how axios work in POST Method</h3>
         <form onSubmit={(e)=>dataSubmit(e)}>
            <label>Name :</label>
            <input type="text" name="name" onChange={(e)=>handleChange(e)} value={data.name}/><br/>
            <label>Email :</label>
            <input type="text" name="email" onChange={(e)=>handleChange(e)} value={data.email}/><br/>
            <button>Submit</button>
         </form>
        </>
    )
 }