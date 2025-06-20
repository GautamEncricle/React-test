import React from 'react';

//import images
import image from '../assets/images/workShowcase/Figure.png'
import image1 from '../assets/images/workShowcase/Figure1.png'
import image2 from '../assets/images/workShowcase/Figure2.png' //tall
import image3 from '../assets/images/workShowcase/Figure3.png'
import image4 from '../assets/images/workShowcase/Figure4.png'
import image5 from '../assets/images/workShowcase/Figure5.png' // tall
import image6 from '../assets/images/workShowcase/Figure6.png'
import image7 from '../assets/images/workShowcase/Figure7.png'
import image8 from '../assets/images/workShowcase/Figure8.png'
import image9 from '../assets/images/workShowcase/Figure9.png'
import image10 from '../assets/images/workShowcase/Figure10.png'
import image11 from '../assets/images/workShowcase/Figure11.png'
import image12 from '../assets/images/workShowcase/Figure12.png'
import image13 from '../assets/images/workShowcase/Figure13.png'
import image14 from '../assets/images/workShowcase/Figure14.png'//tall


const images = [
    // --- LEFT COLUMN ---
    { id: 1, src: image, alt: 'Minimalist living room with green sofa', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' }, // Normal
    { id: 2, src: image1, alt: 'Living room with golden pendant lights', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1' }, // Normal
    { id: 3, src: image3, alt: 'Modern green sofa with large wall art', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' }, // Normal
    { id: 4, src: image4, alt: 'Living room with beige sofa and plants', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-2' }, // Tall
    { id: 5, src: image2, alt: 'Hanging rattan chair in a bright room', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' }, // Normal
    { id: 6, src: image5, alt: 'Modern kitchen with integrated appliances', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' }, // Normal
    { id: 7, src: image6, alt: 'Cozy corner with rattan furniture', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-2' }, // Tall

    // --- RIGHT COLUMN ---
    { id: 8, src: image7, alt: 'Modern pink armchairs', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-2' }, // Tall
    { id: 9, src: image8, alt: 'Sofa with pink and brown pillows', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' }, // Normal
    { id: 10, src: image9, alt: 'Modern sofa with metal coffee table', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-2' }, // Tall
    { id: 11, src: image10, alt: 'Bright living room with shadows on the wall', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1' }, // Normal
    { id: 12, src: image11, alt: 'Modern bathroom with wooden countertop', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-2' }, // Tall
    { id: 13, src: image12, alt: 'Elegant living room with large circular chandelier', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' }, // Normal
    { id: 14, src: image14, alt: 'Office space with wooden ceiling and desks', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1' }, // Normal
    { id: 15, src: image13, alt: 'Living room with large plant and dramatic lighting', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-2' }, // Tall
    { id: 16, src: image, alt: 'Beige sofa with black accent coffee tables', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' }, // Normal
    { id: 17, src: image1, alt: 'Living room with abstract art on the wall', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1' }, // Normal
    { id: 18, src: image11, alt: 'Modern minimalist bathroom sink setup', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' }, // Normal
];

import screenshot from '../assets/images/workShowcase/Screenshot 2025-06-20 131031.png'


const WorkShowcase = () => {

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 flex flex-col items-center gap-4 text-center">
                    <p className="font-poppins font-medium uppercase tracking-[1.5px] text-brand-brown">
                        SHOWCASE OF OUR WORK
                    </p>
                    <h2 className="font-unbounded text-3xl font-medium capitalize text-brand-dark md:text-4xl">
                        Beautiful Spaces Await You
                    </h2>
                </div>

                {/* Gallery */}
                <div className="overflow-x-auto">
                    <div className="min-w-[600px]">
                        <img src={screenshot} alt="Work Gallery" className="w-full h-auto" />
                    </div>
                </div>


            </div>
        </section>
    );
};

export default WorkShowcase;