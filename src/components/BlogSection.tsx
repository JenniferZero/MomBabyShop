import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Chế Độ Dinh Dưỡng Cho Mẹ Bầu 3 Tháng Đầu',
    excerpt: 'Những thực phẩm giàu dinh dưỡng và an toàn cho mẹ bầu trong 3 tháng đầu thai kỳ...',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    date: '15/05/2025',
    category: 'Dinh Dưỡng'
  },
  {
    id: 2,
    title: 'Cách Chọn Đồ Sơ Sinh An Toàn Cho Bé',
    excerpt: 'Hướng dẫn chi tiết cách chọn quần áo sơ sinh an toàn, thoáng mát và phù hợp với làn da nhạy cảm của bé...',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    date: '10/05/2025',
    category: 'Chăm Sóc Bé'
  },
  {
    id: 3,
    title: 'Bí Quyết Giúp Bé Ngủ Ngon Suốt Đêm',
    excerpt: 'Những phương pháp hiệu quả giúp bé yêu của bạn có giấc ngủ sâu và ngon suốt đêm...',
    image: 'https://images.unsplash.com/photo-1533007716222-4b465613a984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    date: '05/05/2025',
    category: 'Giấc Ngủ'
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Blog Chia Sẻ</h2>
          <a 
            href="#" 
            className="mt-4 md:mt-0 text-pink-600 hover:text-pink-700 font-medium"
          >
            Xem tất cả bài viết
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs ml-3">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-pink-600 transition duration-300">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center"
                >
                  Đọc tiếp
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;