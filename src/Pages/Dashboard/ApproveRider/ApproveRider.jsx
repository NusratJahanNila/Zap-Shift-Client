import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaRegTrashAlt, FaUserCheck } from "react-icons/fa";
import { MdGroupRemove } from "react-icons/md";

const ApproveRider = () => {
    // axios
    const axiosSecure = useAxiosSecure();
    // load data using tanstack query
    const { data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })
    // Approval
    const handleApproval=(id)=>{
        console.log(id);
    }
    return (
        <div className=' max-w-6xl mx-auto py-5'>
            <div className="bg-white rounded-2xl p-4">
                <h2 className='text-2xl text-secondary font-bold'>
                    Riders Pending Approval: <span className='text-gray-500'>{riders.length}</span>
                </h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>District</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                riders.map((rider,index)=><tr key={rider._id}>
                                <th>{index+1}</th>
                                <td>{rider.name}</td>
                                <td>{rider.email}</td>
                                <td>{rider.status}</td>
                                <td>{rider.riderDistrict}</td>
                                <td className='space-x-1.5'>
                                    <button onClick={()=>handleApproval(rider._id)} className='btn bg-primary '>
                                        <FaUserCheck />
                                    </button>
                                    <button className='btn bg-primary '>
                                        <MdGroupRemove />
                                    </button>
                                    <button className='btn bg-primary '>
                                        <FaRegTrashAlt />
                                    </button>
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

export default ApproveRider;