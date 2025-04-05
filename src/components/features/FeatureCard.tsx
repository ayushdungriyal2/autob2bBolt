import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="relative bg-white shadow-lg border border-gray-100 p-8 rounded-lg">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-full p-4 inline-block mb-6">
          {icon}
        </div>
        <h3 className="font-orbitron text-xl font-semibold mb-4 text-black">{title}</h3>
        <p className="font-inter text-gray-600">{description}</p>
        <button className="mt-6 flex items-center text-black hover:text-gray-700 transition-colors duration-200">
          Discover <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}