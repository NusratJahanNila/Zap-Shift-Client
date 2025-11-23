import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { ClimbingBoxLoader } from "react-spinners";

const Payment = () => {
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
        <div className="">
            <h2>Please Pay For: {parcel.parcelName}</h2>
        </div>
    );
};

export default Payment;