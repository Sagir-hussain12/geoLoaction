# ShopLocal - E-Commerce App

![ShopLocal Screenshot](./screenshot.png) <!-- Add a screenshot if available -->

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Location-Based Offers**: Displays offers based on user's current location
- **Real-Time Search**: Search retailers and products with instant results
- **Responsive Design**: Mobile-first UI with smooth animations
- **Interactive Map**: Shows nearby retailers (using Google Maps API)
- **Offer Categories**: Organized into sections (Grocery, Pharmacy, etc.)
- **Shopping Cart**: Simple cart functionality

## Technologies Used

- **Frontend**: 
  - React.js (Vite)
  - Tailwind CSS
  - Lucide React Icons
- **APIs**:
  - Google Maps Geocoding API
  - Browser Geolocation API
- **Build Tools**:
  - npm
  - Vite

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shoplocal.git
   cd shoplocal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory:
   ```env
   VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

2. Obtain a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/) with:
   - Maps JavaScript API enabled
   - Geocoding API enabled

## Running the App

- Development mode:
  ```bash
  npm run dev
  ```
  Open [http://localhost:5173](http://localhost:5173) in your browser.

- Production build:
  ```bash
  npm run build
  npm run preview
  ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx       # Navigation header with search
│   ├── OfferCard.jsx    # Individual offer component
│   └── ...              
├── data/
│   └── mockOffers.js    # Sample offer data
├── utils/
│   └── locationUtils.js # Geolocation helpers
├── App.jsx             # Main application
└── main.jsx            # Entry point
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Note**: This is a frontend demo project. For production use, you would need to:
- Implement proper backend services
- Secure API keys
- Add user authentication
- Implement payment processing

Replace placeholder values (like API keys and screenshots) with your actual project details before publishing.