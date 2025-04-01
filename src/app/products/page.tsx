import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Bhatura Dough - Classic and Multigrain',
    year: '1940s',
    origin: 'Punjab',
    image: 'https://ext.same-assets.com/4259777820/3794029512.jpeg'
  },
  {
    id: 2,
    name: 'Naan Dough - Classic and Multigrain',
    year: '1526',
    origin: 'Delhi (Mughal Era)',
    image: 'https://ext.same-assets.com/4259777820/1339497856.jpeg'
  },
  {
    id: 3,
    name: 'Amritsari Kulcha Dough',
    year: '1948',
    origin: 'Punjab',
    image: 'https://ext.same-assets.com/4259777820/4198903333.jpeg'
  },
  {
    id: 4,
    name: 'Awadhi Reshmi Paratha Dough',
    year: '1800s',
    origin: 'Uttar Pradesh (Lucknow)',
    image: 'https://ext.same-assets.com/4259777820/1085443008.jpeg'
  },
  {
    id: 5,
    name: 'Cookie Dough',
    year: '1930s',
    origin: 'Global',
    image: 'https://ext.same-assets.com/4259777820/728500494.jpeg'
  },
  {
    id: 6,
    name: 'Ready to Cook Pizza Dough',
    year: '1700s',
    origin: 'Italy',
    image: 'https://ext.same-assets.com/4259777820/4053888577.png'
  },
  {
    id: 7,
    name: 'Sheermal',
    year: '1600s',
    origin: 'Uttar Pradesh (Lucknow)',
    image: 'https://ext.same-assets.com/4259777820/3815913759.jpeg'
  },
  {
    id: 8,
    name: 'Ulte Tawe Ka Paratha Dough',
    year: '1800s',
    origin: 'Hyderabad',
    image: 'https://ext.same-assets.com/4259777820/1255932197.jpeg'
  },
  {
    id: 9,
    name: 'Bajra Missi',
    year: 'Ancient Times',
    origin: 'Rajasthan',
    image: 'https://ext.same-assets.com/4259777820/3731920623.png'
  },
  {
    id: 10,
    name: 'Bajra Roti',
    year: 'Ancient Times',
    origin: 'Rajasthan',
    image: 'https://ext.same-assets.com/4259777820/2904697521.png'
  },
  {
    id: 11,
    name: 'Bajra Kulcha',
    year: '1900s',
    origin: 'Punjab',
    image: 'https://ext.same-assets.com/4259777820/874278698.png'
  },
  {
    id: 12,
    name: 'Makki Roti',
    year: '1600s',
    origin: 'Punjab',
    image: 'https://ext.same-assets.com/4259777820/4053888577.png'
  }
];

export default function ProductsPage() {
  return (
    <MainLayout activePage="our products">
      <div className="relative bg-hero-pattern bg-cover bg-center py-24 text-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-heading text-white mb-4">Welcome to Frost Delight!</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Discover premium frozen food solutions that combine convenience, innovation, and quality,
            ensuring your meals are always fresh, fast, and flavorful.
          </p>
          <nav className="mt-6 flex justify-center">
            <ol className="flex items-center text-white/80">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="mx-2">/</li>
              <li className="text-white">Our Products</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-4px]">
                <div className="relative h-60">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute top-4 left-4 bg-prodough-yellow text-prodough-dark px-3 py-1 rounded-md text-sm font-medium">
                    {product.year}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-prodough-dark px-3 py-1 rounded-md text-xs">
                    Origin: {product.origin}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-heading text-prodough-dark mb-2">{product.name}</h3>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-prodough-yellow font-medium hover:underline inline-flex items-center"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
