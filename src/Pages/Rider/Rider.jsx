import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import riderImg from '../../assets/agent-pending.png'
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
const Rider = () => {
    // auth
    const { user } = useAuth();
    // axios api
    const axiosSecure = useAxiosSecure();
    const serviceCenters = useLoaderData();
    // react hook form
    const {
        register,
        control,
        handleSubmit,
    } = useForm();
    // duplicate rigions
    const regionsData = serviceCenters.map(centers => centers.region)
    // remove duplicate
    const regions = [...new Set(regionsData)];
    const riderRegion = useWatch({ control, name: "riderRegion" })
    // get districts of a particular region
    const districtsByRegion = region => {
        const regionDistricts = serviceCenters.filter(center => center.region === region);
        const districts = regionDistricts.map(d => d.district)
        return districts;
    }


    const handleRiderApplication = (data) => {
        console.log(data);
        axiosSecure.post('/riders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted.We will reach out soon!",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    };
    return (
        <div className="max-w-6xl mx-auto py-5">
            <div className="bg-white rounded-2xl p-4  ">
                <div className="mb-5 px-5">
                    <h2 className='text-2xl text-secondary font-bold'>Be A Rider</h2>
                    <p className='text-gray-500'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p> 
                </div>

                <section className="flex flex-col lg:flex-row items-start justify-between gap-10 py-10 px-5">

                    {/* LEFT FORM */}
                    <form
                        onSubmit={handleSubmit(handleRiderApplication)}
                        className="w-full lg:w-1/2 space-y-4"
                    >
                        <h2 className="text-2xl font-semibold mb-4">
                            Tell us about yourself
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                            {/* name */}
                            <input
                                defaultValue={user?.displayName || ''}
                                {...register("name")}
                                className="input input-bordered w-full"
                                placeholder="Your Name"
                            />
                            {/* Licence */}
                            <input
                                {...register("licence")}
                                className="input input-bordered w-full"
                                placeholder="Your driving licence number"
                            />
                            {/* email */}
                            <input
                                defaultValue={user?.email || ''}
                                {...register("email")}
                                className="input input-bordered w-full"
                                placeholder="Your Email"
                            />

                            {/* district */}
                            <select {...register('riderRegion', { required: true })} className="select w-full">
                                <option value="">Select Your Region</option>
                                {regions.map((region, index) => (
                                    <option key={index} value={region}>{region}</option>
                                ))}
                            </select>

                            <select {...register('riderDistrict', { required: true })} className="select w-full">
                                <option value="">Select Your District</option>
                                {riderRegion &&
                                    districtsByRegion(riderRegion).map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))
                                }
                            </select>

                            {/* nid */}
                            <input
                                {...register("nid")}
                                className="input input-bordered w-full"
                                placeholder="NID"
                            />

                            {/* contact */}
                            <input
                                {...register("contact")}
                                className="input input-bordered w-full"
                                placeholder="Contact"
                            />

                            {/* bike model */}
                            <input
                                {...register("model")}
                                className="input input-bordered w-full"
                                placeholder="Bike Brand Model and Year"
                            />

                            {/* bike register Number */}
                            <input
                                {...register("bikeRegisterNum")}
                                className="input input-bordered w-full"
                                placeholder="Bike Registration Number"
                            />

                            {/* about */}
                            <textarea rows={3} cols={5} {...register('aboutRider')} className='border border-gray-200 p-2 rounded-lg' placeholder='Tell Us About Yourself'></textarea>
                        </div>


                        <button className="btn w-full bg-primary mt-4">
                            Apply As A Rider
                        </button>
                    </form>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={riderImg}
                            alt="delivery rider"
                            className="w-full max-w-sm object-contain"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Rider;