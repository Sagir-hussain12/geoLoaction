import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import OfferSection from './components/OfferSection';
import CategoryScrollbar from './components/CatagoryScrollbar';
import FeaturedBanner from './components/FeaturedBanner';
import { mockOfferSections } from './data/mockOffers';
import { getCurrentLocation, calculateDistance } from './utils/locationUtils';

function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [sortedSections, setSortedSections] = useState(mockOfferSections);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getCurrentLocation();
        setUserLocation(location);
        
        // Sort offers by distance
        const updatedSections = mockOfferSections.map(section => ({
          ...section,
          offers: [...section.offers].sort((a, b) => {
            const distA = calculateDistance(
              location.lat,
              location.lng,
              a.retailerLocation.lat,
              a.retailerLocation.lng
            );
            const distB = calculateDistance(
              location.lat,
              location.lng,
              b.retailerLocation.lat,
              b.retailerLocation.lng
            );
            return distA - distB;
          })
        }));
        setSortedSections(updatedSections);
      } catch (error) {
        console.error('Error getting location:', error);
        // Fallback to unsorted mock data
        setSortedSections(mockOfferSections);
      }
    };

    fetchLocation();
  }, []);

  return (
    <Layout userLocation={userLocation}>
      <div className="animate-fadeIn">
        <CategoryScrollbar />
        <FeaturedBanner />
        
        {/* Offer Sections */}
        <div className="mt-3">
          {sortedSections.map(section => (
            <OfferSection 
              key={section.id} 
              section={section} 
              userLocation={userLocation} 
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default App;