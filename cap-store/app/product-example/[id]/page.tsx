"use client"
import { CategoriesSection } from "@/components/categories-section"
import ProductDetail from "@/components/product-detail";
import { useCapCategories } from "@/hooks/useCapCategories";
import { useCaps } from "@/hooks/useCaps";
import { useParams } from "next/navigation";


export default function ProductExamplePage() {

     const router = useParams();
  const { caps, loading, error } = useCaps();

  const { categories } = useCapCategories();
  const product = caps?.find((cap) => cap.id === router.id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;
console.log("params", router);

  return (
    <main className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          Component Examples
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Product Detail Component</h2>
          <ProductDetail
            product={product}
            // onAddToCart={(product, quantity, color, size) => {
            //   console.log("Added to cart:", { product, quantity, color, size })
            //   // In a real app, this would add the item to the cart
            // }}
          />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Categories Component</h2>
          <CategoriesSection categories={categories} />
        </section>
      </div>
    </main>
  )
}
