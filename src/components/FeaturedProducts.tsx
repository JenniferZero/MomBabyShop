import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

// Mock data for products
const bestsellers = [
  {
    id: 1,
    name: 'Bộ Quần Áo Sơ Sinh Cotton Organic',
    price: 250000,
    oldPrice: 350000,
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    rating: 5,
    reviews: 124,
    isNew: false,
    discount: 29
  },
  {
    id: 2,
    name: 'Xe Đẩy Gấp Gọn Cao Cấp',
    price: 2500000,
    oldPrice: 3200000,
    image: 'https://images.unsplash.com/photo-1591146223638-8a5e0f2ef9c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    rating: 4.5,
    reviews: 89,
    isNew: false,
    discount: 22
  },
  {
    id: 3,
    name: 'Sữa Bầu Dinh Dưỡng 900g',
    price: 450000,
    oldPrice: 520000,
    image: 'https://images.unsplash.com/photo-1633949580448-1a8c9d547d9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    rating: 4.8,
    reviews: 156,
    isNew: false,
    discount: 13
  },
  {
    id: 4,
    name: 'Ghế Ăn Dặm Đa Năng',
    price: 1200000,
    oldPrice: 1500000,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    rating: 4.7,
    reviews: 78,
    isNew: false,
    discount: 20
  }
];

const newProducts = [
  {
    id: 5,
    name: 'Máy Hâm Sữa Tiệt Trùng 2 in 1',
    price: 950000,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1620178728618-d97c9a138a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    rating: 5,
    reviews: 12,
    isNew: true,
    discount: null
  },
  {
    id: 6,
    name: 'Bộ Chăm Sóc Móng Cho Bé',
    price: 180000,
    oldPrice: 220000,
    image: 'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    rating: 4.9,
    reviews: 28,
    isNew: true,
    discount: 18
  },
  {
    id: 7,
    name: 'Đai Đỡ Bụng Bầu Cao Cấp',
    price: 350000,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1556648011-e01aca870a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    rating: 4.7,
    reviews: 19,
    isNew: true,
    discount: null
  },
  {
    id: 8,
    name: 'Bộ Đồ Chơi Phát Triển Trí Tuệ',
    price: 550000,
    oldPrice: 650000,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    rating: 4.8,
    reviews: 32,
    isNew: true,
    discount: 15
  }
];

// Format price to VND
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    .format(price)
    .replace('₫', 'đ');
};

interface FeaturedProductsProps {
  title: string;
  type: 'bestseller' | 'new';
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ title, type }) => {
  const products = type === 'bestseller' ? bestsellers : newProducts;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              {/* Product image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
                
                {/* Discount badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                )}
                
                {/* New badge */}
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Mới
                  </div>
                )}
                
                {/* Quick action buttons */}
                <div className="absolute bottom-3 right-3 flex space-x-2">
                  <button className="bg-white p-2 rounded-full shadow hover:bg-pink-50 transition duration-300">
                    <Heart size={18} className="text-gray-600 hover:text-pink-600" />
                  </button>
                  <button className="bg-pink-600 p-2 rounded-full shadow hover:bg-pink-700 transition duration-300">
                    <ShoppingCart size={18} className="text-white" />
                  </button>
                </div>
              </div>
              
              {/* Product info */}
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2 hover:text-pink-600 transition duration-300">
                  <a href="#">{product.name}</a>
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center">
                  <span className="font-semibold text-pink-600 text-lg">
                    {formatPrice(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 text-sm line-through ml-2">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-block border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            Xem Tất Cả
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;