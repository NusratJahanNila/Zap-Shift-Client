import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import { ClimbingBoxLoader } from "react-spinners";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    // location
    const location=useLocation();
    // console.log(location);

    if(loading){
        return <ClimbingBoxLoader color='#CAEB66' className='mx-auto min-h-[50vh] '/>
    }
    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return  children; 
};

export default PrivateRoute;