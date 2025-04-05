import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="font-orbitron text-[13px] lg:text-[14px] text-gray-600 hover:text-black tracking-wider transition-colors duration-200"
    >
      {children}
    </a>
  );
}