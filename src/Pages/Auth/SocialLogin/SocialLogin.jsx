import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    // location
    const location=useLocation();
    const navigate=useNavigate();
    
    // auth
    const {googleLogin}=useAuth();
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            console.log(result)
            navigate(location?.state || '/')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <button onClick={handleGoogleLogin} className='btn bg-white hover:bg-base-300'><FcGoogle />Login with Google</button>
    );
};

export default SocialLogin;