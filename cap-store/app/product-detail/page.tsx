"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Share2, ShoppingCart, Check, Truck, RefreshCw, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export interface CapCategory {
  id: string;
  name: string;
  description?: string;
  image?: string | null;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

// Product type definition with multiple categories
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description?: string;
  colors: Array<{
    name: string;
    value: string;
  }>;
  sizes?: string[];
  material: string;
  images: Array<{ id: string; url: string }>;
  features?: string[];
  inStock?: boolean;
  featured?: boolean;
  new?: boolean;
  category?: CapCategory; // Array of categories
}


interface ProductDetailProps {
  product: Product
  // onAddToCart?: (product: Product, quantity: number, selectedColor: string, selectedSize?: string) => void
}

export function ProductDetail({ product}: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "")
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "")
  const params = new URLSearchParams(window.location.search)
console.log("params", params);

  const handleAddToCart = () => {
    // if (onAddToCart) {
    //   onAddToCart(product, quantity, selectedColor, selectedSize)
    // }
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="p-6">
          <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-zinc-900">
            <Image
              src={product.images[selectedImage].url|| "/placeholder.svg?height=600&width=600"}
              alt={product.name}
              fill
              className="object-cover"
            />

            {product.new && <Badge className="absolute top-3 left-3 bg-cyan-600 hover:bg-cyan-600">New</Badge>}

            {discount > 0 && (
              <Badge className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-600">{discount}% OFF</Badge>
            )}
          </div>

          {/* Thumbnail gallery */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={cn(
                    "relative aspect-square rounded-md overflow-hidden border-2",
                    selectedImage === index ? "border-purple-500" : "border-zinc-800 hover:border-zinc-700",
                  )}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.url || "/placeholder.svg?height=100&width=100"}
                    alt={`${product.name} - view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6 lg:pr-8">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-zinc-500 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                {/* {product.category} */}
              </Badge>
            </div>

            <p className="text-zinc-400 mb-6">{product.description}</p>

            {/* Material info */}
            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
              <span className="font-medium">Material:</span>
              <span>{product.material}</span>
            </div>

            {/* Color selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">
                Color: <span className="text-zinc-400">{selectedColor}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center border-2",
                      selectedColor === color.name ? "border-purple-500" : "border-zinc-800",
                    )}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                  >
                    <span className="w-6 h-6 rounded-full" style={{ backgroundColor: color.value }} />
                    {selectedColor === color.name && <Check className="absolute h-3 w-3 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">
                  Size: <span className="text-zinc-400">{selectedSize}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={cn(
                        "h-9 min-w-[2.5rem] px-3 rounded-md border-2 text-sm font-medium",
                        selectedSize === size
                          ? "border-purple-500 bg-purple-500/10 text-white"
                          : "border-zinc-800 text-zinc-400 hover:border-zinc-700",
                      )}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-r-none border-zinc-800"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <div className="h-9 px-4 flex items-center justify-center border-y border-zinc-800 text-sm">
                  {quantity}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-l-none border-zinc-800"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white flex-1"
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>

              <Button variant="outline" size="icon" className="h-11 w-11 border-zinc-800">
                <Heart className="h-5 w-5" />
              </Button>

              <Button variant="outline" size="icon" className="h-11 w-11 border-zinc-800">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Product features */}
            {product.features && product.features.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Shipping info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-t border-zinc-800">
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-zinc-500" />
                <span className="text-zinc-400">Free shipping over $100</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RefreshCw className="h-4 w-4 text-zinc-500" />
                <span className="text-zinc-400">30-day returns</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-zinc-500" />
                <span className="text-zinc-400">2-year warranty</span>
              </div>
            </div>

            {/* Accordion for additional info */}
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="details" className="border-zinc-800">
                <AccordionTrigger className="text-sm font-medium py-3">Product Details</AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-400">
                  <p>
                    Our {product.name} is crafted with {product.material} for maximum comfort and durability. Designed
                    with both style and functionality in mind, this cap features advanced moisture-wicking technology
                    and a perfect fit for all-day wear.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping" className="border-zinc-800">
                <AccordionTrigger className="text-sm font-medium py-3">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-400">
                  <p>
                    Free standard shipping on orders over $100. Expedited shipping options available at checkout. Unused
                    items can be returned within 30 days of delivery for a full refund or exchange.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="care" className="border-zinc-800">
                <AccordionTrigger className="text-sm font-medium py-3">Care Instructions</AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-400">
                  <p>
                    Hand wash with cold water or machine wash on gentle cycle. Do not bleach. Air dry or tumble dry on
                    low heat. Reshape while damp.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}


