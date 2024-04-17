import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
        <div className='font-custom'>
            <Navbar></Navbar> 
            <Outlet></Outlet>
            <Footer></Footer>
        </div>


  )
}

export default Home