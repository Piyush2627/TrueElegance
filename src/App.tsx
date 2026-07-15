import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';
import PromoBanner from './components/PromoBanner';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <PromoBanner />
        <AboutSection />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
