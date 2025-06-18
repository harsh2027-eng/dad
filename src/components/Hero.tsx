import React, { useState, useEffect } from 'react';
import { Heart, ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    "To the man who taught us everything",
    "To our first superhero",
    "To the one who never gave up on us",
    "To our guiding light"
  ];

  useEffect(() => {
    setIsVisible(true);
    const textTimer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(textTimer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 animate-pulse blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-15 animate-bounce blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-10 animate-pulse delay-1000 blur-lg"></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-5 animate-bounce delay-500 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-5 animate-spin-slow blur-3xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center items-center mb-8">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-4 animate-pulse" />
            <Heart className="w-20 h-20 text-red-500 animate-heartbeat" />
            <Sparkles className="w-8 h-8 text-yellow-400 ml-4 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Happy
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              Father's Day
            </span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-2xl md:text-3xl text-blue-200 font-light leading-relaxed transition-all duration-500">
              {heroTexts[currentText]}
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Today we celebrate the extraordinary men who shaped our lives with unconditional love, endless wisdom, and unwavering support. Every lesson, every hug, every moment of guidance has made us who we are today.
          </p>
          
          <button
            onClick={scrollToNext}
            className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg"
          >
            <span className="mr-3">Celebrate Dad</span>
            <ArrowDown className="w-6 h-6 group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center mb-2">
            <div className="w-1 h-4 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/70 text-sm font-medium">Scroll</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;