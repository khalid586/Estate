import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({children}) {
    const {user} = useContext(AuthContext);
    const {pathname} = useLocation();
    if(user){
        return children;
    }

    return <Navigate state = {pathname} to = '/login'></Navigate>
}

export default ProtectedRoute