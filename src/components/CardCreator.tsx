import React, { useState } from 'react';
import { Download, Palette, Type, Heart, Sparkles, Gift } from 'lucide-react';

const CardCreator: React.FC = () => {
  const [cardText, setCardText] = useState("Dear Dad, thank you for being my hero, my guide, and my biggest supporter. Your love has shaped who I am today.");
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [senderName, setSenderName] = useState("Your loving child");
  const [selectedFont, setSelectedFont] = useState(0);

  const themes = [
    {
      name: "Ocean Breeze",
      bg: "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800",
      text: "text-white",
      accent: "text-blue-200",
      pattern: "opacity-10"
    },
    {
      name: "Sunset Glow",
      bg: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-600",
      text: "text-white",
      accent: "text-orange-100",
      pattern: "opacity-10"
    },
    {
      name: "Forest Deep",
      bg: "bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800",
      text: "text-white",
      accent: "text-green-200",
      pattern: "opacity-10"
    },
    {
      name: "Royal Purple",
      bg: "bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800",
      text: "text-white",
      accent: "text-purple-200",
      pattern: "opacity-10"
    },
    {
      name: "Golden Hour",
      bg: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
      text: "text-white",
      accent: "text-yellow-100",
      pattern: "opacity-10"
    },
    {
      name: "Midnight Sky",
      bg: "bg-gradient-to-br from-slate-800 via-gray-900 to-black",
      text: "text-white",
      accent: "text-slate-300",
      pattern: "opacity-20"
    }
  ];

  const fonts = [
    { name: "Elegant", class: "font-serif" },
    { name: "Modern", class: "font-sans" },
    { name: "Playful", class: "font-mono" }
  ];

  const downloadCard = () => {
    // Create a canvas element for the card
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#3B82F6');
    gradient.addColorStop(1, '#1E40AF');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Happy Father\'s Day!', canvas.width / 2, 150);
    
    ctx.font = '24px Arial';
    ctx.fillStyle = '#E5E7EB';
    
    // Word wrap the message
    const words = cardText.split(' ');
    let line = '';
    let y = 250;
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      
      if (testWidth > 600 && n > 0) {
        ctx.fillText(line, canvas.width / 2, y);
        line = words[n] + ' ';
        y += 40;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, canvas.width / 2, y);
    
    // Add sender name
    ctx.font = 'italic 20px Arial';
    ctx.fillStyle = '#FDE68A';
    ctx.fillText(`— ${senderName}`, canvas.width / 2, y + 80);
    
    // Download the image
    const link = document.createElement('a');
    link.download = 'fathers-day-card.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-100 to-blue-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8">
            Create a
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Personal Card
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Design a heartfelt digital card with your personal message to make this Father's Day unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Card Creator Controls */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50">
              <label className="flex items-center text-xl font-bold text-slate-700 mb-4">
                <Type className="w-6 h-6 mr-3 text-purple-600" />
                Your Heartfelt Message
              </label>
              <textarea
                value={cardText}
                onChange={(e) => setCardText(e.target.value)}
                className="w-full p-6 border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:outline-none transition-all duration-300 resize-none text-lg leading-relaxed"
                rows={5}
                placeholder="Write your heartfelt message here..."
              />
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50">
              <label className="flex items-center text-xl font-bold text-slate-700 mb-4">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                From
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full p-6 border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:outline-none transition-all duration-300 text-lg"
                placeholder="Your name"
              />
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50">
              <label className="flex items-center text-xl font-bold text-slate-700 mb-6">
                <Palette className="w-6 h-6 mr-3 text-blue-600" />
                Choose Theme
              </label>
              <div className="grid grid-cols-2 gap-4">
                {themes.map((theme, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTheme(index)}
                    className={`group p-6 rounded-2xl transition-all duration-300 ${theme.bg} ${
                      selectedTheme === index ? 'ring-4 ring-purple-400 scale-105 shadow-xl' : 'hover:scale-105 shadow-lg'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`${theme.text} font-semibold text-lg`}>{theme.name}</span>
                      <Sparkles className={`w-5 h-5 ${theme.accent} group-hover:animate-spin`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={downloadCard}
              className="w-full flex items-center justify-center px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Your Card
            </button>
          </div>

          {/* Enhanced Card Preview */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-[500px] perspective-1000">
                <div className={`relative w-full h-full ${themes[selectedTheme].bg} rounded-3xl shadow-2xl p-10 flex flex-col justify-between transform hover:rotate-y-5 transition-all duration-500 overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-8">
                      <Heart className={`w-16 h-16 ${themes[selectedTheme].accent} animate-heartbeat`} />
                    </div>
                    <h3 className={`text-3xl font-bold ${themes[selectedTheme].text} mb-6 text-center`}>
                      Happy Father's Day!
                    </h3>
                  </div>
                  
                  <div className="flex-1 flex items-center relative z-10">
                    <p className={`${themes[selectedTheme].text} text-lg leading-relaxed italic text-center ${fonts[selectedFont].class}`}>
                      {cardText}
                    </p>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <p className={`${themes[selectedTheme].accent} font-semibold text-lg`}>
                      — {senderName}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around card */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-70"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-300 opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-blue-400 rounded-full animate-bounce delay-700 opacity-70"></div>
              <div className="absolute -bottom-2 -left-6 w-7 h-7 bg-green-400 rounded-full animate-bounce delay-1000 opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardCreator;