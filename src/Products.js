import React from 'react';
import './Products.css';
import jackptImage from './media/jackpt.png';
import freepaniImage from './media/freepani.png';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const Products = () => {
    return (
        <Controller>
            <Scene duration={800} triggerHook="onEnter">
                <Tween from={{ y: '-100px', opacity: 0 }} to={{ y: '0', opacity: 1 }}>
                    <div className="products-container">
                        <h1 className='text-4xl text-gray-300 font-bold mb-8'>Our <span className="text-[#f97316]">Meteorides</span></h1>
                        <div className="product">
                            <img src={jackptImage} alt="Jackpt" className="product-image" />
                            <p className="product-description">
                                Jackpt is a web application that provides a platform for users in Bangladesh to trade services and products without the exchange of money.
                            </p><br></br>
                            <p className="product-description">
                                Our mission is to build a dynamic, cashless marketplace that eliminates the coincidence of needs, encourages eco-friendly practices, and nurtures meaningful connections between individuals.
                            </p><br></br>
                            <a href="https://www.jackptbd.com" className="product-link">www.jackptbd.com</a>
                        </div>
                        <div className="product">
                            <img src={freepaniImage} alt="FreePani" className="product-image" />
                            <p className="product-description">
                                FreePani's mission is to bring ads to everyone's hands while satisfying their thirst for free. We're dedicated to making water accessible for all. Together, we create a sustainable advertising experience for a better future.
                            </p>
                        </div>
                    </div>
                </Tween>
            </Scene>
        </Controller>
    );
};

export default Products;
