import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Properties() {
    function notify(){
        toast.success('success')
    }
    return (

        <div>
            <Helmet>
                <title>Estate | Home</title>
            </Helmet>

            Properties
            <button className='m-4' onClick={notify}>click</button>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Properties