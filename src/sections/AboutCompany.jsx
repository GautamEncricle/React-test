import React, { useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import ServiceItem from '../components/ServiceItem';

// Image assets hosted on Imgur for easy use.
// In a real project, you would typically place these in your `public` folder or import them.
import buddhaImage from '../assets/images/about/about-img1.png';
import candleImage from '../assets/images/about/about-img2.png';
import vaseImage from '../assets/images/about/about-img3.png';

// Import service icons properly
import planningIcon from '../assets/images/about/plaining.png';
import woodworkIcon from '../assets/images/about/woodwork.png';
import furnishingIcon from '../assets/images/about/furnishing.png';
import consultationIcon from '../assets/images/about/consultation.png';
import installationIcon from '../assets/images/about/installation.png';
import partitioningIcon from '../assets/images/about/partitioning.png';

const servicesData = [
    {
        iconSrc: planningIcon,
        label: 'Planning',
    },
    {
        iconSrc: woodworkIcon,
        label: 'Woodwork',
    },
    {
        iconSrc: furnishingIcon,
        label: 'Furnishing',
    },
    {
        iconSrc: consultationIcon,
        label: 'Consultation',
    },
    {
        iconSrc: installationIcon,
        label: 'Installation',
    },
    {
        iconSrc: partitioningIcon,
        label: 'Partitioning',
    },
];

const AboutCompany = () => {
    const scrollRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white font-sans py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-9xl mx-auto text-center">
                {/* Subheading */}
                <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: '#a1887f' }}>
                    ABOUT COMPANY
                </h2>

                {/* Main heading block */}
                <div className="mt-8 text-sm md:text-2xl sm:text-5xl lg:text-3xl 2xl:text-4xl font-bold text-black" style={{ lineHeight: 1.4 }}>

                    <p>Experience the Best in Luxury and Comfort!</p>

                    {/* Line with Buddha image */}
                    <p className="mt-4 flex flex-row justify-center items-center flex-wrap gap-x-4">
                        <img
                            src={buddhaImage}
                            alt="Buddha decor"
                            className="h-16 w-auto lg:h-[50px] lg:w-[80px] 2xl:h-[70px] 2xl:w-[110px] rounded-full"
                        />
                        <span>Explore our exclusive, top-tier selection</span>
                    </p>

                    {/* Line with Candle and Vase images */}
                    <p className="mt-4 flex justify-center items-center flex-wrap gap-x-4">
                        <span>online.</span>
                        <img
                            src={candleImage}
                            alt="Scented candle"
                            className="h-16 w-auto lg:h-[50px] lg:w-[80px] 2xl:h-[70px] 2xl:w-[110px] rounded-full"
                        />
                        <span>Indulge in elegance, quality,</span>
                        <img
                            src={vaseImage}
                            alt="Decorative vase"
                            className="h-16 w-auto lg:h-[50px] lg:w-[80px] 2xl:h-[70px] 2xl:w-[110px] rounded-full"
                        />
                    </p>

                    {/* Final line of text */}
                    <p className="mt-4">
                        and sophistication today.
                    </p>

                </div>
            </div>

            {/* Services section */}
            <div className="bg-white py-16  sm:py-24">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            className="flex space-x-16 md:space-x-15 overflow-x-auto scrollbar-hide scroll-smooth py-4 justify-center w-full"
                            style={{ justifyContent: 'center' }}
                        >
                            {servicesData.map((service) => (
                                <ServiceItem
                                    key={service.label}
                                    iconSrc={service.iconSrc}
                                    label={service.label}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center mt-4 space-x-4">
                            <button
                                onClick={() => scroll(-200)}
                                className="p-3 rounded-full bg-[#796f51] hover:bg-[#015829] focus:outline-none"
                                aria-label="Scroll left"
                            >
                                <FiArrowLeft size={24} />
                            </button>
                            <button
                                onClick={() => scroll(200)}
                                className="p-3 rounded-full bg-[#796f51] hover:bg-[#015829] focus:outline-none"
                                aria-label="Scroll right"
                            >
                                <FiArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;
