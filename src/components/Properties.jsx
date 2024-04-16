import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Properties() {

    return (

        <div>
            <Helmet>
                <title>Estate | Home</title>
            </Helmet>

            Properties
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Properties