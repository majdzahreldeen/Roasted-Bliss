import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">Roasted Bliss</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Serving the finest coffee since 2008. Every cup is a journey of flavor, 
              crafted with passion and served with love in the heart of the city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Menu', 'Location', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">+1 (555) 123-COFFEE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">hello@roastedbliss.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-amber-400">Opening Hours</h4>
              <p className="text-gray-300 text-sm">
                Monday - Friday: 6:00 AM - 9:00 PM<br />
                Saturday - Sunday: 7:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Roasted Bliss Coffee Shop. All rights reserved. Made with ❤️ and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;