import React from 'react';
import { Container } from '../layout/Container';

const testimonials = [
  {
    name: "Henrik Andersson",
    role: "Founder",
    company: "Growth Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    content: "Working with their team was exactly what we needed. They helped automate our website leads into HubSpot, and when we had questions about custom fields, they jumped on a call to sort it out. Really appreciate the personal touch."
  },
  {
    name: "Maria Lindström",
    role: "Founder",
    company: "Digital First",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    content: "Been working with them for about 8 months now. Started with just email automation but ended up redoing all our sales processes. Love how they keep checking in to make sure everything's running smoothly."
  },
  {
    name: "Laurent Dubois",
    role: "Developer",
    company: "TechFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    content: "Had a few hiccups initially with our complex setup, but the team stuck with us until everything was perfect. Now our departments actually talk to each other, and I don't spend my Fridays doing manual data entry anymore."
  },
  {
    name: "Sushant Rajput",
    role: "Agency Owner",
    company: "LeadGen Pro",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    content: "What I appreciate most is how they understood our specific needs. They didn't just set up generic automation - they took time to learn our workflow and suggested solutions I hadn't even thought of."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl lg:text-4xl font-bold mb-6">
            Client <span className="metallic-text">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-inter">
            See how we've helped agencies like yours automate and scale their operations successfully.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-orbitron font-semibold text-black">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 font-inter">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 font-inter">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}