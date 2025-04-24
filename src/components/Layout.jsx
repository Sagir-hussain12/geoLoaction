import React from 'react';
import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react';
import Header from './Header';

const Layout = ({ children, userLocation }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header userLocation={userLocation} />
      
      <main className="pt-[150px] pb-14">
        {children}
      </main>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex items-center justify-around px-2 py-2 z-40">
        <NavButton icon={<Home className="w-6 h-6" />} label="Home" active />
        <NavButton icon={<Search className="w-6 h-6" />} label="Search" />
        <NavButton icon={<Heart className="w-6 h-6" />} label="Saved" />
        <NavButton icon={<ShoppingBag className="w-6 h-6" />} label="Cart" />
        <NavButton icon={<User className="w-6 h-6" />} label="Profile" />
      </nav>
    </div>
  );
};

const NavButton = ({ icon, label, active = false }) => {
  return (
    <button className="flex flex-col items-center justify-center w-full">
      <div className={`${active ? 'text-blue-600' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={`text-[10px] mt-1 ${active ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
        {label}
      </span>
    </button>
  );
};

export default Layout;