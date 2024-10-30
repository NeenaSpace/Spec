import React from 'react';
import { useRouter } from 'next/navigation';

const HomeButton: React.FC = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <button
      onClick={handleHomeClick}
      className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-200 to-blue-100 flex items-center justify-center shadow-md transition-transform transform hover:scale-110"
    >
      <span className="text-white font-bold text-lg">home</span>
    </button>
  );
};

export default HomeButton;