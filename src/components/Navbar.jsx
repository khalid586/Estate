import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Button, Navbar } from 'flowbite-react';
import { AuthContext } from '../providers/AuthProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavbarComp() {

  const style = 'rounded-3xl px-4 py-2 border-2 border-green-400';
  const {user,logOut} = useContext(AuthContext);

  return (
    <>    
        <Navbar className='font-bold text-xs md:text-base'>
            <NavLink to = "/" className='flex'>

                <span className="pl-2 self-center whitespace-nowrap text-base md:text-xl font-semibold dark:text-white">Estate</span>
            </NavLink>
            <Navbar className='flex justify-center md:w-2/3'>
                <NavLink to="/" className={({isActive})=>isActive?'text-blue-600 duration-500 rounded-full px-4 p-2 bg-blue-50 ':'text-black p-2'}><p className='flex gap-1'><img src='/All assets/building-regular.svg' width={15}/>Home</p></NavLink>
                {
                    user && <NavLink to="/update" className={({isActive})=>isActive?'text-blue-600 duration-500 rounded-full px-4 p-2 bg-blue-50':'text-black p-2'}>     <p className='flex gap-1'><img src='/All assets/user-regular.svg' width={15}/>Update</p></NavLink>
                }
            </Navbar> 
            <div className="flex md:order-2">
            {
                user ? <Link to = '/profile' className='flex'><img className='w-[30px] h-[30px] rounded-full' src={user.photoURL} alt='' /></Link>:
                <NavLink to = '/login'  className={({isActive})=>isActive?`px-4 py-2 rounded-3xl bg-green-400 text-white `:`${style} `}>login</NavLink>
            }
            </div>

        </Navbar>
    </>
  )
}

export default NavbarComp