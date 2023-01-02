import {TextField } from '@mui/material'
import React, { useState, useContext } from 'react'
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import "bootstrap-social/bootstrap-social.css"
import "bootstrap-social/bootstrap-social.less"
import { useEffect } from 'react';
import { DataContext } from '../../../DataContext';




function LoginValidtion(user) {



    const schema = Joi.object({

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    });
    return schema.validate(user, { abortEarly: false })
}



export default function Login() {
    document.title = `Login`;
    let navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errorList, setErrorList] = useState([])
    const [error, setError] = useState('')
    const [user, setUser] = useState({

        password: "",
        email: ""
    })
    let { getUserData } = useContext(DataContext);



    useEffect(() => {
        if (localStorage.getItem('userToken')) {
            navigate('/')
        }
    }, [])


    function gotoSignup() {
        navigate('/register')
    }
    function getUser(e) {
        let myUSer = { ...user };
        myUSer[e.target.name] = e.target.value;
        setUser(myUSer);

    }
    async function submitLogin(e) {
        e.preventDefault();

        let valedtion = LoginValidtion(user)
        console.log(valedtion);


        if (valedtion.error) {
            setErrorList(valedtion.error.details)
            setIsLoading(false)
        }
        else {
            let { data } = await axios.post(`https://route-movies-api.vercel.app/signin`, user);
            console.log(data);

            if (data.message === 'success') {
                localStorage.setItem('userToken', data.token)
                setIsLoading(false)
                getUserData()
                navigate('/')


            }
            else {
                setError(data.message)
                setIsLoading(false)
            }
        }
    }

    return (
        <div>
            <div className='d-flex  box'>
                <div className="container d-flex  login-container ">
                    <div className='login-header'>
                        <h5 className='login-tittle'>Login </h5>
                        <p>Access Your Existing Account</p>
                    </div>
                    <div className='d-flex row mt-3' >
                        <div className=' d-flex justify-content-center mt-2 col-12 col-md-6 social-button-container'>
                            <button className='btn social-button fbutton '>
                                <div><i className='fa-brands fa-facebook-f '></i></div>
                                <span> facebook login</span>
                            </button>
                        </div>
                        <div className=' d-flex justify-content-center mt-2 col-12 col-md-6 social-button-container'>
                            <button className='btn social-button gbutton '>
                                <i className='fa-brands fa-google ficon'></i>
                                <span> google login</span>
                            </button>
                        </div>
                    </div>
                    <p className='or'><span>OR</span></p>

                    <form onSubmit={submitLogin} className='d-flex flex-column' >

                        <div className='d-flex flex-column mb-3'>
                            <TextField className='mt-2' id="email" label="Email" variant="filled" name='email' onChange={getUser} />
                            <TextField
                                className='mt-3'
                                id="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled"
                                name='password'
                                onChange={getUser}
                            />
                        </div>
                        <div className='text-center btn-container'>
                            <button type='submit' className='btn btn-danger mt-3 submit-btn d-flex justify-content-center align-items-center'>
                                {isLoading ? <i className='fas fa-spinner fa-spin'></i> :
                                    <>
                                        <i className="fa-regular fa-envelope"></i>
                                        <div>Login with your email</div>

                                    </>}
                            </button>
                        </div>
                        <div className="d-flex justify-content-center forget-link">
                            <button type="button" className="btn btn-link link-underline"> Forgot your password? </button>
                        </div>
                        <div className="goto-signup">
                            <p className="goto-signup-text">
                                <span>Don't have an account?    </span>
                                <button className="btn btn-link" onClick={gotoSignup}>  Sign up</button>
                            </p>
                        </div>
                    </form>
                    {error ? <div className='alert alert-danger' >{error} </div> : ''}
                    {errorList.map((error, index) => {

                        if (error.context.key == 'password') {
                            return <div key={index} className='alert alert-danger' >Wrong Password</div>
                        }
                        else {
                            return <div key={index} className='alert alert-danger' >{error.message} </div>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
