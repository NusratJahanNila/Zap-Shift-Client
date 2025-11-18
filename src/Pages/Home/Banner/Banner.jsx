import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
import { FaCircleArrowRight } from 'react-icons/fa6';
const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
        >
            <div className='relative w-full'>
                <img src={bannerImg1} className=''/>
                <div className="absolute bottom-10 lg:bottom-18 left-10 lg:left-18 flex gap-2 items-center p-3 rounded-xl ">
                    <button className='btn rounded-2xl  font-semibold bg-primary'>Track Your Percel</button>

                    <FaCircleArrowRight className='w-6 h-6 -rotate-45'/>

                    <button className='btn rounded-xl font-semibold '>Be A Rider</button>
                </div>
            </div>
            <div className='relative w-full'>
                <img src={bannerImg2} />
                <div className="absolute bottom-10 lg:bottom-18 left-10 lg:left-18 flex gap-2 items-center p-3 rounded-xl ">
                    <button className='btn rounded-2xl  font-semibold bg-primary'>Track Your Percel</button>

                    <FaCircleArrowRight className='w-6 h-6 -rotate-45'/>

                    <button className='btn rounded-xl font-semibold '>Be A Rider</button>
                </div>
            </div>
            <div className='relative w-full'>
                <img src={bannerImg3} />
                <div className="absolute bottom-10 lg:bottom-18 left-10 lg:left-18 flex gap-2 items-center p-3 rounded-xl ">
                    <button className='btn rounded-2xl  font-semibold bg-primary'>Track Your Percel</button>

                    <FaCircleArrowRight className='w-6 h-6 -rotate-45'/>

                    <button className='btn rounded-xl font-semibold '>Be A Rider</button>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;