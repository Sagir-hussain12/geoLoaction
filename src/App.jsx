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
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSections, setFilteredSections] = useState([]);


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

  useEffect(() => {
    if (searchQuery) {
      const filtered = sortedSections.map(section => ({  // Use sortedSections instead of mockOfferSections
        ...section,
        offers: section.offers.filter(offer =>
          offer.retailer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.offers.length > 0);
      
      setFilteredSections(filtered);
    } else {
      setFilteredSections(sortedSections);  // Use sortedSections here too
    }
  }, [searchQuery, sortedSections]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Layout userLocation={userLocation} onSearch={handleSearch}>
      <div className="animate-fadeIn">
        <CategoryScrollbar />
        <FeaturedBanner />
        
        {/* Offer Sections */}
        <div className="mt-3">
          {(searchQuery ? filteredSections : mockOfferSections).map(section => (
            <OfferSection 
              key={section.id} 
              section={section} 
              userLocation={userLocation} 
            />
          ))}
          {searchQuery && filteredSections.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No retailers found matching "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default App;