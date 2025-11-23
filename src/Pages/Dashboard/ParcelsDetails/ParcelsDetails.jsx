import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { ClimbingBoxLoader } from "react-spinners";

const ParcelsDetails = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();

    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`)
            return res.data
        },
    })
    if (isLoading) {
        return <ClimbingBoxLoader color='#CAEB66' className='mx-auto min-h-[50vh] ' />
    }
    return (
        <div className=' max-w-5xl mx-auto py-5'>
            <div className="bg-white rounded-2xl p-4">
                <h2 className='text-2xl text-secondary font-bold px-5'>Parcel Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5  ">
                    {/* Sender */}
                    <div className="bg-base-300 p-5 rounded-2xl space-y-2">
                        <h2 className='text-lg font-bold text-secondary mb-3'>Sender's Details</h2>
                        <p className='text-gray-600 font-semibold'>Sender's Name: <span className='text-sm text-black'>{parcel.senderName}</span></p>
                        <p className='text-gray-600 font-semibold'>Sender's Email: <span className='text-sm text-black'>{parcel.senderEmail}</span></p>
                        <p className='text-gray-600 font-semibold'>Sender's Phone: <span className='text-sm text-black'>{parcel.senderPhone}</span></p>
                        <p className='text-gray-600 font-semibold'>Sender's Region: <span className='text-sm text-black'>{parcel.senderRegion}</span></p>
                        <p className='text-gray-600 font-semibold'>Sender's District: <span className='text-sm text-black'>{parcel.senderDistrict}</span></p>
                    </div>
                    {/* receiver */}
                    <div className="bg-base-300 p-5 rounded-2xl space-y-2">
                        <h2 className='text-lg font-bold text-secondary mb-3'>Receiver's Details</h2>
                        <p className='text-gray-600 font-semibold'>Receiver's Name: <span className='text-sm text-black'>{parcel.receiverName}</span></p>
                        <p className='text-gray-600 font-semibold'>Receiver's Email: <span className='text-sm text-black'>{parcel.receiverEmail}</span></p>
                        <p className='text-gray-600 font-semibold'>Receiver's Phone: <span className='text-sm text-black'>{parcel.receiverPhone}</span></p>
                        <p className='text-gray-600 font-semibold'>Receiver's Region: <span className='text-sm text-black'>{parcel.receiverRegion}</span></p>
                        <p className='text-gray-600 font-semibold'>Receiver's District: <span className='text-sm text-black'>{parcel.receiverDistrict}</span></p>
                    </div>
                    {/* Parcel */}
                    <div className="bg-base-300 p-5 rounded-2xl space-y-2">
                        <h2 className='text-lg font-bold text-secondary mb-3'>Parcel's Details</h2>
                        <p className='text-gray-600 font-semibold'>Parcel's Name: <span className='text-sm text-black'>{parcel.parcelName}</span></p>
                        <p className='text-gray-600 font-semibold'>Parcel's Type: <span className='text-sm text-black'>{parcel.parcelType}</span></p>
                        <p className='text-gray-600 font-semibold'>Parcel's Weight: <span className='text-sm text-black'>{parcel.parcelWeight} (KG)</span></p>
                        <p className='text-gray-600 font-semibold'>Pickup Instruction: <span className='text-sm text-black'>{parcel.senderTxt}</span></p>
                        <p className='text-gray-600 font-semibold'>Delivery Instruction: <span className='text-sm text-black'>{parcel.receiverTxt}</span></p>
                        <p className='text-gray-600 font-semibold'>Delivery Cost: <span className='text-sm text-black'>{parcel.cost}</span></p>
                        <p className='text-gray-600 font-semibold'>Parcel's Request: <span className='text-sm text-black'>{parcel.createdAt}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParcelsDetails;