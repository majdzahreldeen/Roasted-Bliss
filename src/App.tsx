import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}

export default App;