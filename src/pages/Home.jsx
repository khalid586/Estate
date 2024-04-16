import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {
  return (
        <div className='font-custom'>
            <Navbar></Navbar> 
            <Outlet></Outlet>
            
        </div>


  )
}

export default Home