import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';
import { ClimbingBoxLoader } from 'react-spinners';
import Forbidden from '../../Components/Forbidden/Forbidden';

const RiderRoute = ({children}) => {
    const {loading,user}=useAuth();
    const {role,roleLoading}=useRole();
    
    if(loading || !user || roleLoading){
        return <ClimbingBoxLoader color='#CAEB66' className='mx-auto min-h-[50vh] '/>
    }
    if(role !== 'rider'){
        return <Forbidden/>
    }

    return children;
};

export default RiderRoute;