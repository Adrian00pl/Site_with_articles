import React from 'react'
import { useEffect, useState,useRef } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import axios from '../api/axios'
const LOGIN_URL = '/auth'
const Login = () => {
    const {setAuth} = useAuth();
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    useEffect(()=>{
        userRef.current.focus();
    },[])

useEffect(()=>{
    setErrMsg('');
    },[user,password])

const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        const response = await axios.post(LOGIN_URL,JSON.stringify({user,pwd:password}),{headers: {'Content-Type': 'application/json'}, withCredentials:true})
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({user,password,roles,accessToken})
        setUser('');
        setPassword('')
        navigate(from, { replace: true });
    }
    catch(err){
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Login Failed');
        }
        errRef.current.focus();
    }
}

  return (

<div className='main_login'>
<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
        <div className='login_container'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className='login_form'> 
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' ref={userRef} autoComplete='off' value={user} required onChange={(e)=>setUser(e.target.value)}/>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' value={password} required onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Sign In</button>
        </form>
        <p>
            <span>
                <Link to='/register'>Sign Up</Link>
            </span>
        </p>
        </div>
        </div>
  )
}

export default Login