import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <div className="grid grid-cols-2 ">
                <div className="bg-base-100">
                    <Logo></Logo>
                    <Outlet></Outlet>
                </div>
                <div className=" bg-primary/20">
                    <img src={authImage} alt="authImage" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;