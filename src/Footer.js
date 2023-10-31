import React from "react";
import { FaLinkedin, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from './media/logo.png';
import bgStars from './media/bgstars.png';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const Footer = () => {
    return (
        <Controller>
            <Scene duration={400} triggerHook="onEnter">
                <Tween from={{ y: '-100px', opacity: 0 }} to={{ y: '0', opacity: 1 }}>
                    <div className="w-full mx-auto text-center pt-10 pb-4" style={{ backgroundImage: `url(${bgStars})` }}>
                        <h1 className="text-gray-300 mb-5 font-semibold text-3xl px-6">Want to build something?<br></br><span className="text-[#22f5c4] text-2xl">Get in touch.</span></h1>
                        <div className="flex justify-center mt-4 mb-8">
                            <a href="https://www.facebook.com/cratercobd/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook
                                    size={30}
                                    className="text-white hover:scale-105 duration-10 mx-2 hover:text-[#22f5c4]"
                                />
                            </a>
                            <a href="https://www.linkedin.com/company/craterco/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin
                                    size={30}
                                    className="text-white hover:scale-105 duration-10 mx-2 hover:text-[#22f5c4]"
                                />
                            </a>
                            <a href="https://wa.me/8801755588770?text=Hello%2C+I+have+a+project+in+mind." target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp
                                    size={30}
                                    className="text-white hover:scale-105 duration-10 mx-2 hover:text-[#22f5c4]"
                                />
                            </a>

                        </div>
                        <h1 className="text-sm text-gray-400 mb-8">
                            © Crater Co 2023. All rights reserved.
                        </h1>
                    </div>
                </Tween>
            </Scene>
        </Controller>
    );
};

export default Footer;
