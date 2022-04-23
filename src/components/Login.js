import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect, useState,useRef } from 'react'
import AuthContext from '../context/AuthProvider'
import api from './api/posts'
import './LoginCss.css';
const LOGIN_URL = '/auth'
const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    useEffect(()=>{
        userRef.current.focus();
    },[])

useEffect(()=>{
    setErrMsg('');
    },[user,password])

const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        const response = await axios.post(LOGIN_URL,JSON.stringify({user,password}),{headers: {'Content-Type': 'application/json'}, withCredentials:true})
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({user,password,roles,accessToken})
        setUser('');
        setPassword('')
    }
    catch(err){
        setErrMsg(err);

    }

    setSuccess(true);
}

  return (
    <div className='main'>
        <div className='login_container'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className='login_form'> 
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' ref={userRef} autoComplete='off' value={user} required onChange={(e)=>setUser(e.target.value)}/>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' ref={userRef} value={password} required onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Sign In</button>
        </form>
        <p>
            <span>
                <a href='/register'>Sign Up</a>
            </span>
        </p>
        </div>
        </div>
  )
}

export default Login