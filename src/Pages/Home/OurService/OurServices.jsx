import React from 'react';
import serviceIcon from '../../../assets/service.png'
const OurServices = () => {
    const steps = [
        {
            title: "Express  & Standard Delivery",
            subtitle: 'We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.'
        },
        {
            title: "Nationwide Delivery",
            subtitle: 'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48- 72 hours.'
        },
        {
            title: "Fulfillment Solution",
            subtitle: 'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.'
        },
        {
            title: "Cash on Home Delivery",
            subtitle: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product. '
        },
        {
            title: "Corporate Service / Contract In Logistics",
            subtitle: 'Customized corporate services which includes warehouse and inventory management support.'
        },
        {
            title: "Parcel Return",
            subtitle: 'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.'
        },
    ]
    return (
        <div className='text-center px-10 py-10 bg-secondary rounded-2xl mt-15'>
            <div className="">
                <h3 className='text-white font-extrabold text-3xl mt-5 '>Our Services</h3>
                <p className='max-w-4xl mx-auto mt-3 text-gray-300'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
                {
                    steps.map((step,index) => <div key={index} className='bg-white hover:bg-primary rounded-2xl p-8 transition-all duration-300'>
                        <img src={serviceIcon} alt="booking Icon" className='w-12 mx-auto' />
                        <h2 className='font-bold text-secondary my-1'>{step.title}</h2>
                        <p className='text-gray-500'>{step.subtitle}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurServices;