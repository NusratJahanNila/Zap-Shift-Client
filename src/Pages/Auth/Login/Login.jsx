import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    // location
    const location=useLocation();
    console.log('in the login page:',location)
    const navigate=useNavigate();

    // auth
    const {loginUser,setLoading}=useAuth();
    const {register,handleSubmit,formState: { errors }}=useForm();
    const handleLogin=(data)=>{
        console.log(data);
        loginUser(data.email,data.password)
        .then(result=>{
            console.log(result)
            setLoading(false)
            navigate(location?.state || '/')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold">Welcome back!</h1>
                    <h3 className='text-xl text-secondary font-semibold'>Login with ZapShift</h3>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                {...register('email',{
                                    required:true,

                                })}
                                className="input"
                                placeholder="Email"
                            />
                            {errors.email?.type==='required' && <p className='text-red-600'>Email is required</p>}

                            <label className="label">Password</label>
                            <input
                                type="password"
                                {...register('password',{
                                    required:true,
                                })}
                                className="input"
                                placeholder="Password"
                            />
                            {errors.password?.type==='required' && <p className='text-red-600'>Password is required</p>}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-primary mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className='text-center'>Don't have an account? <Link
                    state={location?.state}
                    to='/register'><span className='text-primary hover:underline'>Register</span></Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;