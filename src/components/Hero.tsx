import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Chăm Sóc <span className="text-pink-600">Mẹ</span> và <span className="text-blue-500">Bé</span> Với Sản Phẩm Tốt Nhất
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Khám phá bộ sưu tập sản phẩm chất lượng cao, an toàn và đáng tin cậy dành cho mẹ bầu và trẻ nhỏ.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                Mua Sắm Ngay
              </a>
              <a 
                href="#" 
                className="bg-white hover:bg-gray-100 text-pink-600 font-medium py-3 px-6 rounded-lg border border-pink-600 transition duration-300 text-center"
              >
                Tìm Hiểu Thêm
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Mẹ và bé" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-50"></div>
      <div className="hidden md:block absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
      <div className="hidden md:block absolute top-1/2 right-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-50"></div>
    </section>
  );
};

export default Hero;