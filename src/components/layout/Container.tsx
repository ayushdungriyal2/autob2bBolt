import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-full px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}