import React from 'react';

/**
 * A reusable tab button for service navigation.
 * @param {object} props - The component props.
 * @param {string} props.label - The text to display on the button.
 * @param {boolean} props.isActive - Whether the tab is currently active.
 * @param {function} props.onClick - The function to call when the button is clicked.
 */
const ServiceTabButton = ({ label, isActive, onClick }) => {
    const baseClasses = "px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300 ease-in-out";
    const activeClasses = "bg-emerald-800"; // Active green color
    const inactiveClasses = "bg-stone-500 hover:bg-stone-600"; // Inactive brown/gray color

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        >
            {label}
        </button>
    );
};

export default ServiceTabButton;