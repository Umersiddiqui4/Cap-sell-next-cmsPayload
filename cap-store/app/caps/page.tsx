"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { type Product } from "@/components/product-detail"
import type { Category } from "@/components/categories-section"
import { X, Filter, ChevronRight } from "lucide-react"
import { useCapCategories } from "@/hooks/useCapCategories"
import { useCaps } from "@/hooks/useCaps"
import { CategoryProps } from "@/components/category-card"
import ProductDetail from "@/components/product-detail"

import Link from "next/link"
export default function CapsShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Sample categories data
  // const categories: Category[] = [
  //   {
  //     id: "sports",
  //     name: "Sports Caps",
  //     description: "Performance caps for athletes and sports enthusiasts",
  //     image: "https://speedsports.pk/cdn/shop/files/JP0387_1_HARDWARE_Photography_FrontCenterView_white.jpg?v=1741167696&width=600",
  //   },
  //   {
  //     id: "casual",
  //     name: "Casual Caps",
  //     description: "Everyday caps for a relaxed, stylish look",
  //     image: "https://img.drz.lazcdn.com/static/pk/p/a400152e9baf313ccca009cb4badbd0a.jpg_720x720q80.jpg",
  //   },
  //   {
  //     id: "trucker",
  //     name: "Trucker Caps",
  //     description: "Classic mesh-backed caps with modern designs",
  //     image: "https://loveyourbuttco.com/cdn/shop/products/IMG_9925_1080x.jpg?v=1668137354",
  //   },
  //   {
  //     id: "premium",
  //     name: "Premium Collection",
  //     description: "Luxury caps crafted with premium materials",
  //     image: "https://www.capsclubpk.com/cdn/shop/files/DSC01679.jpg?v=1710725041",
  //   },
  // ]


  const { categories, loading, error } = useCapCategories();



  // Sample products data
  // const allProducts: Product[] = [
  //   {
  //     id: "quantum-pro-sports",
  //     name: "Quantum Pro Sports Cap",
  //     price: 59.99,
  //     colors: [
  //       { name: "Black", value: "#000000" },
  //       { name: "Blue", value: "#0ea5e9" },
  //       { name: "Red", value: "#dc2626" },
  //     ],
  //     material: "Performance Polyester",
  //     images: ["https://justinehats.com/wp-content/uploads/2021/01/mens-best-jeans-cap-2.jpg"],
  //     category: "sports",
  //     inStock: true,
  //   },
  //   {
  //     id: "velocity-sports",
  //     name: "Velocity Training Cap",
  //     price: 49.99,
  //     colors: [
  //       { name: "Gray", value: "#6b7280" },
  //       { name: "Green", value: "#10b981" },
  //     ],
  //     material: "Moisture-Wicking Fabric",
  //     images: ["https://i.ebayimg.com/images/g/ydAAAOSwuBhj9vZl/s-l400.jpg"],
  //     category: "sports",
  //     inStock: true,
  //   },
  //   {
  //     id: "urban-casual",
  //     name: "Urban Street Cap",
  //     price: 39.99,
  //     colors: [
  //       { name: "Black", value: "#000000" },
  //       { name: "White", value: "#ffffff" },
  //       { name: "Beige", value: "#d4c4a8" },
  //     ],
  //     material: "Cotton Blend",
  //     images: ["https://img.joomcdn.net/2d219550180d0a2b78091554428ade9c00d6ab36_original.jpeg"],
  //     category: "casual",
  //     inStock: true,
  //   },
  //   {
  //     id: "daily-casual",
  //     name: "Daily Comfort Cap",
  //     price: 34.99,
  //     colors: [
  //       { name: "Navy", value: "#1e3a8a" },
  //       { name: "Maroon", value: "#9f1239" },
  //     ],
  //     material: "Soft Cotton",
  //     images: ["https://pictures-kenya.jijistatic.com/46474346_NjIwLTYyMC1hNjljM2NhMTk3LTE.webp"],
  //     category: "casual",
  //     inStock: true,
  //   },
  //   {
  //     id: "mountain-trucker",
  //     name: "Mountain Explorer Trucker",
  //     price: 44.99,
  //     colors: [
  //       { name: "Green", value: "#10b981" },
  //       { name: "Brown", value: "#92400e" },
  //     ],
  //     material: "Mesh and Canvas",
  //     images: ["https://img.lazcdn.com/g/p/eb9d7382b9e2d44d046a644acfebf6b6.jpg_720x720q80.jpg"],
  //     category: "trucker",
  //     inStock: true,
  //   },
  //   {
  //     id: "retro-trucker",
  //     name: "Retro Patch Trucker",
  //     price: 42.99,
  //     colors: [
  //       { name: "Blue", value: "#0ea5e9" },
  //       { name: "Orange", value: "#f97316" },
  //     ],
  //     material: "Mesh and Cotton",
  //     images: ["https://i.pinimg.com/originals/a9/32/2b/a9322b16e50af6dc1b86ae15fb89ff2c.jpg"],
  //     category: "trucker",
  //     inStock: true,
  //   },
  //   {
  //     id: "luxury-premium",
  //     name: "Luxury Leather Accent Cap",
  //     price: 89.99,
  //     originalPrice: 109.99,
  //     colors: [
  //       { name: "Black", value: "#000000" },
  //       { name: "Brown", value: "#92400e" },
  //     ],
  //     material: "Premium Wool Blend with Leather Accents",
  //     images: ["https://images.meesho.com/images/products/428151072/zshsi_512.webp"],
  //     category: "premium",
  //     inStock: true,
  //     featured: true,
  //   },
  //   {
  //     id: "signature-premium",
  //     name: "Signature Edition Cap",
  //     price: 79.99,
  //     colors: [
  //       { name: "Black", value: "#000000" },
  //       { name: "Navy", value: "#1e3a8a" },
  //     ],
  //     material: "Premium Cotton with Satin Lining",
  //     images: ["https://justinehats.com/wp-content/uploads/2021/01/mens-best-jeans-cap-2.jpg"], // Reused
  //     category: "premium",
  //     inStock: true,
  //     new: true,
  //   },
  // ];
  
  console.log("Categories:", categories)
  const { caps } = useCaps();
const allProducts: any = caps || [];
  if (loading) return <div>Loading caps...</div>;
  if (error) return <div>Error: {error}</div>;
 console.log("All Products:", allProducts);
 console.log("Selected category:", selectedCategory);
 
  

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? allProducts.filter((product: any) => product.category?.id === selectedCategory)
    : allProducts

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId)
    setSelectedProduct(null) // Clear selected product when changing category
  }

  // Handle product selection
  const handleProductSelect = (product: Product) => {
    // // Find the full product details
    // const fullProduct = allProducts.find((p: any) => p.id === product.id)
    // if (fullProduct) {
    //   setSelectedProduct(fullProduct)
    //   // Scroll to product detail section
    //   setTimeout(() => {
    //   const element = document.getElementById("product-detail")
    //   if (element) {
    //     element.scrollIntoView({ behavior: "smooth" })
    //   }
    //   }, 100)
    // }
    }

  // Handle add to cart
  const handleAddToCart = (product: Product, quantity: number, color: string, size?: string) => {
    console.log("Added to cart:", { product, quantity, color, size })
    // In a real app, this would add the item to the cart
    alert(`Added ${quantity} ${product.name} to cart`)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero section */}
      <section className="relative py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-80">
          <Image src="/caps.png" alt="Caps background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Explore Our Caps
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mb-8">
            Browse our extensive collection of premium caps for every style and occasion
          </p>

          {/* Mobile filter toggle */}
          <Button
            variant="outline"
            className="md:hidden border-zinc-700 text-zinc-300 mb-6"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="mr-2 h-4 w-4" />
            {isFilterOpen ? "Hide Filters" : "Show Filters"}
          </Button>

          {/* Categories filter */}
          <div
            className={`${
              isFilterOpen ? "block" : "hidden md:block"
            } bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-800 p-4 mb-8`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Categories</h2>
              {selectedCategory && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs text-zinc-400 hover:text-white"
                  onClick={() => setSelectedCategory(null)}
                >
                  Clear filter
                  <X className="ml-1 h-3 w-3" />
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
                {categories && categories.length > 0 ? (
                categories.map((category) => (
                  <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  className={
                    selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 border-0"
                    : "border-zinc-700 text-zinc-700 hover:text-white hover:bg-black hover:border-zinc-600"
                  }
                  onClick={() => handleCategorySelect(category.id)}
                  >
                  {category.name}
                  {/* {category.productCount && <span className="ml-1 text-xs opacity-70">({category.productCount})</span>} */}
                  </Button>
                ))
                ) : (
                <p className="text-zinc-400">No categories available.</p>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-zinc-950">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {selectedCategory
                ? `${categories.find((c) => c.id === selectedCategory)?.name} (${filteredProducts.length})`
                : `All Caps (${filteredProducts.length})`}
            </h2>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product: any) => (
                <ProductCard key={product.id} product={product}  />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <p className="text-zinc-400">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product detail section */}
      {selectedProduct && (
        <section id="product-detail" className="py-16 px-4 md:px-6 lg:px-8 bg-black">
          <div className="container mx-auto">
            <div className="flex items-center mb-6">
              <Button
                variant="ghost"
                className="text-zinc-400 hover:text-white p-0 h-auto font-normal"
                onClick={() => setSelectedProduct(null)}
              >
                Back to products
              </Button>
              <ChevronRight className="h-4 w-4 text-zinc-700 mx-2" />
              <span className="text-zinc-300">{selectedProduct.name}</span>
            </div>

            <ProductDetail product={selectedProduct}  
            // onAddToCart={handleAddToCart} 
            />
          </div>
        </section>
      )}

      {/* Categories showcase */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onSelect={() => handleCategorySelect(category.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// Product Card Component
function ProductCard({
  product,
  // onSelect,
}: {
  product: Product
  // onSelect: (product: Product) => void
}) {
  return (
    <Link
    href={`/product-example/${product.id}`}
    // className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
  >
    <div
      className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] cursor-pointer"
      // onClick={() => onSelect(product)}
    >
      {/* Product image */}
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={product.images[0].url || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.new && <Badge className="bg-cyan-600 hover:bg-cyan-600">New</Badge>}
          {product.featured && <Badge className="bg-purple-600 hover:bg-purple-600">Featured</Badge>}
          {product.originalPrice && (
            <Badge className="bg-red-600 hover:bg-red-600">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>
      </div>

      {/* Product info */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 transition-colors duration-200 group-hover:text-purple-400">
          {product.name}
        </h3>

        <div className="flex justify-between items-center mb-2">
          <p className="text-zinc-300 font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-zinc-500 text-sm">{product.material}</p>
        </div>

        {/* Color options */}
        <div className="flex items-center gap-1 mt-3">
          <span className="text-xs text-zinc-500 mr-2">Colors:</span>
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-3 h-3 rounded-full border border-zinc-700"
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>

        {/* View details button - only visible on hover */}
        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 mt-0 group-hover:mt-4">
          <Button
            variant="ghost"
            className="w-full text-purple-400 hover:text-purple-300 hover:bg-purple-950/30"
            size="sm"
          >
            View Details
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
    </Link>
  )
}

// Category Card Component

export function CategoryCard({ category }: CategoryProps) {
  return (
    <Link
      href={`/products?category=${category.id}`}
      className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
    >
      <div className="aspect-square relative">
        <Image
          src={category.image ? category.image : category.imageUrl}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{category.name}</h3>
        <p className="text-zinc-400 text-sm">{category.description}</p>
        <div className="h-0.5 w-0 bg-gradient-to-r from-purple-500 to-cyan-500 mt-3 transition-all duration-300 group-hover:w-full" />
      </div>
    </Link>
  )
}