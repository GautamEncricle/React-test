import React, { useState, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import DiamondIcon from '../assets/icons/diamondIcon.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// --- Images (assuming paths are correct) ---
import image1 from '../assets/images/Projects/image1.png';
import image2 from '../assets/images/Projects/image2.png';
import image3 from '../assets/images/Projects/image3.png';

const projects = [
    { imageSrc: image1, title: 'Modern Interior Design', description: 'Pretium fusce id velit ut tortor pretium. Convallis aenean et tortor at risus viverra adipiscing. In vitae turpis massa sed elementum tincidunt nuncpulvinar.' },
    { imageSrc: image2, title: 'Modern Bathroom Oasis', description: 'A stunning bathroom renovation combining modern fixtures with warm, textured tiles for a spa-like feel.' },
    { imageSrc: image3, title: 'Artistic Living Space', description: 'A cozy living area featuring a bold, knotted chair and sophisticated decor, creating a unique and inviting atmosphere.' },
    { imageSrc: image1, title: 'Living Room Elegance', description: 'Elegant living room with luxurious curtains and a modern, minimalist aesthetic for timeless appeal.' },
];

const ProjectPortfolio = () => {
    // State to track the active slide for custom pagination
    const [activeIndex, setActiveIndex] = useState(0);
    // Ref to control the Swiper instance
    const swiperRef = useRef(null);

    const handleDotClick = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <section className="bg-white overflow-hidden font-sans py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header (No changes here) */}
                <div className="text-center">
                    <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#a1887f' }}>
                        NEWEST PORTFOLIO
                    </h3>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black">
                        Discover Our Recent Projects
                    </h2>
                </div>

                {/* Swiper Container */}
                <div className="mt-16">
                    <Swiper
                        // --- Core Swiper configuration ---
                        modules={[Pagination, Scrollbar]}
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        // --- Layout and Spacing (to match your original design) ---
                        spaceBetween={32} // Corresponds to gap-8

                        // --- Responsiveness ---
                        breakpoints={{
                            // Mobile
                            0: { slidesPerView: 1, centeredSlides: true },
                            // sm
                            640: { slidesPerView: 1, centeredSlides: false },
                            // md
                            768: { slidesPerView: 2 },
                            // lg
                            1024: { slidesPerView: 3 },
                        }}

                        // --- Scrollbar (hidden as requested) ---
                        scrollbar={{ draggable: true, hide: true }}

                        // --- Accessibility and UX ---
                        grabCursor={true}
                        className="!pb-8" // Add padding-bottom to ensure shadows aren't cut off
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectCard {...project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Pagination Dots */}
                <div className="mt-8 flex justify-center items-center gap-3">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className="cursor-pointer"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {index === activeIndex ? (
                                <img src={DiamondIcon} alt="active slide" className="h-3.5 w-3.5" />
                            ) : (
                                <div className="h-2 w-2 rounded-full bg-stone-400 transition-colors hover:bg-stone-500" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectPortfolio;