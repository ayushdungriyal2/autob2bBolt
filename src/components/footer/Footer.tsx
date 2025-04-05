import React from 'react';
import { Container } from '../layout/Container';
import { NavLink } from '../navigation/NavLink';
import { Rocket, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Rocket className="text-black" size={24} />
                <span className="font-orbitron text-lg font-medium tracking-wider text-black">
                  AutoB2B
                </span>
              </div>
              <p className="text-gray-600 mb-6 font-inter">
                Empowering businesses through intelligent automation and innovative solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-orbitron font-semibold text-black mb-6">Company</h3>
              <ul className="space-y-4">
                <li><NavLink href="#">About Us</NavLink></li>
                <li><NavLink href="#">Solutions</NavLink></li>
                <li><NavLink href="#">Case Studies</NavLink></li>
                <li><NavLink href="#">Testimonials</NavLink></li>
                <li><NavLink href="#">Contact</NavLink></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-orbitron font-semibold text-black mb-6">Solutions</h3>
              <ul className="space-y-4">
                <li><NavLink href="#">AI Automation</NavLink></li>
                <li><NavLink href="#">Lead Generation</NavLink></li>
                <li><NavLink href="#">Content Strategy</NavLink></li>
                <li><NavLink href="#">LinkedIn Automation</NavLink></li>
                <li><NavLink href="#">Analytics</NavLink></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-orbitron font-semibold text-black mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600 font-inter">
                  <Mail size={16} className="mr-3" />
                  <a href="mailto:contact@autob2b.com" className="hover:text-black transition-colors duration-200">
                    contact@autob2b.com
                  </a>
                </li>
                <li className="flex items-center text-gray-600 font-inter">
                  <Phone size={16} className="mr-3" />
                  <a href="tel:+1234567890" className="hover:text-black transition-colors duration-200">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start text-gray-600 font-inter">
                  <MapPin size={16} className="mr-3 mt-1" />
                  <span>
                    123 Innovation Drive<br />
                    Tech City, TC 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm font-inter">
              © {new Date().getFullYear()} AutoB2B. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm font-inter">
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}