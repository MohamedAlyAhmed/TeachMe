import { TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

const BASE_ULR = "http://localhost:3000";

export default function Regester() {
    const [user, setUser] = useState({
         first_name:"",
         last_name:"",
         password:"",
         email:""
    })

    function getUser(e){
        let myUSer ={...user};
        myUSer[e.target.name] = e.target.value;
        setUser(myUSer);
     
    }
    async function  submitRegister(e){
        e.preventDefault();
       let {data} = await axios.post(`${BASE_ULR}/users`,user);
       console.log(data);
    
    }

    return (
        <div>
            <h2>Register </h2>
            <form onSubmit={submitRegister} >
                <TextField id="first_name" label="First Name" variant="standard" name='first_name'  onChange={getUser}/>
                <TextField id="last_name" label="Last Name" variant="standard" name='last_name'onChange={getUser} />
                <TextField id="email" label="Email" variant="standard" name='email' onChange={getUser}/>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    name='password'
                    onChange={getUser}
                />
                <button type='submit' className='btn btn-outline-info'>Register</button>
            </form>
        </div>
    )
}
