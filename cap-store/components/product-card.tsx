"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart } from "lucide-react"

interface ProductProps {
  product: {
    id: string
    name: string
    price: number
    colors: string[]
    material: string
    image: string
    featured?: boolean
  }
}

export function ProductCard({ product }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image */}
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Quick actions overlay */}
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <Button size="icon" variant="secondary" className="rounded-full h-10 w-10">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full h-10 w-10 border-zinc-600">
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        {/* Featured badge */}
        {product.featured && (
          <Badge className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-600 hover:to-cyan-600">
            Featured
          </Badge>
        )}
      </div>

      {/* Product info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-bold text-lg mb-1 transition-colors duration-200 group-hover:text-purple-400">
            {product.name}
          </h3>
        </Link>

        <div className="flex justify-between items-center mb-2">
          <p className="text-zinc-300 font-semibold">${product.price}</p>
          <p className="text-zinc-500 text-sm">{product.material}</p>
        </div>

        {/* Color options */}
        <div className="flex items-center gap-1 mt-3">
          <span className="text-xs text-zinc-500 mr-2">Colors:</span>
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-3 h-3 rounded-full border border-zinc-700"
              style={{
                background: color.toLowerCase().includes("black")
                  ? "black"
                  : color.toLowerCase().includes("white")
                    ? "white"
                    : color.toLowerCase().includes("red")
                      ? "#ef4444"
                      : color.toLowerCase().includes("blue")
                        ? "#3b82f6"
                        : color.toLowerCase().includes("orange")
                          ? "#f97316"
                          : color.toLowerCase().includes("crimson")
                            ? "#dc2626"
                            : color.toLowerCase().includes("neon")
                              ? "#22d3ee"
                              : "#a855f7",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
