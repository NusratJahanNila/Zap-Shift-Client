import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';
const Brands = () => {
    const brands = [amazon, casio, moonstar, randstad, star, start_people]
    return (
        <div className="">
            <h2 className='text-secondary font-bold text-2xl my-5 text-center'>We've helped thousands of sales teams</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
            >
                {
                    brands.map((brand, index) => <SwiperSlide key={index}>
                        <img src={brand} alt="" />
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Brands;