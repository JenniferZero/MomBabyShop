import React, { useState } from 'react';
import { Heart, ShoppingCart, Search, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-pink-50 py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-pink-700 text-sm">Miễn phí vận chuyển cho đơn hàng trên 500.000đ</p>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-pink-600">MomBaby<span className="text-blue-400">Shop</span></h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Trang Chủ</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Đồ Cho Mẹ</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Đồ Cho Bé</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Sữa & Thực Phẩm</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Đồ Dùng</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Blog</a>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-700 hover:text-pink-600"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              <Heart size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              <User size={20} />
            </a>
          </div>
        </div>
        
        {/* Search bar - conditionally rendered */}
        {isSearchOpen && (
          <div className="mt-4 relative">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm..." 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="absolute right-3 top-2.5 text-gray-500">
              <Search size={20} />
            </button>
          </div>
        )}
      </div>
      
      {/* Mobile menu - conditionally rendered */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium py-2 border-b border-gray-100">Trang Chủ</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium py-2 border-b border-gray-100">Đồ Cho Mẹ</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium py-2 border-b border-gray-100">Đồ Cho Bé</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium py-2 border-b border-gray-100">Sữa & Thực Phẩm</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium py-2 border-b border-gray-100">Đồ Dùng</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium py-2">Blog</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;