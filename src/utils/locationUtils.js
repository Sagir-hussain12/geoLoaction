// Mock current user location
export const getCurrentLocation = () => {
    // In a real app, this would use the Geolocation API
    return {
      city: 'San Francisco',
      neighborhood: 'Mission District',
      lat: 37.7749,
      lng: -122.4194
    };
  };
  
  // Format distance in a human-readable way
  export const formatDistance = (distanceKm) => {
    if (distanceKm < 0.1) {
      return 'Very close';
    } else if (distanceKm < 1) {
      return `${(distanceKm * 1000).toFixed(0)}m away`;
    } else {
      return `${distanceKm.toFixed(1)} km away`;
    }
  };