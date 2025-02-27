import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">MomBaby<span className="text-pink-400">Shop</span></h3>
            <p className="text-gray-300 mb-4">
              Chúng tôi cung cấp các sản phẩm chất lượng cao, an toàn và đáng tin cậy dành cho mẹ bầu và trẻ nhỏ.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">Trang Chủ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">Sản Phẩm</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">Khuyến Mãi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">Về Chúng Tôi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">Liên Hệ</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Danh Mục Sản Phẩm</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">Đồ Cho Mẹ Bầu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">Đồ Cho Bé</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">Sữa & Thực Phẩm</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">Đồ Dùng Hàng Ngày</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">Quà Tặng</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông Tin Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-pink-400" />
                <span className="text-gray-300">123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-pink-400" />
                <span className="text-gray-300">0123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-pink-400" />
                <span className="text-gray-300">info@mombabyshop.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Đăng Ký Nhận Tin</h3>
            <p className="text-gray-300 mb-4">Nhận thông tin về sản phẩm mới và khuyến mãi đặc biệt.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Nhập email của bạn" 
                className="flex-grow px-4 py-2 rounded-lg focus:outline-none text-gray-800"
              />
              <button className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-lg transition duration-300">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 MomBabyShop. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;