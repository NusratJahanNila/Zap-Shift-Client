import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AssignedDeliveries = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    // query for parcels
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', user?.email, 'driver_assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/riders?riderEmail=${user?.email}&deliveryStatus=driver_assigned`)

            return res.data;
        }
    })
    // Accept
    const handleDeliveryStatusUpdate = (parcel, status) => {
        const statusInfo = {
            deliveryStatus: status,
            riderId: parcel.riderId
        }

        let message= `Parcel Status is updated with ${status.split('_').join(" ")}`

        axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    // console.log('btn clicked')
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: message,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    return (
        <div className="max-w-6xl mx-auto py-5">
            <div className="bg-white rounded-2xl p-4  ">
                <h2 className='text-2xl text-secondary font-bold'> Parcels Pending Pickup : <span className='text-black text-sm'>{parcels.length}</span></h2>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Parcel Name</th>
                                <th>Sender Name</th>
                                <th>Sender District</th>
                                <th>Action</th>
                                <th>Other Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parcels.map((parcel, index) => <tr key={parcel._id}>
                                    <th>{index + 1}</th>
                                    <td>{parcel.parcelName}</td>
                                    <td>{parcel.senderName}</td>
                                    <td>{parcel.senderDistrict}</td>
                                    <td className='space-x-1'>
                                        {
                                            parcel.deliveryStatus === 'driver_assigned' ? <>
                                                <button
                                                    onClick={() => handleDeliveryStatusUpdate(parcel, 'rider_arriving')}
                                                    className='btn bg-primary'>Accept
                                                </button>
                                                <button className='btn btn-warning'>Reject</button>
                                            </>
                                                :
                                                <span className='badge-success badge'>Accepted</span>
                                        }

                                    </td>
                                    <td className='space-x-1'>
                                        <button
                                            onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_picked_up')}
                                            className="btn bg-primary">Picked Up</button>
                                        <button
                                            onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_deliverd')}
                                            className="btn bg-primary">Delivered</button>
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

export default AssignedDeliveries;