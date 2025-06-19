import React from 'react';
import ButtonWithIcon from '../components/ButtonWithIcon';
import HeroImage from '../assets/images/hero/background.png';
import WallDesignImage from '../assets/images/hero/wallDesign.png';

const HeroSection = () => {
    return (
        <section
            className="relative w-full min-h-[80vh] bg-cover bg-center bg-no-repeat pt-25 md:pt-24 py-10 md:py-20 px-4 md:px-8 mt-22 md:mt-22 lg:h-[80vh]"
            style={{
                backgroundImage: `url(${HeroImage})`,
            }}
        >
            <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center text-white relative z-10">
                <p className="text-xs md:text-sm font-semibold text-[#796F51] tracking-wide uppercase mb-2">
                    Elegant Spaces
                </p>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#161618] leading-tight mb-4">
                    Create Spaces That Inspire
                </h1>
                <p className="text-xs md:text-base text-[#7D7C7C] mb-6 max-w-md">
                    Nostra sit tempor placerat lectus. Mi diam porta dictumst magna. Augue hac eleifend metus dapibus.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-10 mb-6 md:mb-10 md:mt-5">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#161618]">32+</h2>
                        <p className="text-xs md:text-sm font-semibold uppercase text-[#161618]">Successful Projects</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#161618]">10+</h2>
                        <p className="text-xs md:text-sm font-semibold uppercase text-[#161618]">Years Experience</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#161618]">12K</h2>
                        <p className="text-xs md:text-sm font-semibold uppercase text-[#161618]">Happy Customers</p>
                    </div>
                </div>

                <ButtonWithIcon text="Know More" width="180px" height="44px" />
            </div>

            {/* Wall Design Label */}
            <div className="absolute bottom-[-5%] right-[32%] md:top-[50%] md:right-[7.5%] transform -translate-y-1/2 bg-black text-white rounded-xl shadow-lg p-2 flex items-center gap-2 z-20
               max-w-screen-xl w-[200px] lg:w-[220px] 2xl:w-[273px]
                h-auto md:h-20 lg:h-16 2xl:h-20
                px-3 sm:px-4 md:px-2 sm:bottom-0 
            ">
                <img
                    src={WallDesignImage}
                    alt="Wall Design"
                    className="w-14 h-12 sm:w-16 sm:h-14 lg:w-15 lg:h-10 2xl:w-20 2xl:h-15 object-cover rounded-md"
                />
                <div>
                    <h4 className="text-xs sm:text-sm md:text-xs font-bold leading-tight">Wall Design</h4>
                    <p className="text-[8px] sm:text-[10px] md:text-[px] lg:[10px] font-semibold text-gray-300 flex">Glamorous And Luxurious</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
