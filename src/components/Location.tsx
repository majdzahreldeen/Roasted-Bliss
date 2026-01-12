import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "123 Coffee Street, Downtown District, City 12345"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-COFFEE"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "hello@roastedbliss.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      content: "Mon-Fri: 6AM-9PM, Sat-Sun: 7AM-10PM"
    }
  ];

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visit <span className="text-amber-600">Our Store</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience our cozy atmosphere and exceptional coffee in person
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl shadow-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-amber-700 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-amber-800 mb-2">Interactive Map</h3>
                <p className="text-amber-700">
                  Click to view directions on Google Maps
                </p>
                <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </div>
            ))}

            <div className="bg-amber-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Special Offers</h3>
              <ul className="space-y-2">
                <li>• Happy Hour: 3-5 PM - 20% off all drinks</li>
                <li>• Student Discount: 15% off with valid ID</li>
                <li>• Loyalty Program: Buy 10, get 1 free</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;