import React, { useState, useEffect } from 'react';
import './Hero.css';
import imageSrcDesktop from './media/wp.png';
import imageSrcTablet from './media/tab.png';
import imageSrcPhone from './media/phone.png';
import { FaMeteor, FaGlobeAmericas } from 'react-icons/fa';

const Hero = () => {
    const [imageSrc, setImageSrc] = useState(imageSrcDesktop);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                setImageSrc(imageSrcPhone);
            } else if (width <= 768) {
                setImageSrc(imageSrcTablet);
            } else {
                setImageSrc(imageSrcDesktop);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero">
            <img src={imageSrc} alt="hero" className="background-video" />
            <div className="hero__down-arrow">
                <FaMeteor size="6em" className="meteor-icon" onClick={() => handleClick('mission')} />
                <FaGlobeAmericas size="6em" className="earth-icon" onClick={() => handleClick('products')} />
            </div>
        </div>
    );
};

export default Hero;







{/* <video className="background-video" autoPlay muted loop>
    <source src={videoSrc} type="video/mp4" />
    Your browser does not support the video tag.
</video> */}