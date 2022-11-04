import { TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import "./Register.css"

function registerValidtion(user) {
    const schema = Joi.object({
        first_name: Joi.string().alphanum().min(3).max(30).required(),
        last_name: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    });
    return schema.validate(user, { abortEarly: false })
}



export default function Register() {

    let navigate = useNavigate()
    const [isLoading,setIsLoading] = useState(false)
    const [errorList , setErrorList]= useState([])
    const [error , setError] = useState('')
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        password: "",
        email: ""
    })

    function getUser(e) {
        let myUSer = { ...user };
        myUSer[e.target.name] = e.target.value;
        setUser(myUSer);

    }
    async function submitRegister(e) {
        e.preventDefault(); 
    
        let valedtion = registerValidtion(user)
        console.log(valedtion);
        
        
        if (valedtion.error) {
            setErrorList(valedtion.error.details) 
            setIsLoading(false)
        }
        else {    
            let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signup`, user);
            console.log(data);

            if(data.message === 'success'){
                setIsLoading(false)                
                navigate('/login')

            }
            else{
                setError("Email aleady registerd")
                setIsLoading(false)
            } 
        }
    }

    return (
        
         <div>
            <div className=' d-flex center flex-column align-content-center align-items-center box'>
                <h2>Register </h2>
                <form onSubmit={submitRegister}  className='d-flex flex-column' >
                    <TextField id="first_name" label="First Name" variant="standard" name='first_name' onChange={getUser} />
                    <TextField className='mt-3' id="last_name" label="Last Name" variant="standard" name='last_name' onChange={getUser} />
                    <TextField className='mt-3' id="email" label="Email" variant="standard" name='email' onChange={getUser} />
                    <TextField
                        className='mt-3'
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        name='password'
                        onChange={getUser}
                    />
                    <button type='submit' className='btn btn-outline-info mt-3'>
                        {isLoading?<i className='fas fa-spinner fa-spin'></i>:'Register'}
                    </button>
                </form>
                {error?<div className='alert alert-danger' >{error} </div>:''}    
                {errorList.map((error,index)=> {
                    
                    if (error.context.key =='password' ){
                        return <div key={index} className='alert alert-danger' >Wrong Password</div>
                    }
                    else{
                        return <div key={index} className='alert alert-danger' >{error.message} </div>
                    }
                })}
            </div>
        </div>
    )
}
