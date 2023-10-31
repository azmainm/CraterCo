import React from 'react';
import './Services.css';
import { FaMeteor } from 'react-icons/fa'; // Import the FaMeteor icon
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const Services = () => {
    const services = [
        "Web Development",
        "App Development",
        "UI/UX Design",
        "Graphic Design",
        "Motion Graphics",
        "Webscraping",
        "AI Product Development",
        "SAAS",
        "Automation"
    ];

    return (
        <Controller>
            <Scene duration={700} triggerHook="onEnter">
                <Tween from={{ y: '-100px', opacity: 0 }} to={{ y: '0', opacity: 1 }}>
                    <div className="services-container">
                        <h1 className='text-lg'>All Software <span className="text-[#22f5c4]">Solutions</span></h1>
                        <div className="services-columns">
                            <ul>
                                {services.map((service, index) => (
                                    <li key={index}><FaMeteor className="icon" />{service}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Tween>
            </Scene>
        </Controller>
    );
}

export default Services;
