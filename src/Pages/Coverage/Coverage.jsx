import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';


const Coverage = () => {
    const serviceCenter = useLoaderData();
    console.log(serviceCenter);
    // kon position a map boshate chao
    const position = [23.6850, 90.3563]
    const mapRef=useRef(null);

    // search
    const handleSearch= e=>{
        e.preventDefault();
        const location=e.target.location.value;
        const district=serviceCenter.find(c=>c.district.toLowerCase().includes(location.toLowerCase()));
        if(district){
            const coordinate= [district.latitude, district.longitude];
            // console.log(coordinate,district)
            mapRef.current.flyTo(coordinate,14)
        }
    }
    return (
        <div className="m-10">
            <div className='p-10 rounded-2xl space-y-3 bg-white'>
            <h2 className='text-secondary text-2xl font-bold'>We are available in 64 districts</h2>
            {/* search */}
            <div className="my-5">
                <form onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input 
                        type="search" 
                        className="grow rounded-2xl" 
                        placeholder="Search" 
                        name='location'
                        />
                    </label>
                </form>
            </div>
            {/* Map */}
            <div className=" w-full h-[600px] rounded-2xl">
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={false}
                    className='h-[600px]'
                    ref={mapRef}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serviceCenter.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
                            <Popup>
                                <strong>{center.district}</strong> <br />
                                <p>Service Area: {center.covered_area.join(', ')}</p>
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
        </div>
    );
};

export default Coverage;