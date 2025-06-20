import React from 'react';

const ProfileCard = ({ name, title, imageUrl }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg">
      <img
        src={imageUrl}
        alt={name}
        className="h-full w-full transform object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      {/* Overlay with Name and Title */}
      <div className="absolute bottom-0 left-0 h-1/4 w-full translate-y-full transform bg-[#6B624E]/80 p-6 text-white transition-transform duration-500 ease-in-out group-hover:translate-y-0">
        <div className="flex h-full flex-col items-start justify-end">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm font-light uppercase tracking-wider">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;