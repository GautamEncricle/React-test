import React from 'react';

const PartnerLogo = ({ imageUrl, name }) => {
    return (
        <div className="flex h-25 w-full items-center justify-center rounded-xl bg-[#3e614e] p-6">
            <img
                src={imageUrl}
                alt={`${name} logo`}
                className="max-h-full max-w-full object-contain"
            />
        </div>
    );
};

export default PartnerLogo;