import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import bgStars from './media/bgstars.png';

const Mission = () => {
    return (
        <div id="mission">
            <div className='mission' style={{ backgroundImage: `url(${bgStars}) ` }}>
                <div className="text-white flex flex-col justify-center items-center py-32">

                    <Controller>
                        <Scene duration={500} triggerHook="onEnter">
                            <Tween from={{ y: '-100px', opacity: 0 }} to={{ y: '0', opacity: 1 }}>
                                <h1 className="md:text-6xl sm:text-6xl text-4xl font-bold mb-4 text-gray-300 shadow-2xl text-center px-10">
                                    Leaving a <span className="text-[#22f5c4]">Dent</span>
                                </h1>

                                <h3 className="md:text-3xl sm:text-2xl text-center text-md font-semibold text-gray-400 shadow-xl mb-5 mt-2">
                                    Beginning with Bangladesh
                                </h3>
                                <p className="md:text-lg sm:text-2xl font-light text-center max-w-[800px] mx-auto mb-10 px-14">
                                    Our mission transcends mere existence; it's about creating a range of products that ripple through our society, fostering change, and echoing our commitment to make a significant difference. We believe in the power of innovation to reshape our world, one product at a time.
                                </p>
                            </Tween>
                        </Scene>
                    </Controller>

                </div>
            </div>
        </div>
    )
}

export default Mission;
