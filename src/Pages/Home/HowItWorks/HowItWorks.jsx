import React from 'react';
import bookingIcon from '../../../assets/bookingIcon.png'
const HowItWorks = () => {
    const steps = [
        {
            title: "Booking Pick & Drop",
            subtitle: 'From personal packages to business shipments — we deliver on time, every time.'
        },
        {
            title: "Cash On Delivery",
            subtitle: 'From personal packages to business shipments — we deliver on time, every time.'
        },
        {
            title: "Delivery Hub",
            subtitle: 'From personal packages to business shipments — we deliver on time, every time.'
        },
        {
            title: "Booking SME & Corporate",
            subtitle: 'From personal packages to business shipments — we deliver on time, every time. '
        }
    ]
    return (
        <div className='px-15 pt-5'>
            <h3 className='text-secondary font-extrabold text-2xl my-3'>How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {
                    steps.map((step,index) => <div key={index} className='bg-white rounded-2xl p-8'>
                        <img src={bookingIcon} alt="booking Icon" className='w-12' />
                        <h2 className='font-bold text-secondary my-1'>{step.title}</h2>
                        <p className='text-gray-500'>{step.subtitle}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HowItWorks;