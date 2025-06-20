import React, { useRef } from 'react';
import Marquee from "react-fast-marquee"; // Import the library
import PartnerLogo from '../components/PartnersLogo';

//images
import furniture from '../assets/images/Partner/furniture.svg';
import grayHouse from '../assets/images/Partner/gray-house.svg';
import simpleHouse from '../assets/images/Partner/simpleHouse.svg';
import houselux from '../assets/images/Partner/houselux.svg';
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
    // Duplicate the partner list to create 12 items for the 2x6 desktop grid
    const displayPartners = [...partners, ...partners];

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

                {/* --- MOBILE: Infinite Marquee --- */}
                {/* This entire block is visible on mobile and hidden on desktop (md and up) */}
                <div className="mt-12 md:hidden">
                    <Marquee pauseOnHover={true} speed={50} gradient={false}>
                        {partners.map((partner) => (
                            // Add margin here to create space between logos in the marquee
                            <div key={`marquee-${partner.id}`} className="mx-4 w-[250px]">
                                <PartnerLogo imageUrl={partner.imageUrl} name={partner.name} />
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* --- DESKTOP: Static 2x6 Grid --- */}
                {/* This block is hidden by default and becomes a grid on desktop */}
                <div className="mt-12 hidden md:grid md:grid-cols-6 md:gap-8">
                    {displayPartners.map((partner, index) => (
                        <div key={`grid-${index}`}>
                            <PartnerLogo imageUrl={partner.imageUrl} name={partner.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollaboratorsSection;