import React, { useState, useEffect } from 'react';
import { MapPin, Search, ShoppingBag, Menu, Bell } from 'lucide-react';
import { getCurrentLocation } from '../utils/locationUtils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        console.log('Fetching user location...');
        const location = await getCurrentLocation();
        console.log('Location obtained:', location);
        setUserLocation(location);
      } catch (error) {
        console.error('Error getting location:', error);
        setLocationError(error.message);
        // Set default location if there's an error
        setUserLocation({
          city: 'Loading...',
          neighborhood: 'Location',
          lat: 0,
          lng: 0
        });
      }
    };

    fetchLocation();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-gradient-to-b from-gray-900/70 to-transparent py-3'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top Row: Logo and Icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Menu className={`h-6 w-6 mr-3 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            <h1 className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              ShopLocal
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Bell className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            <div className="relative">
              <ShoppingBag className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>
        
        {/* Location Row */}
        <div className="mt-2 flex items-center">
          <MapPin className={`h-5 w-5 mr-1 ${isScrolled ? 'text-blue-600' : 'text-blue-400'}`} />
          <div className={`text-sm font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            {userLocation ? `${userLocation.neighborhood}, ${userLocation.city}` : 'Getting location...'}
            {locationError && <span className="text-xs text-red-400 ml-2">({locationError})</span>}
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="mt-3 relative">
          <input
            type="text"
            placeholder="Search for stores, products, deals..."
            className="w-full bg-white/90 rounded-full py-2 pl-10 pr-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;