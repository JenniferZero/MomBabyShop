import React from 'react';
import { Heart, ShoppingCart, Search, User, Menu, ChevronDown, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';
import PromotionBanner from './components/PromotionBanner';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <FeaturedProducts title="Sản Phẩm Bán Chạy" type="bestseller" />
        <PromotionBanner />
        <FeaturedProducts title="Sản Phẩm Mới" type="new" />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;