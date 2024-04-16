import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../providers/AuthProvider'
import Spinner from '../components/Spinner';
import { Navigate } from 'react-router-dom';
import { update } from 'firebase/database';

function UpdateProfile() {
  const { user, loading } = useContext(AuthContext);  
  const [show,setShow] = useState(false)

  function updateName(e){
    e.preventDefault();
    const updatedName = e.target.name.value;
    console.log(updatedName)
    e.target.name.value = '';
  }

  function updateUrl(e){
    e.preventDefault();
    const updatedUrl = e.target.updateUrl.value;
    console.log(updatedUrl)
    e.target.updateUrl.value = '';
  }

  return (
    <div>
      <Helmet>
        <title>Estate | Update profile</title>
      </Helmet>
      
      {
        loading ? <Spinner /> :
        
        <div>
          {
            user ? 
            <div className='m-4'>
              <form>
                <p>Name: <span className='font-semibold'>{user.displayName}</span></p>
                <p>Email: <span className='font-semibold'>{user.email}</span></p>
                <p className='screen-max-w'>
                  PhotoUrl: <span className='font-semibold overflow-hidden inline-block max-w-full'>{user.photoURL}</span>
                </p>
              </form>


              <div className='text-center'>
                {
                  !show ? 
                  <button onClick={()=>setShow(!show)} className='px-4 py-2 rounded-3xl font-bold text-white bg-violet-400'>Update Information</button>
                  :
                  <div>
                      <form onSubmit={updateName} className='my-4'>
                        <input className='rounded-full mr-2' type="text" name="name" id="name" placeholder='Update your name' />
                        <button type='submit' className='px-4 py-2 rounded-3xl bg-blue-500 text-white'>Update</button>
                      </form>  
                      
                      <form onSubmit={updateUrl} className='my-4'>
                        <input className='rounded-full mr-2' type="text" name="url" id="updateUrl" placeholder='Update your photo url' />
                        <button type='submit' className='px-4 py-2 rounded-3xl bg-blue-500 text-white'>Update</button>
                      </form>  
                      
                      <button className='btn2' onClick={()=>setShow(!show)}>Done</button>  
                  </div>
                }
              </div>


            </div>
            :
            <Navigate to='/' />
          }
        </div>
        
      }
    </div>
  )
}

export default UpdateProfile
