import React, { useContext, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Spinner from '../components/Spinner';



function ProfilePage() {
    const {user,loading,logOut} = useContext(AuthContext);
    const [imgAvailable,setImgAvailable] = useState(true);

    function handleError(){
        setImgAvailable(false);
    }

    return(
        <div>
        <Helmet>
            <title>Estate | User profile</title>
        </Helmet>
        {
            loading ? <Spinner></Spinner> : 
            <div>
                {
                    user ? 
                    <div className='text-center my-8'>
                            <p className='flex justify-center m-4'>
                                {user?.photoURL?<img className='p-1 border-green-400 border-4 rounded-full w-[40px] h-[40px]' src= {imgAvailable?user.photoURL:'/All assets/user-regular.svg'} onError={handleError} alt="" />:"No picture available"}
                            </p>
                            <p>{user.email}</p>
                            <p>{user?.displayName?user.displayName:'User name is not registered'}</p>
                            <button className='btn2 m-4' onClick={logOut}> Logout</button>
                    </div> 
                    
                    :

                    <p><Navigate to = '/'></Navigate></p>
                }
            </div>
        }
        </div>
    )
}

export default ProfilePage