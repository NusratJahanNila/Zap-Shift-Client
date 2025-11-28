import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';
import Forbidden from '../../Components/Forbidden/Forbidden';
import { ClimbingBoxLoader } from 'react-spinners';

const AdminRoute = ({children}) => {
    const {loading}=useAuth();
    const {role,roleLoading}=useRole();
    
    if(loading || roleLoading){
        return <ClimbingBoxLoader color='#CAEB66' className='mx-auto min-h-[50vh] '/>
    }
    if(role !== 'admin'){
        return <Forbidden/>
    }

    return children;
};

export default AdminRoute;