import React from 'react';
import { FaQuoteRight } from 'react-icons/fa6';
const ReviewCard = ({ review }) => {
    const { userName,user_photoURL,review:testimonial} = review;
    return (
        <div className="w-full max-w-sm p-6 rounded-xl shadow bg-white border border-gray-100">


            <FaQuoteRight className="text-teal-700 text-4xl mb-2" />

            <p className="text-gray-600 leading-relaxed mb-4">
               {testimonial}
            </p>

            <div className="border-t border-dotted border-gray-300 my-4"></div>

            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full">
                    <img src={user_photoURL} alt="" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">{userName}</h3>
                    <p className="text-sm text-gray-500">Senior Product Designer</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;