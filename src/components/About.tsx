import React, { useState, useEffect } from 'react';
import { Users, Heart, Award, Shield, Lightbulb, Smile } from 'lucide-react';

const About: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Unconditional Love",
      description: "A father's love knows no bounds, providing comfort and security through every season of life. It's the foundation that gives us strength to face any challenge.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Our Protector",
      description: "Always standing guard, keeping us safe from harm while teaching us to be brave and face our fears with confidence.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Lightbulb,
      title: "Wisdom & Guidance",
      description: "Sharing life lessons, experiences, and helping us navigate the complexities of the world with patience and understanding.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Role Model",
      description: "Setting the example of integrity, hard work, and compassion that shapes our character and values for life.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Award,
      title: "Our Champion",
      description: "Celebrating our victories, supporting us through defeats, and always believing in our potential even when we don't.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Smile,
      title: "Source of Joy",
      description: "Bringing laughter, creating memories, and showing us that life is meant to be enjoyed and shared with those we love.",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8">
            What Makes Dad
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Fathers wear many hats - mentor, protector, friend, and hero. Today we celebrate all the incredible ways they enrich our lives and make our world brighter.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isVisible = visibleCards.includes(index);
            return (
              <div 
                key={index}
                data-index={index}
                className={`feature-card group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-white/50 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <div className={`mt-6 h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;