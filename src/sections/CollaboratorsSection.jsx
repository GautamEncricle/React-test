import React, { useRef } from 'react';
import Marquee from "react-fast-marquee"; // Import the library
import PartnerLogo from '../components/PartnersLogo';

//images
import furniture from '../assets/images/Partner/furniture.svg';
import grayHouse from '../assets/images/Partner/gray-house.svg';
import simpleHouse from '../assets/images/Partner/simpleHouse.svg';
import houselux from '../assets/images/Partner/houseLux.svg';
import interiorDesign from '../assets/images/Partner/interior.svg'; 
import housetica from '../assets/images/Partner/housetica.svg';

const partners = [
    { id: 1, name: 'Furniture Minimalist', imageUrl: furniture },
    { id: 2, name: 'Gray House', imageUrl: grayHouse },
    { id: 3, name: 'Simple House', imageUrl: simpleHouse },
    { id: 4, name: 'Houselux', imageUrl: houselux },
    { id: 5, name: 'Interior Design', imageUrl: interiorDesign },
    { id: 6, name: 'Housetica', imageUrl: housetica },
];

const CollaboratorsSection = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="text-center">
                    <p className="font-semibold uppercase tracking-widest text-[#6B624E]">
                        OUR PARTNERS
                    </p>
                    <h2 className="mt-2 text-4xl font-bold text-gray-800 md:text-5xl">
                        Top Collaborators
                    </h2>
                </div>

                {/* --- MOBILE: Single Infinite Marquee --- */}
                {/* This block is ONLY visible on mobile screens */}
                <div className="mt-12 md:hidden">
                    <Marquee pauseOnHover={true} speed={80} gradient={false}>
                        {partners.map((partner) => (
                            <div key={`mobile-${partner.id}`} className="mx-4 w-[250px] flex-shrink-0">
                                <PartnerLogo imageUrl={partner.imageUrl} name={partner.name} />
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* --- DESKTOP: Dual Opposing Marquees --- */}
                {/* This block is HIDDEN on mobile and visible on desktop */}
                <div className="mt-12 hidden md:flex md:flex-col md:gap-8">
                    {/* Row 1: Moves Right to Left (default) */}
                    <Marquee pauseOnHover={true} speed={160} gradient={false}>
                        {partners.map((partner) => (
                            <div key={`row1-${partner.id}`} className="mx-4 w-[250px] flex-shrink-0">
                                <PartnerLogo imageUrl={partner.imageUrl} name={partner.name} />
                            </div>
                        ))}
                    </Marquee>

                    {/* Row 2: Moves Left to Right */}
                    <Marquee pauseOnHover={true} speed={120} gradient={false} direction="right">
                        {partners.map((partner) => (
                            <div key={`row2-${partner.id}`} className="mx-4 w-[250px] flex-shrink-0">
                                <PartnerLogo imageUrl={partner.imageUrl} name={partner.name} />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default CollaboratorsSection;