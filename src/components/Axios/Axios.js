 import React, {useEffect, useState} from "react"
 import axios from "axios"
 
 export default function AxiosComponent(){
    const [users, setUsers] = useState([])

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

    return (
        <>
        <h3>this is how axios work</h3>
        {users.map(user =>(
            <ul key={user.name}>
                <li >{user.name}</li>
                <li >{user.address.city}</li>
            </ul>
        ))}
        </>
    )
 }