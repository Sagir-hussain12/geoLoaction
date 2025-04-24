import React from 'react';
import { MapPin } from 'lucide-react';
import { formatDistance, calculateDistance } from '../utils/locationUtils';

const OfferCard = ({ offer, userLocation }) => {
  // Calculate distance safely
  const distance = userLocation && offer.retailerLocation
    ? calculateDistance(
        userLocation.lat,
        userLocation.lng,
        offer.retailerLocation.lat,
        offer.retailerLocation.lng
      )
    : offer.distanceKm || 0; // Fallback to mock distance or 0 if none exists

  return (
    <div className="flex-shrink-0 w-[170px] sm:w-[220px] bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image with discount tag */}
      <div className="relative h-[130px] sm:h-[150px]">
        <img 
          src={offer.image} 
          alt={offer.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-bl-lg font-medium">
          {offer.discount}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-3">
        <div className="flex items-center text-xs text-gray-500 mb-1.5">
          <span className="font-medium text-blue-600">{offer.retailer}</span>
          <span className="mx-1.5">•</span>
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-0.5 text-gray-400" />
            <span>{formatDistance(distance)}</span>
          </div>
        </div>
        
        <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-2 line-clamp-2">{offer.title}</h3>
        
        {/* Price */}
        {offer.originalPrice && offer.discountedPrice && (
          <div className="flex items-baseline">
            <span className="text-sm font-bold text-gray-900">${offer.discountedPrice.toFixed(2)}</span>
            <span className="ml-1.5 text-xs text-gray-500 line-through">${offer.originalPrice.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferCard;