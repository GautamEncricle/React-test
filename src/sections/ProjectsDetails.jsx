
import React from 'react';
import ProjectHoverCard from '../components/ProjectHoverCard';
import ButtonWithIcon from '../components/ButtonWithIcon';

//imageSrc
import image1 from '../assets/images/projectSection/image1.png'
import image2 from '../assets/images/projectSection/image2.png'

const ViewAllProjectsButton = () => (
    <div className="flex items-center">
        <ButtonWithIcon text="View All Projects" href="#" width="w-[200px]" height="h-[38px]" />
    </div>
);

// Data for the project cards
const projectsData = [
    {
        imageSrc: image1, // Replace with your image
        title: 'Elevate Your Spaces Today',
        category: 'UNIQUE DESIGNS'
    },
    {
        imageSrc: image2, // Replace with your image
        title: 'Inspired Designs',
        category: 'RUSTIC DESIGN'
    }
];

// Data for the stats bar
const statsData = [
    { value: '32+', label: 'Successful Projects' },
    { value: '10+', label: 'Years Experience' },
    { value: '12K', label: 'Happy Customers' }
];

const ProjectDetails = () => {
    return (
        <section className="bg-white font-sans">

            {/* Top Black Section */}
            <div className="text-center flex flex-col justify-center items-center  py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#a1887f' }}>
                        PROJECTS
                    </p>
                    <h1 className="mt-4 text-black text-2xl md:text-xl lg:text-2xl md:w-[50vw] font-bold leading-tight">
                        Transform Your Work And Living Space With Style, Comfort And Functionality
                    </h1>
                    <div className="mt-8 flex justify-center">
                        <ViewAllProjectsButton />
                    </div>
                </div>
            </div>

            {/* Overlapping Gallery Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16 sm:-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    {/* Left Column */}
                    <div className="w-full lg:w-[45vw] 2xl:w-[38vw]">
                        <ProjectHoverCard {...projectsData[0]} />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8">
                        <div className='2xl:h-[54vh]'>
                            <ProjectHoverCard {...projectsData[1]} />
                        </div>

                        {/* Stats Bar */}
                        <div className="bg-[#796f51] rounded-xl p-8 text-white grid grid-cols-3 items-center text-center gap-8">
                            {statsData.map(stat => (
                                <div key={stat.label}>
                                    <p className="text-4xl lg:text-4xl font-bold">{stat.value}</p>
                                    <p className="mt-1 text-xs uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;