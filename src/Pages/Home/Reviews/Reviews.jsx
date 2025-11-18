import React, { use } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import customer_top from '../../../assets/customer-top.png'
const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise)
    console.log(reviews);
    return (
        <div className="my-15">
            <div className="text-center mb-5">
                <img src={customer_top} alt="" className='mx-auto' />
                <h2 className='text-secondary font-extrabold text-3xl mt-5 '>What our customers are sayings</h2>
                <p className='max-w-4xl mx-auto mt-3 text-gray-500'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale: 0.75,
                        slideShadows: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    modules={[EffectCoverflow,Autoplay]}
                    className="mySwiper"
                >
                    {
                        reviews.map((review) => <SwiperSlide key={review.id}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>)
                    }

                </Swiper>
            </>
        </div>
    );
};

export default Reviews;