import React from 'react';

const PromotionBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ưu Đãi Đặc Biệt Cho Mẹ Bầu</h2>
            <p className="text-lg mb-6 text-white/90">
              Đăng ký thành viên ngay hôm nay để nhận gói quà tặng dành cho mẹ bầu trị giá 500.000đ và nhiều ưu đãi hấp dẫn khác.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="bg-white text-pink-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                Đăng Ký Ngay
              </a>
              <a 
                href="#" 
                className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                Tìm Hiểu Thêm
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
              alt="Promotion" 
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxHeight: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;