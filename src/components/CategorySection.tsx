import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Đồ Cho Mẹ Bầu',
    image: 'https://images.unsplash.com/photo-1556648011-e01aca870a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    color: 'bg-pink-100 hover:bg-pink-200',
    textColor: 'text-pink-800'
  },
  {
    id: 2,
    name: 'Đồ Cho Bé',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    color: 'bg-blue-100 hover:bg-blue-200',
    textColor: 'text-blue-800'
  },
  {
    id: 3,
    name: 'Sữa & Thực Phẩm',
    image: 'https://images.unsplash.com/photo-1594614271360-0ed9a570ae15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    color: 'bg-green-100 hover:bg-green-200',
    textColor: 'text-green-800'
  },
  {
    id: 4,
    name: 'Đồ Dùng Hàng Ngày',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    color: 'bg-yellow-100 hover:bg-yellow-200',
    textColor: 'text-yellow-800'
  },
  {
    id: 5,
    name: 'Quà Tặng',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
    color: 'bg-purple-100 hover:bg-purple-200',
    textColor: 'text-purple-800'
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Danh Mục Sản Phẩm</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <a 
              key={category.id}
              href="#" 
              className={`${category.color} rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 flex flex-col`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition duration-300 hover:opacity-90"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className={`font-semibold ${category.textColor}`}>{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;