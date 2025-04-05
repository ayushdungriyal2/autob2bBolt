import React from 'react';
import { Bot, Target, Workflow } from 'lucide-react';
import { Container } from '../layout/Container';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: <Bot size={28} className="text-black" />,
    title: "Intelligent Workflows",
    description: "Build smart, automated processes that adapt to your business needs"
  },
  {
    icon: <Target size={28} className="text-black" />,
    title: "Precise Targeting",
    description: "Reach the right prospects with data-driven targeting strategies"
  },
  {
    icon: <Workflow size={28} className="text-black" />,
    title: "Seamless Integration",
    description: "Connect your tools and automate your entire workflow"
  }
];

function HowWeHelp() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 lg:py-32">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="font-orbitron text-3xl lg:text-4xl font-bold mb-6">
              How We Can <span className="metallic-text">Help</span>
            </h2>
            <p className="font-inter text-gray-600 text-lg">
              We build intelligent workflows to streamline your lead generation process and accelerate your business growth. You cannot rely on humans to scale - every successful founder uses automation.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg blur-xl animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Workflow size={64} className="text-black" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HowWeHelp