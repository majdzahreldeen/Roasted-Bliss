import React from 'react';
import { Star } from 'lucide-react';

const Menu = () => {
  const menuItems = [
    {
      name: "Signature Espresso",
      price: "$4.50",
      description: "Rich, bold espresso with notes of dark chocolate and caramel",
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 4.9,
      popular: true
    },
    {
      name: "Artisan Cappuccino",
      price: "$5.25",
      description: "Perfectly steamed milk creating beautiful latte art",
      image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 4.8
    },
    {
      name: "Cold Brew Delight",
      price: "$4.75",
      description: "Smooth, refreshing cold brew steeped for 24 hours",
      image: "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 4.7
    },
    {
      name: "Vanilla Latte Supreme",
      price: "$5.50",
      description: "Our signature blend with premium vanilla and steamed milk",
      image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 4.9,
      popular: true
    },
    {
      name: "Mocha Indulgence",
      price: "$5.75",
      description: "Rich espresso, premium chocolate, and whipped cream",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 4.8
    },
    {
      name: "Caramel Macchiato",
      price: "$5.25",
      description: "Espresso marked with vanilla syrup and caramel drizzle",
      image: "https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 4.6
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-amber-600">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffees, each crafted to perfection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {item.popular && (
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Popular
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({item.rating})</span>
                </div>

                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;