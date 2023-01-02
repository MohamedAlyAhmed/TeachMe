import { TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import "./Register.css"

export const BASE_URL = "https://teachme-iti.glitch.me";


function registerValidtion(user) {
    const schema = Joi.object({
        first_name: Joi.string().alphanum().min(3).max(30).required(),
        last_name: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

        age: Joi.string()

    });
    return schema.validate(user, { abortEarly: false })
}



export default function Register() {
    document.title = `Sign up for free`;
    let navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errorList, setErrorList] = useState([])
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        password: "",
        email: "",
        age: "",
        
    })

    function getUser(e) {
        let myUSer = { ...user };
        myUSer[e.target.name] = e.target.value;
        setUser(myUSer);
        console.log(e.target)


    }


    function gotoLogin() {
        navigate('/login')
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
            let { data } = await axios.post(`https://route-movies-api.vercel.app/signup`, user);
            console.log(data);


            if (data.message === 'success') {
                setIsLoading(false)
                navigate('/login')


            }
            else {
                setError("Email aleady registerd")
                setIsLoading(false)
            }
        }
    }




    return (

        <div>
            <div className=' d-flex center flex-column align-content-center align-items-center box'>

                <div className='login-header'>
                    <h5 className='login-tittle'>Sign up for free </h5>
                    <p>To The Biggest Video Based Arabic Content Library Of Courses</p>
                </div>
                <div className='d-flex row mt-3' >
                    <div className=' d-flex  mt-2 col-12  social-button-container'>
                        <button className='btn social-button fbutton '>
                            <div><i className='fa-brands fa-facebook-f '></i></div>
                            <span> facebook login</span>
                        </button>
                    </div>
                    <div className=' d-flex  mt-3 col-12  social-button-container'>
                        <button className='btn social-button gbutton '>
                            <i className='fa-brands fa-google ficon'></i>
                            <span> google login</span>
                        </button>
                    </div>
                </div>
                <p className='or'><span>OR</span></p>
                <form onSubmit={submitRegister} className='d-flex flex-column w-65' >
                    <div className='d-flex flex-column mb-3'>
                        <TextField id="first_name" size="small" label="First Name" variant="filled" name='first_name' onChange={getUser} />
                        <TextField className='mt-3' size="small" id="last_name" label="Last Name" variant="filled" name='last_name' onChange={getUser} />
                        <TextField className='mt-3' size="small" id="email" label="Email" variant="filled" name='email' onChange={getUser} />
                        <TextField
                            className='mt-3'
                            size="small"
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            name='password'
                            onChange={getUser}
                        />
                        <div className='mt-3'>
                            <p className="col-md-3">Age</p>
                            <input type="number" name="age" id="age" label="age" className='col-md-12' onChange={getUser} />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-danger mt-3 signup-btn d-flex justify-content-center align-items-center'>
                        {isLoading ? <i className='fas fa-spinner fa-spin'></i> : <>

                            <i className="fa-regular fa-envelope"></i>
                            <div>Sign up with your email</div>

                        </>}
                    </button>
                    <div className="goto-signup">
                        <p className="goto-signup-text">
                            <span>Already have an account? </span>
                            <button className="btn btn-link" onClick={gotoLogin}>  Login</button>
                        </p>
                    </div>
                </form>
                {error ? <div className='alert alert-danger' >{error} </div> : ''}
                {
                    errorList.map((error, index) => {

                        if (error.context.key == 'password') {
                            return <div key={index} className='alert alert-danger' >Wrong Password</div>
                        }
                        else {
                            return <div key={index} className='alert alert-danger' >{error.message} </div>
                        }
                    })
                }
            </div >
        </div >
    )
}
