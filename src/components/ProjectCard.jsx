import React from 'react';
import ExternalLinkIcon from '../assets/icons/Link.png'

const ProjectCard = ({ imageSrc, title, description }) => {
    return (
        <div className="space-y-4">
            {/* The `group` class is essential for the hover effect on child elements */}
            <div className="relative rounded-xl overflow-hidden cursor-pointer group">
                <img src={imageSrc} alt={title} className="w-full h-100 object-cover" />

                {/* --- Hover Overlay --- */}
                <div
                    className="
              absolute inset-x-0 bottom-0 h-26
              bg-[#747256]/80 bg-opacity-[80%]
              p-6 flex flex-col justify-end 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 ease-in-out"
                >
                    <p className="unbounded-light text-white text-sm pt-2">
                        {description}
                    </p>
                </div>


                {/* --- Hover Link Icon --- */}
                <a
                    href="#"
                    className="
    absolute top-5 right-5 h-12 w-12 
    bg-emerald-700 rounded-full 
    flex items-center justify-center
    transform scale-0 group-hover:scale-100 
    transition-transform duration-300 ease-in-out
  "
                >
                    <img src={ExternalLinkIcon} alt="external link icon" className="h-6 w-6" />
                </a>
            </div>

            {/* Card Title */}
            <p className="text-xl font-bold text-black text-center">{title}</p>
        </div>
    );
};

export default ProjectCard;
