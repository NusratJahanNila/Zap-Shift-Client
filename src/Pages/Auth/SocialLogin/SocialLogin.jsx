import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const SocialLogin = () => {
    // axios
    const axiosSecure = useAxiosSecure();
    // location
    const location = useLocation();
    const navigate = useNavigate();

    // auth
    const { googleLogin } = useAuth();
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)

                // create user in the database
                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL
                }
               axiosSecure.post('/users', userInfo)
                    .then(res => {
                        console.log('user data has been stored', res.data)
                        navigate(location.state || '/');
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <button onClick={handleGoogleLogin} className='btn bg-white hover:bg-base-300'><FcGoogle />Login with Google</button>
    );
};

export default SocialLogin;