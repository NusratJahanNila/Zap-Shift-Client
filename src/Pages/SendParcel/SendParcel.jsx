import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSendParcel = (data) => {
        console.log(data)
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className='max-w-5xl mx-auto p-5 my-5 bg-white'>
                <h2>Send Parcel</h2>
                <p>Enter your parcel details</p>
                <form onSubmit={handleSubmit(handleSendParcel)}>
                    {/* sec-1 */}
                    <div className="">
                        {/* check box */}
                        <div className="">
                            <label >
                                <input type="radio" name="radio-7" className="radio" defaultChecked value="document" /> Document
                            </label>
                            <label>
                                <input type="radio" name="radio-7" className="radio " />
                                Non-Document
                            </label>
                        </div>
                        {/* parcel details */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            <div className="grid grid-cols-1 mt-1">
                                <label className="label">Parcel Name</label>
                                <input type="text" className="input w-full" placeholder="Parcel Name" />
                            </div>
                            <div className="grid grid-cols-1">
                                <label className="label">Parcel Weight (KG)</label>
                                <input type="text" className="input w-full" placeholder="Parcel Weight (KG)" />
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 mt-5"></div>
                    {/* sec-2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
                        {/* sender details */}
                        <div className="border">
                            <div className="card-body">
                                <h1 className="text-secondary font-bold">Sender's Details</h1>
                                <fieldset className="fieldset">
                                    <label className="label">Sender's name</label>
                                    <input type="email" className="input" placeholder="Email" />

                                    <label className="label">Address</label>
                                    <input type="email" className="input" placeholder="Email" />

                                    <label className="label">Sender Phone No</label>
                                    <input type="email" className="input" placeholder="Email" />

                                    <label className="label">Your District</label>
                                    <input type="email" className="input" placeholder="Email" />

                                    <label className="label">Pickup Instruction</label>
                                    <input type="password" className="input" placeholder="Password" />
                                </fieldset>
                            </div>
                        </div>
                        {/* receiver details */}
                        <div className="border">
                            <div className="card-body">
                                <h1 className="text-secondary font-bold">Receiver Details</h1>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendParcel;