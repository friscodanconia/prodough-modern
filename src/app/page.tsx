import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import SheermalSection from '@/components/sections/SheermalSection';
import ProductsShowcase from '@/components/sections/ProductsShowcase';
import NewsletterSection from '@/components/sections/NewsletterSection';

export default function Home() {
  return (
    <MainLayout activePage="home">
      <Hero />
      <WhyChooseUs />
      <SheermalSection />
      <ProductsShowcase />
      <NewsletterSection />
    </MainLayout>
  );
}
