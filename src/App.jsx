import React,{ useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
function App() {


  return (
    <Routes>
    <Route exact path='/' element={<Home/>}/>
<Route exact path='/login' element={<Login/>}/>
<Route exact path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default App
