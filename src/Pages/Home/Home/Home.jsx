import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurService/OurServices';
import Brands from '../Brands/Brands';
import Delivery from '../Delivery/Delivery';
import BannerBottom from '../Banner/BannerBottom';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/FAQ';

const reviewsPromise=fetch('/reviews.json')
.then(res=>res.json());
const Home = () => {
    return (
        <div >
            <div className="mt-5">
                <Banner></Banner>
            </div>
            <div>
                <HowItWorks></HowItWorks>
            </div>
            <div>
                <OurServices></OurServices>
            </div>
            <div className="my-10">
                <Brands></Brands>
            </div>
            <div className="">
                <Delivery></Delivery>
            </div>
            <div className="">
                <BannerBottom></BannerBottom>
            </div>
            <div className="">
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
            </div>
            <div className="">
                <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;