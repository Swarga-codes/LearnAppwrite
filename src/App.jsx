import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterUser from './appwriteconfig'
function App() {
  const[email,setEmail]=useState("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
useEffect(() => {
  console.log('hello appwrite')
}, [])

  return (
    <>
      <div className="users">
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email...'  required/>
      <br />
      <input type="userName" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter userName' required/>
      <br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter pass..' required/>
      <br />
      <button onClick={()=>RegisterUser(email,username,password)}>Register user</button>
      </div>
    </>
  )
}

export default App
