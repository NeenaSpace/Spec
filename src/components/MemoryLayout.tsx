// src/components/MemoryLayout.tsx
import React from 'react';

const MemoryLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* iPhone frame with background image */}
      <div 
        className="relative w-[375px] h-[812px] rounded-[30px] shadow-lg overflow-hidden border-[8px] border-gray-200 bg-cover bg-center"
        style={{ backgroundImage: "url('/image/bg.jpeg')" }}
      >
        {children}
      </div>
    </div>
  );
};

export default MemoryLayout;