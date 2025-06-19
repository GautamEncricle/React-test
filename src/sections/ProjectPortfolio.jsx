import React, { useState, useRef, useCallback, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import DiamondIcon from '../assets/icons/diamondIcon.png';

//images
import image1 from '../assets/images/Projects/image1.png'
import image2 from '../assets/images/Projects/image2.png'
import image3 from '../assets/images/Projects/image3.png'

const projects = [
    {
        imageSrc: image1,
        title: 'Modern Interior Design',
        description: 'Pretium fusce id velit ut tortor pretium. Convallis aenean et tortor at risus viverra adipiscing. In vitae turpis massa sed elementum tincidunt nuncpulvinar.',
    },
    {
        imageSrc: image2,
        title: 'Modern Interior Design',
        description: 'A stunning bathroom renovation combining modern fixtures with warm, textured tiles for a spa-like feel.',
    },
    {
        imageSrc: image3,
        title: 'Modern Interior Design',
        description: 'A cozy living area featuring a bold, knotted chair and sophisticated decor, creating a unique and inviting atmosphere.',
    },
    // Add more projects here to see the scroll work
    {
        imageSrc: image1,
        title: 'Living Room Elegance',
        description: 'Elegant living room with luxurious curtains and a modern, minimalist aesthetic for timeless appeal.',
    },
];

const ProjectPortfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    // Memoized scroll handler to prevent re-renders
    const handleScroll = useCallback(() => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.scrollWidth / projects.length;
            const newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }
    }, [activeIndex]);

    // Attach and clean up the event listener
    useEffect(() => {
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);
        return () => container?.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <section className="bg-white font-sans py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center">
                    <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#a1887f' }}>
                        NEWEST PORTFOLIO
                    </h3>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black">
                        Discover Our Recent Projects
                    </h2>
                </div>

                {/* Projects Container: Scrollable Flex on Mobile, Scrollable Row on Desktop */}
                <div className="mt-16">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth scrollbar-hide"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {projects.map((project, index) => (
                            <div key={index} className="flex-shrink-0 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[calc(100%/3.2)-1rem)] snap-center">
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="mt-8 flex justify-center items-center gap-3">
                    {projects.map((_, index) => (
                        <div key={index}>
                            {index === activeIndex ? (
                                <img src={DiamondIcon} alt="diamond icon" className="h-3.5 w-3.5" />
                            ) : (
                                <div className="h-2 w-2 rounded-full bg-stone-400" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectPortfolio;
