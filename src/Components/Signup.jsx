import React from 'react'
import { RegisterUser } from '../auth';
import { useState } from 'react';
function Signup() {
    const[email,setEmail]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
  return (
    <div className="signup">
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email...'  required/>
    <br />
    <input type="userName" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter userName' required/>
    <br />
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter pass..' required/>
    <br />
    <button onClick={()=>RegisterUser(email,username,password)}>Register user</button>
    </div>
  )
}

export default Signup