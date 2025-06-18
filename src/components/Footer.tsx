import React from 'react';
import { Heart, Star, Sparkles, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center mb-8">
            <Sparkles className="w-10 h-10 text-yellow-400 mr-4 animate-pulse" />
            <Heart className="w-16 h-16 text-red-500 animate-heartbeat" />
            <h3 className="text-4xl md:text-5xl font-bold text-white mx-6">Happy Father's Day</h3>
            <Heart className="w-16 h-16 text-red-500 animate-heartbeat" />
            <Sparkles className="w-10 h-10 text-yellow-400 ml-4 animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            To all the incredible fathers out there - thank you for your endless love, unwavering guidance, and boundless support. 
            You are the heroes who make the world a better place, one hug, one lesson, and one moment of love at a time.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Star className="w-8 h-8 text-yellow-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Celebrating Dads</h4>
              <p className="text-blue-200 text-center">Honoring fathers everywhere for their dedication and love</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Users className="w-8 h-8 text-green-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Building Families</h4>
              <p className="text-blue-200 text-center">Creating bonds that last a lifetime</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Heart className="w-8 h-8 text-red-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Spreading Love</h4>
              <p className="text-blue-200 text-center">Making every day special with unconditional love</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-blue-300 text-lg mb-3">
              Made with ❤️ for all the amazing fathers who deserve to be celebrated not just today, but every single day.
            </p>
            <p className="text-blue-400 text-sm">
              © 2024 Father's Day Celebration. Spreading love, appreciation, and joy to families everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;