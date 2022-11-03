
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function Regestration() {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [email , setEmail] = useState('')
    


    const [gender,setgender]= useState('');
    const handleChange = (event)=>{
        setgender(event.target.value);
    };

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='d-flex justify-content-center flex-column align-items-center' >
                    <div><TextField id="standard-basic" label="UserName" variant="standard" onChange={(e)=>{
                        console.log(e.target.value);
                        setUsername(e.target.value)
                    }} /></div>
                    <div><TextField id="standard-basic" label="E-mail" variant="standard" onChange={(e)=>{
                        console.log(e.target.value);
                        setUsername(e.target.value)
                    }}/></div>
                    <div><TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        onChange={(e)=>{
                            console.log(e.target.value);
                            setUsername(e.target.value)
                        }}
                        autoComplete="current-password"
                        variant="standard"
                    /></div>
                    <div><TextField
                        id="outlined-select-currency"
                        select
                        label="Select Gender"
                        value={gender}
                        onChange={handleChange}
                        helperText="Please select your gender"
                    >
                        <MenuItem  value={10}>male</MenuItem>
                        <MenuItem  value={20}>female</MenuItem>
                    </TextField></div>
                    <div>
                    <Button variant="outlined">Regestration</Button>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default Regestration