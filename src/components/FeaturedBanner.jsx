import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedBanner = () => {
  return (
    <div className="mx-4 mt-4 mb-2 overflow-hidden rounded-xl relative">
      <div className="relative h-[140px] sm:h-[180px] bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative p-5 flex flex-col h-full justify-between z-10">
          <div>
            <div className="inline-block px-2 py-1 bg-white/20 rounded-full text-white text-xs font-semibold mb-2">
              LIMITED TIME
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">Buy One, Get One 50% Off</h3>
            <p className="text-white/80 text-sm sm:text-base">On all fresh produce this weekend</p>
          </div>
          
          <button className="self-start flex items-center gap-1 text-white font-medium text-sm bg-white/25 hover:bg-white/30 transition-colors rounded-full px-4 py-1.5 mt-2">
            Shop Now
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;