import React from 'react';
import error404 from '../../assets/error404.png'
import { Link } from 'react-router';
const Error404 = () => {
    return (
        <div className='flex flex-col gap-3 justify-center items-center'>
            <img src={error404} alt="" className='w-40 bg-white p-5 shadow-lg mt-50'/>
            <Link to='/'>
                <button className='btn bg-primary rounded-2xl'>Go Home</button>
            </Link>
        </div>
    );
};

export default Error404;