import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is customized to your specific needs and automation requirements. Schedule a consultation with us to receive a detailed quote tailored to your business objectives."
  },
  {
    question: "Can AutoB2B help with rapid growth challenges?",
    answer: "Absolutely. Our expertise lies in implementing scalable systems for fast-growing businesses. We specialize in streamlining operations and establishing efficient processes that support sustainable growth."
  },
  {
    question: "How quickly can we implement automation?",
    answer: "Implementation timelines vary based on complexity, but most clients see initial results within 2-4 weeks. We prioritize quick wins while building comprehensive, long-term solutions."
  },
  {
    question: "What sets AutoB2B apart from other agencies?",
    answer: "We combine deep technical expertise with strategic business acumen. Our team doesn't just automate processes - we optimize them for maximum efficiency and ROI, providing ongoing support and optimization."
  },
  {
    question: "How do you ensure smooth integration with existing systems?",
    answer: "We begin with a thorough analysis of your current tech stack and processes. Our solutions are designed to seamlessly integrate with your existing tools while identifying opportunities for optimization."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including implementation, training, and ongoing optimization. Our team is readily available for troubleshooting and strategic guidance to ensure your automation success."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl lg:text-4xl font-bold mb-6">
            Common <span className="metallic-text">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-inter">
            Get answers to frequently asked questions about our automation solutions and implementation process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <button
                className="w-full p-8 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-start">
                  <HelpCircle className="flex-shrink-0 mr-4 text-black" />
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-orbitron font-medium text-black">{faq.question}</h3>
                      {openIndex === index ? (
                        <ChevronUp className="flex-shrink-0 ml-4 text-black transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="flex-shrink-0 ml-4 text-black transition-transform duration-300" />
                      )}
                    </div>
                    <div
                      className={`mt-4 text-gray-600 font-inter overflow-hidden transition-all duration-300 ${
                        openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}