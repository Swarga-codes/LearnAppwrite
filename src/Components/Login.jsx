import React from 'react'
import { useState } from 'react';
import { AuthenticateUser } from '../auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate()
  const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

  return (
    <div className="login">
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email...'  required/>
    <br />
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter pass..' required/>
    <br />
    <button onClick={async()=>{
     const auth= await AuthenticateUser(email,password)
    if(auth!=='error occured'){
      navigate("/");
    }
    }}>Login user</button>
    </div>
  )
}

export default Login