import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      content: "The best coffee in the city! Their espresso is absolutely divine, and the atmosphere is perfect for both work meetings and casual catch-ups with friends.",
      rating: 5,
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Local Business Owner",
      content: "I've been coming here every morning for three years. The consistency in quality and the friendly staff make this place feel like a second home.",
      rating: 5,
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Freelance Designer",
      content: "Perfect spot for remote work! Great WiFi, comfortable seating, and their cold brew keeps me energized throughout the day. Highly recommend!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-800 to-orange-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-amber-300">Customers Say</span>
          </h2>
          <p className="text-xl text-amber-100">
            Don't just take our word for it - hear from our loyal customers
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-center mb-8">
            <Quote className="h-16 w-16 text-amber-300 opacity-50" />
          </div>

          <div className="transition-all duration-500 ease-in-out">
            <div className="flex justify-center mb-6">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-amber-300"
              />
            </div>

            <blockquote className="text-2xl md:text-3xl font-light italic mb-6 leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-300 fill-current" />
              ))}
            </div>

            <div>
              <div className="font-semibold text-xl text-amber-100">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-amber-200">
                {testimonials[currentTestimonial].role}
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-amber-300' : 'bg-amber-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;