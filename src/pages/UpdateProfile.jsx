import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../providers/AuthProvider'
import Spinner from '../components/Spinner';
import { Navigate } from 'react-router-dom';
import { update } from 'firebase/database';
import { getAuth, updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function UpdateProfile() {
  const { user, loading } = useContext(AuthContext);  
  const [show,setShow] = useState(false)
  const auth = getAuth();

  
  const [name,setName] = useState('');
  const [photoUrl,setPhotoUrl] = useState('');

  useEffect(()=>{
    if(!loading && user){
      setName(user.displayName);
      setPhotoUrl(user.photoURL);
    }
  },[loading])


  function updateName(e){
    e.preventDefault();
    const updatedName = e.target.name.value;
    console.log(updatedName)
    e.target.name.value = '';

      updateProfile(auth.currentUser,{
        displayName:updatedName,
      }).then(()=>{
        toast.success('Name updated successfully')
        setName(updatedName);
      }).catch(error =>{
        toast.error(error.message)
      })
  }

  function updateUrl(e){
    e.preventDefault();
    const updatedUrl = e.target.updateUrl.value;
    console.log(updatedUrl)
    e.target.updateUrl.value = '';

    updateProfile(auth.currentUser,{
      photoURL:updatedUrl,
    }).then(()=>{
      toast.success('Photo url updated successfully')
      setPhotoUrl(updatedUrl);
    }).catch(error =>{
      toast.error(error.message)
    })
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
            <div className='m-4 md:text-center'>
              <p className='font-bold text-3xl'>Current Information</p>
              <form className='border-2 border-black m-4 rounded-lg p-4'>
                <p>Name: <span className='font-semibold'>{name}</span></p>
                <p>Email: <span className='font-semibold'>{user.email}</span></p>
                <p className='screen-max-w'>
                  PhotoUrl: <span className='font-semibold overflow-hidden inline-block max-w-full'>{photoUrl}</span>
                </p>
              </form>


              <div className='text-center'>
                {
                  !show ? 
                  <button onClick={()=>setShow(!show)} className='px-4 py-2 rounded-3xl font-bold text-white bg-green-400'>Update Information</button>
                  :
                  <div className=''>
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
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default UpdateProfile
