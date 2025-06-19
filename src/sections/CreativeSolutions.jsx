import React, { useState } from 'react';
import ServiceTabButton from '../components/ServiceTabButton';
import ButtonWithIcon from '../components/ButtonWithIcon';

import diamondIcon from '../assets/icons/diamondIcon.png';
import playIcon from '../assets/icons/play.png';

//images
import planningImage from '../assets/images/service/image1.png';


const ViewDetailsButton = () => (
    <div className="flex items-center">
        <ButtonWithIcon text="View Details" href="#" width="w-[180px]" height="h-[38px]" />
    </div>
);

// Data for the tabs and content
const services = [
    {
        id: 'Planning',
        title: 'Thoughtful Planning For Timeless Spaces',
        image: planningImage,
        description: 'Elit lacus vivamus sollicitudin sapien congue accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. The lasiko akipoma masikan keda.',
        features: [
            'Dictumst urna nisi elit', 'Feugiat purus praesent',
            'Metus facilisi urna cras', 'Nisi elit urna ictumst',
            'Nullam integer aliquet', 'Per malesuada auctor',
            'Natoque makisent amet', 'Integer aliquet ullam'
        ]
    },
    { id: 'Woodwork', title: 'Custom Woodwork for Elegant Interiors', image: planningImage, description: '...', features: [] },
    { id: 'Furnishing', title: 'Bespoke Furnishing Solutions', image: planningImage, description: '...', features: [] },
    { id: 'Consultation', title: 'Expert Interior Design Consultation', image: planningImage, description: '...', features: [] },
    { id: 'Installation', title: 'Seamless and Professional Installation', image: planningImage, description: '...', features: [] },
];

const CreativeSolutions = () => {
    const [activeTab, setActiveTab] = useState('Planning');

    const activeService = services.find(service => service.id === activeTab);

    return (
        <section className="bg-white font-sans py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center">
                    <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#a1887f' }}>
                        OUR SERVICE
                    </h3>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black">
                        Creative Solutions
                    </h2>
                </div>

                {/* Service Tabs Navigation */}
                <div className="mt-12 flex justify-center flex-wrap gap-4">
                    {services.map((service) => (
                        <ServiceTabButton
                            key={service.id}
                            label={service.id}
                            isActive={activeTab === service.id}
                            onClick={() => setActiveTab(service.id)}
                        />
                    ))}
                </div>

                {/* Content Section */}
                {activeService && (
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-12 items-center">

                        {/* Left Column: Image */}
                        <div>
                            <img src={activeService.image} alt={activeService.title} className="w-full h-auto md:h-[400px] rounded-xl object-cover shadow-lg" />
                        </div>

                        {/* Right Column: Details */}
                        <div className="flex flex-col">
                            <p className="font-semibold tracking-widest text-sm uppercase text-stone-500">
                                {activeService.id}
                            </p>
                            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-black leading-tight">
                                {activeService.title}
                            </h3>
                            <p className="mt-4 text-gray-600 text-base leading-relaxed">
                                {activeService.description}
                            </p>

                            {/* Feature List */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {activeService.features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <img src={diamondIcon} alt="diamond icon" className="h-3 w-3 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-10 flex items-center flex-wrap gap-6">
                                <ViewDetailsButton />
                                <a href="#" className="flex items-center gap-3 text-black font-semibold group">
                                    <div className="bg-emerald-800 text-white rounded-full h-11 w-11 flex items-center justify-center transition-transform group-hover:scale-110">
                                        <img src={playIcon} alt="play icon" className="h-4 w-4" />
                                    </div>
                                    <span>How It Works</span>
                                </a>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </section>
    );
};

export default CreativeSolutions;