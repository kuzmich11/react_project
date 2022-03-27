import {Box, Button, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import firebase from "../service/firebase";
import {Error} from "@mui/icons-material";


const SignUp = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth(firebase)
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (e) {
            console.error(e);
            setError(error.message)
        }

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
            <Typography variant="h2">Sign In</Typography>
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
                <div>
                    {error && <Error>{error}</Error>}
                    <Button
                        type='submit'
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                    >
                        Отправить
                    </Button>
                </div>

            </form>
        </Box>
    )

}

export default SignUp