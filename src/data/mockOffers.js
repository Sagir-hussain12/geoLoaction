
export const mockOfferSections = [
  {
    id: 'nearby',
    title: 'Top Offers Near You',
    offers: [
      {
        id: 'near-1',
        title: '30% Off Breakfast Menu',
        retailer: 'Morning Cafe',
        retailerLocation: { lat: 28.6139, lng: 77.2090 }, // New Delhi
        image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
        discount: '30% OFF',
        originalPrice: 25.99,
        discountedPrice: 18.19
      },
      {
        id: 'near-2',
        title: 'Buy 1 Get 1 Free Pizza',
        retailer: 'Pizza Palace',
        retailerLocation: { lat: 12.912887040144772, lng: 77.6393213866834 }, // Mumbai
        image: 'https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg',
        discount: 'BOGO',
        originalPrice: 18.99,
        discountedPrice: 18.99
      },
      {

        id: 'near-3',
        title: '$5 Off First Order',
        retailer: 'Urban Bites',
        retailerLocation: { lat: 12.9716, lng: 77.5946 }, // Bangalore
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        discount: '$5 OFF',
        originalPrice: 22.50,
        discountedPrice: 17.50
      },
      {
        id: 'near-4',
        title: '20% Off Dinner Special',
        retailer: 'Fine Dining Co.',
        retailerLocation: { lat: 12.91247044309327, lng: 77.6438866176439 }, // Hyderabad
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
        discount: '20% OFF',
        originalPrice: 45.00,
        discountedPrice: 36.00
      }
    ]
  },
  {
    id: 'grocery',
    title: 'Grocery Deals',
    offers: [
      {
        id: 'grocery-1',
        title: 'Fresh Produce Bundle',
        retailer: 'Organic Market',
        retailerLocation: { lat: 22.5726, lng: 88.3639 }, // Kolkata
        image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
        discount: '25% OFF',
        originalPrice: 32.99,
        discountedPrice: 24.74
      },
      {
        id: 'grocery-2',
        title: 'Family Pack Essentials',
        retailer: 'FreshMart',
        retailerLocation: { lat: 13.0827, lng: 80.2707 }, // Chennai
        image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
        discount: '15% OFF',
        originalPrice: 65.00,
        discountedPrice: 55.25
      },
      {
        id: 'grocery-3',
        title: 'Pantry Staples Sale',
        retailer: 'SuperGrocery',
        retailerLocation: { lat: 18.5204, lng: 73.8567 }, // Pune
        image: 'https://images.pexels.com/photos/6649833/pexels-photo-6649833.jpeg',
        discount: '3 FOR 2',
        originalPrice: 12.99,
        discountedPrice: 8.66
      },
      {
        id: 'grocery-4',
        title: 'Weekend Fresh Fish Special',
        retailer: 'Fish & More',
        retailerLocation: { lat: 23.0225, lng: 72.5714 }, // Ahmedabad
        image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg',
        discount: '20% OFF',
        originalPrice: 28.99,
        discountedPrice: 23.19
      }
    ]
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy Specials',
    offers: [
      {
        id: 'pharm-1',
        title: 'Vitamins & Supplements',
        retailer: 'Health Plus',
        retailerLocation: { lat: 26.8467, lng: 80.9462 }, // Lucknow
        image: 'https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg',
        discount: 'BUY 2 GET 1',
        originalPrice: 24.99,
        discountedPrice: 16.66
      },
      {
        id: 'pharm-2',
        title: 'Skincare Essentials',
        retailer: 'BeautyPharm',
        retailerLocation: { lat: 20.2961, lng: 85.8245 }, // Bhubaneswar
        image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg',
        discount: '30% OFF',
        originalPrice: 49.99,
        discountedPrice: 34.99
      },
      {
        id: 'pharm-3',
        title: 'First Aid Kit Bundle',
        retailer: 'MediMart',
        retailerLocation: { lat: 11.0168, lng: 76.9558 }, // Coimbatore
        image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg',
        discount: '15% OFF',
        originalPrice: 35.50,
        discountedPrice: 30.17
      },
      {
        id: 'pharm-4',
        title: 'Wellness Check Package',
        retailer: 'CarePlus',
        retailerLocation: { lat: 30.7333, lng: 76.7794 }, // Chandigarh
        image: 'https://images.pexels.com/photos/721166/pexels-photo-721166.jpeg',
        discount: '$10 OFF',
        originalPrice: 75.00,
        discountedPrice: 65.00
      }
    ]
  },
  {
    id: 'essentials',
    title: 'Daily Essentials',
    offers: [
      {
        id: 'ess-1',
        title: 'Household Cleaning Set',
        retailer: 'HomeMart',
        retailerLocation: { lat: 8.5241, lng: 76.9366 }, // Thiruvananthapuram
        image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg',
        discount: '20% OFF',
        originalPrice: 42.99,
        discountedPrice: 34.39
      },
      {
        id: 'ess-2',
        title: 'Paper Goods Bundle',
        retailer: 'Everyday Basics',
        retailerLocation: { lat: 21.1458, lng: 79.0882 }, // Nagpur
        image: 'https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg',
        discount: 'SAVE $8',
        originalPrice: 29.99,
        discountedPrice: 21.99
      },
      {
        id: 'ess-3',
        title: 'Laundry Supplies',
        retailer: 'Clean & Fresh',
        retailerLocation: { lat: 24.5854, lng: 73.7125 }, // Udaipur
        image: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg',
        discount: '25% OFF',
        originalPrice: 32.50,
        discountedPrice: 24.37
      },
      {
        id: 'ess-4',
        title: 'Personal Care Package',
        retailer: 'WellCare',
        retailerLocation: { lat: 27.1767, lng: 78.0081 }, // Agra
        image: 'https://images.pexels.com/photos/3737594/pexels-photo-3737594.jpeg',
        discount: 'BOGO 50% OFF',
        originalPrice: 27.99,
        discountedPrice: 20.99
      }
    ]
  }
];