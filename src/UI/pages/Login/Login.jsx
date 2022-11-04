import { scopedCssBaselineClasses, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import "bootstrap-social/bootstrap-social.css"
import "bootstrap-social/bootstrap-social.less"



function loginValidtion(user) {
    const schema = Joi.object({

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    });
    return schema.validate(user, { abortEarly: false })
}



export default function Login(props) {

    let navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errorList, setErrorList] = useState([])
    const [error, setError] = useState('')
    const [user, setUser] = useState({

        password: "",
        email: ""
    })

    function getUser(e) {
        let myUSer = { ...user };
        myUSer[e.target.name] = e.target.value;
        setUser(myUSer);

    }
    async function submitLogin(e) {
        e.preventDefault();

        let valedtion = loginValidtion(user)
        console.log(valedtion);


        if (valedtion.error) {
            setErrorList(valedtion.error.details)
            setIsLoading(false)
        }
        else {
            let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user);
            console.log(data);

            if (data.message === 'success') {
                localStorage.setItem('userToken', data.token)
                setIsLoading(false)
                props.getUserData()
                navigate('/home')

            }
            else {
                setError(data.message)
                setIsLoading(false)
            }
        }
    }

    return (
        <div>
            <div className='d-flex center flex-column align-content-center align-items-center box'>
                <div className="container d-flex center flex-column align-content-center align-items-center ">
                    <h2>Login </h2>
                    <p>Access Your Existing Account</p>
                    <div className='d-flex row buttoncontrol' >
                        <button className='btn btn-primary button fbutton col'>
                            <i className='fa-brands fa-facebook-f ficon'></i>
                            facebook login
                        </button>
                        <button className='btn btn-primary button gbutton col'>
                            <i className='fa-brands fa-google ficon'></i>
                            google login
                        </button></div>
                    <form onSubmit={submitLogin} className='d-flex flex-column' >

                        <TextField className='mt-2' id="email" label="Email" variant="standard" name='email' onChange={getUser} />
                        <TextField
                            className='mt-2'
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            name='password'
                            onChange={getUser}
                        />
                        <button type='submit' className='btn btn-outline-info mt-3'>
                            {isLoading ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
                        </button>
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
