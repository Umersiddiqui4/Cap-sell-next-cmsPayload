"use client"
import { CategoryCard } from "@/components/category-card"
import { FeaturedProducts } from "@/components/featured-products"
import { HeroSection } from "@/components/hero-section"
import { LayoutWithNavSidebar } from "@/components/layout-with-nav-sidebar"
import { Newsletter } from "@/components/newsletter"
import { useCapCategories } from "@/hooks/useCapCategories"

export default function Home() {
  // Categories data
//  const categories = [
//     {
//       id: "sports",
//       name: "Sports Caps",
//       description: "Performance caps for athletes and sports enthusiasts",
//       image: "https://speedsports.pk/cdn/shop/files/JP0387_1_HARDWARE_Photography_FrontCenterView_white.jpg?v=1741167696&width=600",
//     },
//     {
//       id: "casual",
//       name: "Casual Caps",
//       description: "Everyday caps for a relaxed, stylish look",
//       image: "https://img.drz.lazcdn.com/static/pk/p/a400152e9baf313ccca009cb4badbd0a.jpg_720x720q80.jpg",
//     },
//     {
//       id: "trucker",
//       name: "Trucker Caps",
//       description: "Classic mesh-backed caps with modern designs",
//       image: "https://loveyourbuttco.com/cdn/shop/products/IMG_9925_1080x.jpg?v=1668137354",
//     },
//     {
//       id: "premium",
//       name: "Premium Collection",
//       description: "Luxury caps crafted with premium materials",
//       image: "https://www.capsclubpk.com/cdn/shop/files/DSC01679.jpg?v=1710725041",
//     },
//   ]


  const { categories, loading, error } = useCapCategories();
function handleroute(category: { id: string }) {
  window.location.href = `/caps?category=${category.id}`;
}

  return (
      
    <main className="min-h-screen bg-black text-white">
      <HeroSection />

      {/* Categories Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Explore Categories
          </h2>
          <p className="text-zinc-400 mb-10 max-w-2xl">
            Browse our collection of premium caps across various styles and purposes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (

              <CategoryCard key={category.id} category={category}  />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Newsletter Section */}
      <Newsletter />
    </main>
     
  )
}
