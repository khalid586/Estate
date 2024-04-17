import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import { FaG } from 'react-icons/fa6';
import { FaGithub } from "react-icons/fa";


function LoginPage() {
    const {signIn,setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email,password)
            .then(()=>{
                toast.success('Login Successful')
                setTimeout(()=>{
                    navigate(location?.state?location.state:'/')
                },2000)
            })
            .catch(error =>{toast.error(error.message); setLoading(false)})
    }

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const githubProvier = new GithubAuthProvider();

    const handleGoogleSignIn = (method) => {

        if(method == 'google'){
            signInWithPopup(auth,provider)
                .then(()=>{
                    toast.success('Login Successful')
                    setTimeout(()=>{
                        navigate(location?.state?location.state:'/')
                    },1500)
                })
                .catch(error => {toast.error(error.message); setLoading(false)})
        }else{
            signInWithPopup(auth,githubProvier)
                .then(()=>{
                    toast.success('Login Successful')
                    setTimeout(()=>{
                        navigate(location?.state?location.state:'/')
                    },1500)
                })
                .catch(error => {toast.error(error.message); setLoading(false)})
        }
    }


    return (
        <>
            <Helmet>
                <title>
                    Estate | Login
                </title>
            </Helmet>
            <div className='text-center text-4xl my-4 font-bold'>Login</div>

            <form onSubmit={handleLogin} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                {/* <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div> */}

                <p className='my-4 font-semibold text-gray-400'>Don't have an account? <Link state={location.state} className='text-black underline' to = '/register'>Register</Link></p>
                <button type="submit" className="text-white bg-green-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            
            </form>
            <div className='flex-col flex items-center gap-2 text-center my-16 '>
                
                <button className='flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-400 px-4 py-2 font-semibold text-white' onClick={()=>handleGoogleSignIn('google')}><FaGoogle className='text-blue-600'></FaGoogle>Login with Google</button>
                <button className='flex items-center gap-2 rounded-xl bg-gray-800 hover:bg-gray-700 px-4 py-2 font-semibold text-white' onClick={()=>handleGoogleSignIn('github')}><FaGithub></FaGithub>Login with Github</button>
            </div>

            <ToastContainer></ToastContainer>
        </>
    )
}

export default LoginPage