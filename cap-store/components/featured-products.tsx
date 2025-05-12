"use client"
import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
  // Sample product data
  const products = [
    {
      id: "1",
      name: "Quantum Mesh Cap",
      price: 59.99,
      colors: ["Black", "White", "Neon Blue"],
      material: "Recycled Polyester",
      image: "https://justinehats.com/wp-content/uploads/2021/01/mens-best-jeans-cap-2.jpg",
      featured: true,
    },
    {
      id: "2",
      name: "Nebula Snapback",
      price: 64.99,
      colors: ["Galaxy Black", "Cosmic Red", "Stellar White"],
      material: "Premium Cotton Blend",
      image: "https://i.ebayimg.com/images/g/ydAAAOSwuBhj9vZl/s-l400.jpg",
      featured: true,
    },
    {
      id: "3",
      name: "Vertex Sport Cap",
      price: 49.99,
      colors: ["Performance Black", "Electric Blue", "Crimson"],
      material: "Moisture-Wicking Fabric",
      image: "https://img.joomcdn.net/2d219550180d0a2b78091554428ade9c00d6ab36_original.jpeg",
      featured: true,
    },
    {
      id: "4",
      name: "Horizon Trucker",
      price: 54.99,
      colors: ["Midnight", "Sunset Orange", "Arctic White"],
      material: "Breathable Mesh",
      image: "https://img.lazcdn.com/g/p/eb9d7382b9e2d44d046a644acfebf6b6.jpg_720x720q80.jpg",
      featured: true,
    },
  ];
  

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-zinc-950">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          Featured Caps
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl">Our most popular designs, crafted with precision and style</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
