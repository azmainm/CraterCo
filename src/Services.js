import React from 'react';
import './Services.css';
import { FaMeteor } from 'react-icons/fa'; // Import the FaMeteor icon
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const Services = () => {
    const services = [
        "Front End Development",
        "Full Stack Web Development",
        "UI/UX Services",
        "Graphic Design",
        "Data Analytics",
        "Webscraping",
        "AI Product Development",
        "Automation"
    ];

    return (
        <Controller>
            <Scene duration={700} triggerHook="onEnter">
                <Tween from={{ y: '-100px', opacity: 0 }} to={{ y: '0', opacity: 1 }}>
                    <div className="services-container">
                        <h1>We <span className="text-[#f97316]">Offer</span></h1>
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
