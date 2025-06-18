import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Quotes: React.FC = () => {
  const quotes = [
    {
      text: "A father is someone you look up to no matter how tall you grow.",
      author: "Unknown",
      category: "Growth"
    },
    {
      text: "The heart of a father is the masterpiece of nature.",
      author: "Antoine François Prévost",
      category: "Love"
    },
    {
      text: "A father carries pictures where his money used to be.",
      author: "Steve Martin",
      category: "Sacrifice"
    },
    {
      text: "Dad: A son's first hero, a daughter's first love.",
      author: "Unknown",
      category: "Hero"
    },
    {
      text: "Any man can be a father, but it takes someone special to be a dad.",
      author: "Anne Geddes",
      category: "Special"
    },
    {
      text: "A father's love is eternal, unconditional, and unbreakable.",
      author: "Unknown",
      category: "Eternal"
    },
    {
      text: "The greatest gift I ever had came from God; I call him Dad.",
      author: "Unknown",
      category: "Gift"
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextQuote();
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextQuote = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevQuote = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToQuote = (index: number) => {
    if (isAnimating || index === currentQuote) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Words of
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Appreciation
            </span>
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
            Beautiful words that capture the essence of fatherhood and the profound impact dads have on our lives.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl border border-white/20">
            <Quote className="w-16 h-16 text-indigo-600 mb-8 mx-auto opacity-50" />
            
            <div className="min-h-[200px] flex items-center justify-center">
              <div className={`text-center transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-full mb-6">
                    {quotes[currentQuote].category}
                  </span>
                </div>
                <p className="text-2xl md:text-4xl text-slate-700 font-light leading-relaxed mb-8 italic">
                  "{quotes[currentQuote].text}"
                </p>
                <p className="text-xl text-indigo-600 font-semibold">
                  — {quotes[currentQuote].author}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-12">
              <button
                onClick={prevQuote}
                disabled={isAnimating}
                className="group p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
              </button>

              <div className="flex space-x-3">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToQuote(index)}
                    disabled={isAnimating}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentQuote 
                        ? 'w-12 h-4 bg-gradient-to-r from-indigo-600 to-purple-600' 
                        : 'w-4 h-4 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextQuote}
                disabled={isAnimating}
                className="group p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;