import React from 'react';
import live_tracking from '../../../assets/live-tracking.png'
import safe_delivery from '../../../assets/safe-delivery.png'
const Delivery = () => {
    const steps = [
        {
            image: live_tracking,
            title: "Live Parcel Tracking",
            subtitle: 'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment`s journey and get instant status updates for complete peace of mind.'
        },
        {
            image: safe_delivery,
            title: "100% Safe Delivery",
            subtitle: 'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.'
        },
        {
            image: safe_delivery,
            title: "24/7 Call Center Support",
            subtitle: 'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.'
        }
    ]

    return (
        <div className='px-15 pb-10'>
            <div className="border-gray-400 w-full  border-dashed border"></div>
            <div className="grid grid-cols-1 gap-5 my-20">
                {
                    steps.map((step,index) => <div key={index} className='bg-white rounded-2xl p-8 flex items-center gap-5'>
                        <img src={step.image} alt="booking Icon" className='w-20' />
                        <div className="border-gray-400 h-full  border-dashed border"></div>
                        <div className="">
                            <h2 className='font-bold text-secondary my-1'>{step.title}</h2>
                            <p className='text-gray-500'>{step.subtitle}</p>
                        </div>
                    </div>)
                }
            </div>
            <div className="border-gray-400 w-full  border-dashed border"></div>
        </div>
    );
};

export default Delivery;