// src/components/Card.tsx
import React from 'react';
import Image from 'next/image';

const Card: React.FC<{ title: string; text: string; imageSrc: string }> = ({ title, text, imageSrc }) => {
  return (
    <div className="w-[250px] bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="w-full h-40 relative mb-3">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Card;