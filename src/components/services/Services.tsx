import React from 'react';
import { Container } from '../layout/Container';
import { MessageSquare, Users, Bot, Workflow, Target, BarChart } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: <Bot size={24} />,
    title: "AI-Driven Automation",
    description: "Leverage advanced AI algorithms to create personalized, scalable outreach campaigns that deliver results.",
    features: [
      "Intelligent Response Handling",
      "Adaptive Learning Systems",
      "Performance Optimization"
    ]
  },
  {
    icon: <Target size={24} />,
    title: "Strategic Prospecting",
    description: "Identify and engage high-value prospects using data-driven targeting and qualification methods.",
    features: [
      "Ideal Customer Profiling",
      "Multi-Channel Engagement",
      "Lead Quality Scoring"
    ]
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Content Automation",
    description: "Deploy intelligent content creation and distribution systems that maintain consistent engagement.",
    features: [
      "Dynamic Content Generation",
      "Cross-Platform Publishing",
      "Engagement Analytics"
    ]
  },
  {
    icon: <Users size={24} />,
    title: "LinkedIn Automation",
    description: "Implement sophisticated LinkedIn strategies to expand your professional network effectively.",
    features: [
      "Profile Optimization",
      "Connection Management",
      "Engagement Automation"
    ]
  },
  {
    icon: <Workflow size={24} />,
    title: "Process Automation",
    description: "Transform your sales and marketing workflows with end-to-end automation solutions.",
    features: [
      "Custom Workflow Design",
      "System Integration",
      "Process Optimization"
    ]
  },
  {
    icon: <BarChart size={24} />,
    title: "Performance Analytics",
    description: "Track and optimize your campaigns with comprehensive analytics and reporting tools.",
    features: [
      "Real-time Monitoring",
      "Performance Metrics",
      "ROI Analysis"
    ]
  }
];

export function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="text-center mb-16 relative">
          <h2 className="font-orbitron text-3xl lg:text-4xl font-bold mb-6">
            Our <span className="metallic-text">Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-inter">
            Comprehensive automation solutions engineered to optimize your lead generation process and accelerate business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}