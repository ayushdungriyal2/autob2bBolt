import React from 'react';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group bg-white border border-gray-100 rounded-lg p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="bg-gray-50 rounded-lg p-4 inline-block mb-6 group-hover:bg-white transition-colors duration-300">
          <div className="text-black transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        <h3 className="font-orbitron text-xl font-semibold mb-4 text-black">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-2">
          {description}
        </p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600 group-hover:translate-x-1 transition-transform duration-300 delay-[calc(100ms*var(--index))]" style={{ '--index': index } as React.CSSProperties}>
              <Check size={16} className="text-black mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}