import React from 'react';
import ButtonWithIcon from '../components/ButtonWithIcon';
import HeroImage from '../assets/images/hero/background.png';
import WallDesignImage from '../assets/images/hero/wallDesign.png';

const HeroSection = () => {
    return (
        <section
            className="relative w-full h-[90%] bg-cover bg-center bg-no-repeat py-10 md:py-20 px-4 md:px-8"
            style={{
                backgroundImage: `url(${HeroImage})`,
            }}
        >
            <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center text-white relative z-10">
                <p className="text-xs md:text-sm font-semibold text-[#796F51] tracking-wide uppercase mb-2">
                    Elegant Spaces
                </p>
                <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-[#161618] leading-tight mb-4">
                    Create Spaces That Inspire
                </h1>
                <p className="text-xs md:text-base text-[#7D7C7C] mb-6 max-w-lg">
                    Nostra sit tempor placerat lectus. Mi diam porta dictumst magna. Augue hac eleifend metus dapibus.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-10">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#161618]">32+</h2>
                        <p className="text-xs md:text-sm font-semibold uppercase text-[#161618]">Successful Projects</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#161618]">10+</h2>
                        <p className="text-xs md:text-sm font-semibold uppercase text-[#161618]">Years Experience</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#161618]">12K</h2>
                        <p className="text-xs md:text-sm font-semibold uppercase text-[#161618]">Happy Customers</p>
                    </div>
                </div>

                <ButtonWithIcon text="Know More" width="180px" height="44px" />
            </div>

            {/* Wall Design Label */}
            <div className="absolute top-[50%] right-[4%] transform -translate-y-1/2 bg-black text-white rounded-xl shadow-lg p-2 flex items-center gap-2 w-[180px] sm:w-[220px] z-20">
                <img
                    src={WallDesignImage}
                    alt="Wall Design"
                    className="w-10 h-10 object-cover rounded-md"
                />
                <div>
                    <h4 className="text-xs sm:text-sm font-bold leading-tight">Wall Design</h4>
                    <p className="text-[10px] sm:text-xs font-normal text-gray-300">Glamorous And Luxurious</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
