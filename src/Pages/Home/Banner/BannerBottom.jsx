import React from 'react';
import location_merchant from '../../../assets/location-merchant.png'
const BannerBottom = () => {
    return (
        <div className="hero bg-secondary p-15 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={location_merchant}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-white text-2xl font-bold">Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
                    <p className="py-6 text-gray-400">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className="flex gap-3">
                        <button className="btn btn-primary rounded-2xl text-black">Become a Merchant</button>
                        <button className="btn btn-outline border border-primary rounded-2xl text-white hover:text-black">Earn with ZapShift Courier</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;