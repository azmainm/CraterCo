import React from 'react';
import './Products.css';
import jackptImage from './media/jackpt.png';
import BHAI from './media/BHAI.png';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const Products = () => {
    return (
        <Controller>
            <Scene duration={800} triggerHook="onEnter">
                <Tween from={{ y: '-100px', opacity: 0 }} to={{ y: '0', opacity: 1 }}>
                    <div className="products-container">
                        <h1 className='text-4xl text-gray-300 font-bold mb-8'>Our <span className="text-[#22f5c4]">Meteorides</span></h1>
                        <div className="product">
                            <img src={jackptImage} alt="Jackpt" className="product-image" />
                            <p className="product-description">
                                Jackpt is a web application that provides a platform for users in Bangladesh to trade services and products without the exchange of money.
                            </p>
                            <p className="product-description">
                                Their mission is to build a dynamic, cashless marketplace that eliminates the coincidence of needs, encourages eco-friendly practices, and nurtures meaningful connections between individuals.
                            </p><br></br>
                            <a href="https://www.jackptbd.com" className="product-link">www.jackptbd.com</a>
                        </div>
                        <div className="product">
                            <img src={BHAI} alt="Bhai" className="product-image" />
                            <p className="product-description">
                                An easy-to-use app powered by generative AI that answers your questions in both English and Bengali. Just type your question in your preferred language, and get an instant response. This app makes digital assistance accessible and convenient for everyone, regardless of language preference.
                            </p>
                        </div>
                    </div>
                </Tween>
            </Scene>
        </Controller>
    );
};

export default Products;
