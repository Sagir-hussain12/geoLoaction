export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
        return;
      }
  
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude: lat, longitude: lng } = position.coords;
            console.log('Raw coordinates:', { lat, lng });
            
            // Try to get address details
            try {
              const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyByun5HvChv0aCU4vM0At_iPgu1DtcqNU4`
              );
              
              if (!response.ok) {
                throw new Error('Geocoding API request failed');
              }
              
              const data = await response.json();
              console.log('Geocoding API response:', data);
              
              if (data.results && data.results.length > 0) {
                const address = data.results[0].address_components;
                const city = address.find(comp => comp.types.includes('locality'))?.long_name || 'Unknown City';
                const neighborhood = address.find(comp => comp.types.includes('neighborhood'))?.long_name || city;
                
                resolve({
                  city,
                  neighborhood,
                  lat,
                  lng
                });
              } else {
                resolve({
                  city: 'Unknown City',
                  neighborhood: 'Unknown Area',
                  lat,
                  lng
                });
              }
            } catch (geocodeError) {
              console.error('Geocoding error, using coordinates only:', geocodeError);
              resolve({
                city: 'Nearby',
                neighborhood: 'Your Location',
                lat,
                lng
              });
            }
          } catch (error) {
            reject(error);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
          let errorMessage;
          switch(error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location access denied";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location unavailable";
              break;
            case error.TIMEOUT:
              errorMessage = "Location request timed out";
              break;
            default:
              errorMessage = "Unknown location error";
          }
          reject(new Error(errorMessage));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    });
  };
  
  // Calculate distance between two coordinates (Haversine formula)
  export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
  };
  
  // Format distance in a human-readable way
  export const formatDistance = (distanceKm) => {
    // Ensure distanceKm is a valid number
    const distance = Number(distanceKm) || 0;
    
    if (distance < 0.1) {
      return 'Very close';
    } else if (distance < 1) {
      return `${(distance * 1000).toFixed(0)}m away`;
    } else {
      return `${distance.toFixed(1)} km away`;
    }
  };