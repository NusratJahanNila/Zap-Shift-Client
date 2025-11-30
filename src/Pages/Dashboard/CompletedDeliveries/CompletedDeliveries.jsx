import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CompletedDeliveries = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    // query for parcels
    const { data: parcels = [],  } = useQuery({
        queryKey: ['parcels', user?.email, 'driver_assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/riders?riderEmail=${user?.email}&deliveryStatus=parcel_deliverd`)

            return res.data;
        }
    })

    // Riders payment calculate
    const calculatePayout=(parcel)=>{
        if(parcel.senderDistrict===parcel.receiverDistrict){
            return parcel.cost * 0.8;
        }
        else{
            return parcel.cost * 0.6;
        }
    }
    return (
        <div className=' max-w-6xl mx-auto py-5'>
            <div className="bg-white rounded-2xl p-4">
                <h2 className='text-2xl text-secondary font-bold'>Completed Deliveries : <span className='text-black text-sm'>{parcels.length}</span></h2>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Pickup District</th>
                                <th>Created At</th>
                                <th>Cost</th>
                                <th>Payout</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parcels.map((parcel, index) => <tr key={parcel._id}>
                                    <th>{index + 1}</th>
                                    <td>{parcel.parcelName}</td>
                                    <td>{parcel.senderDistrict}</td>
                                    <td>{parcel.createdAt}</td>
                                    <td>{parcel.cost}</td>
                                    <td>{calculatePayout(parcel)}</td>
                                    <td>
                                        <button className="btn bg-primary ">Cash Out</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompletedDeliveries;