import React, { useState } from 'react';

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState('Story');

    const tabsData = [
        { name: 'Story', content: 'We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether its a personal gift or a time-sensitive business delivery, we ensure it reaches it is destination — on time, every time.\n We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it is a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.\n We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it is a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.' },

        { name: 'Mission', content: 'We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it is a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.' },

        { name: 'Success', content: 'We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it is a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.' },

        { name: 'Team & Others', content: 'We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it is a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.' },
    ];

    //tab-click
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className='max-w-7xl mx-auto p-15'>
            <div className=" mb-10">
                <h2 className='text-secondary text-2xl font-bold'>About Us</h2>
                <p className='text-gray-500'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br />packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div role="tablist" className="tabs tabs-lift  mt-10">
            
            {tabsData.map((tab) => (
                <React.Fragment key={tab.name}>
                    
                    <a
                        role="tab"
                        className={`tab ${activeTab === tab.name ? 'tab-active font-bold' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </a>

                    
                    {activeTab === tab.name && (
                        <div
                            className="tab-content border-base-300 bg-base-100 p-8 shadow-xl"
                        >
                            <h3 className="text-lg font-bold mb-4 text-secondary">{tab.name} Content</h3>
                            <p className='text-gray-700'>{tab.content}</p>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
        </div>
    );
};

export default AboutUs;