import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Button, Navbar } from 'flowbite-react';
import { AuthContext } from '../providers/AuthProvider';

function NavbarComp() {

  const style = 'rounded-3xl px-4 py-2 border-2 border-green-400';
  const {user,logOut} = useContext(AuthContext);

  return (
    <Navbar className='font-bold'>
      <NavLink to = "/" className='flex'>
        <img width={20} src="images/utensils-solid.svg" alt="" />
        <span className="pl-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Books of Khalid</span>
      </NavLink>
      <div className="flex md:order-2">
        {
          user ? <p className='flex'><button className='flex gap-2 items-center text-white px-3 py-2 mr-2 bg-red-600 rounded-3xl' onClick={logOut}><img className='w-[30px] h-[30px] rounded-full' src={user.photoURL} alt='' />Logout</button></p>:
          <NavLink to = '/login'  className={({isActive})=>isActive?`px-4 py-2 rounded-3xl bg-green-400 text-white `:`${style} `}>login</NavLink>
        }

      </div>
      <Navbar className='flex justify-center md:w-2/3'>
        <NavLink to="/" className={({isActive})=>isActive?'text-blue-600 duration-500 rounded-full px-4 p-2 bg-blue-50 ':'text-black p-2'}><p className='flex gap-1'><img src='/All assets/building-regular.svg' width={15}/>Home</p></NavLink>
        {
          user && <NavLink to="/profile" className={({isActive})=>isActive?'text-blue-600 duration-500 rounded-full px-4 p-2 bg-blue-50':'text-black p-2'}>     <p className='flex gap-1'><img src='/All assets/user-regular.svg' width={15}/>Profile</p></NavLink>
        }
      </Navbar> 
    </Navbar>
  )
}

export default NavbarComp