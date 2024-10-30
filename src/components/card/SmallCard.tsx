import React from 'react';
import Image from 'next/image';

const SmallCard: React.FC<{ title: string; text: string; imageSrc: string }> = ({ title, text, imageSrc }) => {
    return (
      <div className="w-[160px] bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
        <div className="w-full h-24 relative">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
        </div>
        
        <div className="p-2">
          <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
          <p className="text-xs text-gray-600 mt-1">{text}</p>
        </div>
      </div>
    );
};
export default SmallCard;