import React from 'react';
import { Award, Heart, Coffee } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Coffee className="h-12 w-12 text-amber-600" />,
      title: "Premium Beans",
      description: "Sourced directly from the world's finest coffee regions, our beans are roasted to perfection daily."
    },
    {
      icon: <Heart className="h-12 w-12 text-amber-600" />,
      title: "Crafted with Love",
      description: "Every cup is prepared by our skilled baristas who are passionate about creating the perfect coffee experience."
    },
    {
      icon: <Award className="h-12 w-12 text-amber-600" />,
      title: "Award Winning",
      description: "Recognized for excellence in coffee quality and customer service by the National Coffee Association."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
              alt="Coffee preparation"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Coffee <span className="text-amber-600">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2008 with a simple mission: to bring the world's finest coffee to your cup. 
              We believe that great coffee brings people together, creates moments of joy, and fuels dreams. 
              From our carefully selected beans to our expertly trained baristas, every detail matters in 
              creating the perfect coffee experience.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;