import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Home'>
    <h1>Home</h1>
    <Link to='/login'>Login{" "}</Link>
    <Link to='/signup'>Register</Link>
    </div>
  )
}

export default Home