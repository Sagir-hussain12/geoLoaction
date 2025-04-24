import React from 'react';
import { ShoppingBag, Coffee, Apple, Pizza, Car, Gift, Heart, Utensils } from 'lucide-react';



const categories = [
  { 
    id: 'groceries', 
    name: 'Groceries', 
    icon: <Apple />, 
    color: 'bg-green-500' 
  },
  { 
    id: 'restaurants', 
    name: 'Restaurants', 
    icon: <Utensils />, 
    color: 'bg-orange-500' 
  },
  { 
    id: 'coffee', 
    name: 'Coffee', 
    icon: <Coffee />, 
    color: 'bg-yellow-600'
  },
  { 
    id: 'takeout', 
    name: 'Takeout', 
    icon: <Pizza />, 
    color: 'bg-red-500' 
  },
  { 
    id: 'rides', 
    name: 'Rides', 
    icon: <Car />, 
    color: 'bg-blue-500' 
  },
  { 
    id: 'gifts', 
    name: 'Gifts', 
    icon: <Gift />, 
    color: 'bg-purple-500' 
  },
  { 
    id: 'health', 
    name: 'Health', 
    icon: <Heart />, 
    color: 'bg-pink-500' 
  },
  { 
    id: 'shopping', 
    name: 'Shopping', 
    icon: <ShoppingBag />, 
    color: 'bg-indigo-500' 
  }
];

const CategoryScrollbar = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide py-4">
      <div className="flex gap-4 px-4" style={{ minWidth: 'max-content' }}>
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center w-16">
            <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-1.5 shadow-sm`}>
              <div className="h-5 w-5">
                {category.icon}
              </div>
            </div>
            <span className="text-xs text-gray-700 text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryScrollbar;