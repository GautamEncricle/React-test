import React from 'react';


const ProjectHoverCard = ({ imageSrc, title, category }) => {
    return (
        <div className="relative group rounded-xl overflow-hidden cursor-pointer">

            {/* The main image */}
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />

            {/* Hover Overlay: Slides up from the bottom */}
            <div
                className="
                    absolute inset-x-0 bottom-0 h-26
                    bg-[#747256]/80 bg-opacity-[80%]
                    p-6 flex flex-col justify-end 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 ease-in-out"
            >
                <p className="mt-1 text-white text-sm">{category}</p>
                <h4 className="text-white text-xl font-bold">{title}</h4>
            </div>
        </div>
    );
};

export default ProjectHoverCard;