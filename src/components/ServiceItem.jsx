import React from 'react';

/**
 * A reusable component to display a single service icon and its label.
 * @param {object} props - The component props.
 * @param {string} props.iconSrc - The path to the icon image.
 * @param {string} props.label - The text label to display below the icon.
 */
const ServiceItem = ({ iconSrc, label }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="mb-3 h-20 w-20 rounded-3xl p-2 transition-colors duration-300 hover:rounded-[50%] hover:bg-[#015829] hover:text-white flex justify-center items-center">
                <img
                    src={iconSrc}
                    alt={`${label} service icon`}
                    className="h-16 w-16 object-contain rounded-3xl filter hover:brightness-0 hover:invert"
                />
            </div>
            <p className="text-base font-bold text-black">
                {label}
            </p>
        </div>
    );
};

export default ServiceItem;