import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const buttonStyles =
  variant === 'primary'
    ? 'bg-gray-600 text-white border-none'
    : 'bg-gray-100 text-black border border-gray-400';

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md shadow-md ${buttonStyles} hover:opacity-90`}
    >
      {label}
    </button>
  );
};

export default Button;