import React from 'react';

//images 
import image1 from '../assets/icons/ProcessIcons/image1.svg';
import image2 from '../assets/icons/ProcessIcons/image2.svg';
// import image3 from '../assets/icons/ProcessIcons/image3.svg'; // Removed missing file import
import image3 from '../assets/icons/ProcessIcons/image3.png';
import image4 from '../assets/icons/ProcessIcons/image4.svg';
import image5 from '../assets/icons/ProcessIcons/image5.svg';

const processData = [
    {
        number: '01',
        title: 'Initial Consultation',
        description: 'Elit lacus vivamus sollicitudin sapien congue accusantium doloremque laudantium.',
        iconSrc: image1,
    },
    {
        number: '02',
        title: 'Schematic Design',
        description: 'Elit lacus vivamus sollicitudin sapien congue accusantium doloremque laudantium.',
        iconSrc: image2,
    },
    {
        number: '03',
        title: 'Design Fipproval', // Note: Corrected typo from image 'Fipproval' -> 'Approval'
        description: 'Elit lacus vivamus sollicitudin sapien congue accusantium doloremque laudantium.',
        iconSrc: image3,
    },
    {
        number: '04',
        title: 'Purchase & Installation',
        description: 'Elit lacus vivamus sollicitudin sapien congue accusantium doloremque laudantium.',
        iconSrc: image4,
    },
    {
        number: '05',
        title: 'Project HandOver',
        description: 'Elit lacus vivamus sollicitudin sapien congue accusantium doloremque laudantium.',
        iconSrc: image5,
    },
];


const ProjectProcess = () => {
    return (
        <section className="bg-gray-50 font-sans py-20 sm:py-28">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center">
                    <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#a1887f' }}>
                        OUR PROCESS
                    </h3>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black">
                        Project Implementation Process
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="mt-24">

                    {/* Mobile Layout: Vertical Stack */}
                    <div className="lg:hidden flex flex-col gap-12">
                        {processData.map((step) => (
                            <div key={step.number} className="flex flex-col items-center text-center gap-y-4 p-4 rounded-lg">
                                <div className="w-32 h-32 flex items-center justify-center rounded-lg bg-stone-500">
                                    <img src={step.iconSrc} alt={step.title} className="h-16 w-16" />
                                </div>
                                <div className="text-6xl font-bold text-emerald-700">{step.number}</div>
                                <h3 className="text-xl font-bold text-black">{step.title}</h3>
                                <p className="text-gray-500">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Layout: Zig-Zag Timeline */}
                    <div className="hidden lg:block relative">
                        {/* The main horizontal timeline bar */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>

                        <div className="relative flex justify-between">
                            {processData.map((step, index) => {
                                const isTopRow = index % 2 !== 0; // Steps 02, 04 are on top

                                return (
                                    <div key={step.number} className="group w-1/5 flex justify-center">
                                        <div className={`flex items-center ${isTopRow ? 'flex-col-reverse' : 'flex-col'}`}>

                                            {/* Text Content */}
                                            <div className={`p-4 text-center ${isTopRow ? 'mt-8' : 'mb-8'}`}>
                                                <div className={`p-4 text-center ${isTopRow ? 'mt-8' : 'mb-8'}`}>
                                                    {isTopRow ? (
                                                        <div className='h-[200px]'>
                                                            {/* Vertical line */}
                                                            <div className="relative w-0.5 h-15 bg-gray-300 right-[-50%] top-[-5px] mt-1 md:mt-0 lg:mt-[-2%] xl:mt-0 2xl:mt-0"></div>
                                                            <p className="relative mt-4 text-2xl text-left font-bold text-emerald-800 left-[30%]">{step.number}</p>
                                                            <h6 className="relative text-xl font-bold text-black w-[20vw]">{step.title}</h6>
                                                            <p className="mt-2 text-gray-500 text-sm">{step.description}</p>
                                                        </div>
                                                    ) : (
                                                        <div className='h-[200px]'>
                                                            <h6 className="text-xl font-bold text-black w-[20vw]">{step.title}</h6>
                                                            <p className="mt-2 text-gray-500 text-sm">{step.description}</p>
                                                            <p className="relative mt-4 text-2xl text-left font-bold text-emerald-800 left-[30%]">{step.number}</p>
                                                            {/* Vertical line */}
                                                            <div className="relative w-0.5 h-15 bg-gray-300 left-[50%] mb-4 md:mb-4 lg:mt-[-2%] xl:mt-0 2xl:mt-5"></div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Connector Line and Icon Box */}
                                            <div className="relative flex-shrink-0">


                                                {/* Icon Box */}
                                                <div className={`relative w-36 ${!isTopRow ? 'top-[-18%]' : 'bottom[-10%]'} h-36 flex items-center justify-center rounded-lg bg-[#6d6d4d] group-hover:bg-[#015829] transition-colors duration-300`}>
                                                    <img src={step.iconSrc} alt={step.title} className="h-16 w-16" />
                                                </div>

                                                {/* Hover Pointer Arrow */}
                                                <div className={`
                                                    absolute w-0 h-0 border-solid border-transparent 
                                                    left-1/2 -translate-x-1/2
                                                    opacity-0 group-hover:opacity-100 transition-opacity
                                                    ${isTopRow ? 'border-t-[15px] border-t-emerald-800 -bottom-3' : 'border-b-[15px] border-b-emerald-800 top-[-40px]'}
                                                    border-x-[15px]
                                                     `}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectProcess;