// src/components/TeamSection.jsx
import React, { useRef } from 'react';
import ProfileCard from '../components/ProfileCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

//images
import team1 from '../assets/images/TeamMember/Team-1.png';
import team2 from '../assets/images/TeamMember/Team-2.png';
import team3 from '../assets/images/TeamMember/Team-3.png';
import team4 from '../assets/images/TeamMember/Team-4.png';
import team5 from '../assets/images/TeamMember/Team-5.png';

const teamMembers = [
    {
        id: 1,
        name: 'Spas Markus',
        title: 'INTERIOR DECORATOR',
        imageUrl: team1,
    },
    {
        id: 2,
        name: 'Bella Chloe',
        title: 'LEAD DESIGNER',
        imageUrl: team2,
    },
    {
        id: 3,
        name: 'David Chen',
        title: 'SENIOR ARCHITECT',
        imageUrl: team3,
    },
    {
        id: 4,
        name: 'Olivia Grace',
        title: 'PROJECT MANAGER',
        imageUrl: team4,
    },
    {
        id: 5,
        name: 'Sophia Miller',
        title: 'MARKETING HEAD',
        imageUrl: team5,
    },
    {
        id: 6,
        name: 'James William',
        title: 'OPERATIONS',
        imageUrl: team1,
    },
];

const TeamSection = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            // Find the width of a single card. Assumes all cards are the same width.
            const cardWidth = scrollContainerRef.current.querySelector('div').clientWidth;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -cardWidth : cardWidth,
                behavior: 'smooth',
            });
        }
    };

    // Utility class to hide scrollbar
    const scrollbarHide = {
        '::-webkit-scrollbar': { display: 'none' },
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none', /* Firefox */
    };

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4 text-center">
                {/* Section Header */}
                <p className="font-semibold uppercase tracking-widest text-gray-500">
                    TOP PERFORMERS
                </p>
                <h2 className="mt-2 text-4xl font-bold text-gray-800 md:text-5xl">
                    Get To Know Our Leading Team
                </h2>

                {/* Carousel Container */}
                <div className="relative mt-12">
                    <div
                        ref={scrollContainerRef}
                        className="flex snap-x snap-mandatory space-x-4 overflow-x-auto px-4 pb-8"
                        style={scrollbarHide}
                    >
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="w-4/5 flex-shrink-0 snap-center sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5"
                            >
                                <ProfileCard
                                    name={member.name}
                                    title={member.title}
                                    imageUrl={member.imageUrl}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="mt-8 flex justify-center space-x-4">
                    <button
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6B624E] text-white transition hover:bg-[#5a5241] focus:outline-none focus:ring-2 focus:ring-[#6B624E] focus:ring-offset-2"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6B624E] text-white transition hover:bg-[#5a5241] focus:outline-none focus:ring-2 focus:ring-[#6B624E] focus:ring-offset-2"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;