import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Register = () => {
    // axios
    const axiosSecure=useAxiosSecure();
    // location
    const location = useLocation();
    const navigate = useNavigate();
    // Auth context
    const { registerUser, updateUserProfile } = useAuth();
    // react hook form
    const { register, handleSubmit, formState: { errors } } = useForm();



    const handleRegister = (data) => {
        const profileImg = data.photo[0];

        // register
        registerUser(data.email, data.password)
            .then(() => {
                //1. store image in form data
                const formData = new FormData();
                formData.append('image', profileImg);

                //2. send the photo to store and get the url
                const img_API_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

                axios.post(img_API_Url, formData)
                    .then(res => {
                        const photoURL= res.data.data.url;
                        console.log('name from register: ',data.name)
                        // create user in the database
                        const userInfo={
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoURL
                        }
                        axiosSecure.post('/users',userInfo)
                        .then(res=>{
                            if(res.data.insertedId){
                                console.log('user created in the database')
                            }
                        })

                        //3. update profile to firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoURL
                        }
                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log('user profile uploaded')
                                navigate(location?.state || '/')
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="card w-full max-w-sm shadow-2xl ">
                <div className="card-body">
                    <h1 className="text-3xl font-bold">Create an Account</h1>
                    <h3 className='text-xl text-secondary font-semibold'>Register with ZapShift</h3>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input
                                type="text"
                                {...register('name', {
                                    required: true,
                                })}
                                className="input"
                                placeholder="Name"
                            />
                            {errors.name?.type === 'required' && <p className='text-red-600'>Name is required</p>}

                            {/* image */}
                            <label className="label">Photo </label>
                            <input
                                type="file"
                                {...register('photo', {
                                    required: true
                                })}
                                className="file-input"
                                placeholder="Photo"
                            />
                            {errors.photo?.type === 'required' && <p className='text-red-600'>Photo is required</p>}

                            {/* email */}
                            <label className="label">Email</label>
                            <input
                                {...register('email', { required: true })}
                                type="email"
                                className="input"
                                placeholder="Email"
                            />
                            {errors.email?.type === 'required' && <p className='text-red-600'>Email is required</p>}

                            {/* password */}
                            <label className="label">Password</label>
                            <input
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

                                })}
                                type="password"
                                className="input"
                                placeholder="Password"
                            />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password is 6 character or longer</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one uppercase, one lowercase , one number and a special character!</p>}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-primary mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className='text-center'>Don't have an account? <Link
                        state={location?.state}
                        to='/login'><span className='text-primary hover:underline'>Login</span></Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;