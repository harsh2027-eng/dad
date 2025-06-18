import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Quotes from './components/Quotes';
import CardCreator from './components/CardCreator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Quotes />
      <CardCreator />
      <Footer />
    </div>
  );
}

export default App;