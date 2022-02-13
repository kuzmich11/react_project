import {Box, Button, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import useAuth from "../hook/useAuth";
import {useLocation, useNavigate} from 'react-router-dom'


const Login = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await auth.signin({email, password}, () => {
        navigate(from, {replace: true})
        })
    }

    return (
        <Box
            sx={{
                m: 1,
                backgroundColor: 'background.default',
                '& > :not(style)': {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px',
                }


            }}
        >
            <Typography variant="h2">Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    type='email'
                    placeholder='email'
                    name={'email'}
                    value={email}
                    onChange={handleChange}
                />
                <TextField
                    type='password'
                    placeholder='password'
                    name={'password'}
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button
                    type='submit'
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                >
                    Отправить
                </Button>
            </form>
        </Box>
    )

}

export default Login