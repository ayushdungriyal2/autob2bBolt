import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-5 sm:px-6 py-2.5 text-[13px] lg:text-[14px] tracking-wider transition-all duration-200 rounded-sm w-full sm:w-auto font-medium flex items-center justify-center';
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-900',
    secondary: 'border border-black text-black hover:bg-black hover:text-white'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}