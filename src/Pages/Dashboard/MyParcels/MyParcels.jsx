import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Swal from 'sweetalert2';

const MyParcels = () => {
    // userdata
    const { user } = useAuth();
    // axios
    const axiosSecure = useAxiosSecure();
    // tanstack
    const { data: parcels = [] ,refetch} = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    })

    // delete
    const handleParcelDelete = (id) => {
        console.log(id);
        // alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // fetch delete
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log('after delete: ', res.data);
                        if (res.data.deletedCount) {
                            // refresh data on ui
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div>
            my parcels : {parcels.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.cost}</td>
                                <td>{'pending'}</td>
                                <td className='space-x-1.5'>
                                    {/* view */}
                                    <button className='btn btn-square hover:bg-primary'>
                                        <FaMagnifyingGlass />
                                    </button>
                                    {/* edit */}
                                    <button className='btn btn-square hover:bg-primary'>
                                        <FiEdit />
                                    </button>
                                    {/* delete */}
                                    <button
                                        onClick={() => handleParcelDelete(parcel._id)}
                                        className='btn btn-square hover:bg-primary'>
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;