import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import OfferCard from './OfferCard';

const OfferSection = ({ section }) => {
  const scrollContainerRef = useRef(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -240, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-4">
      {/* Section header */}
      <div className="flex items-center justify-between px-4 mb-3">
        <h2 className="text-lg font-bold text-gray-800">{section.title}</h2>
        <button className="text-blue-600 text-sm font-medium">
          See All
        </button>
      </div>
      
      {/* Scrollable offers container */}
      <div className="relative group">
        {/* Scroll buttons - visible on non-touch devices and on hover */}
        <button 
          onClick={scrollLeft}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-1.5 shadow-md text-gray-600 hover:text-blue-600 hidden md:group-hover:block"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-3 px-4 pb-2 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {section.offers.map(offer => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
        
        <button 
          onClick={scrollRight}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-1.5 shadow-md text-gray-600 hover:text-blue-600 hidden md:group-hover:block"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default OfferSection;