import React from 'react';
import Layout from './components/Layout';
import OfferSection from './components/OfferSection';
import CategoryScrollbar from './components/CatagoryScrollbar';
import FeaturedBanner from './components/FeaturedBanner';
import { mockOfferSections } from './data/mockOffers';
import { getCurrentLocation } from './utils/locationUtils';

function App() {
  // Get mock user location
  const userLocation = getCurrentLocation();

  return (
    <Layout userLocation={userLocation}>
      <div className="animate-fadeIn">
        <CategoryScrollbar />
        <FeaturedBanner />
        
        {/* Offer Sections */}
        <div className="mt-3">
          {mockOfferSections.map(section => (
            <OfferSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default App;