import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CategoryCard } from "./category-card"

// Category type definition
export interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount?: number
}

interface CategoriesSectionProps {
  title?: string
  description?: string
  categories: Category[]
  showAllLink?: boolean
}

export function CategoriesSection({
  title = "Explore Categories",
  description = "Browse our collection of premium caps across various styles and purposes",
  categories,
  showAllLink = true,
}: any) {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-zinc-950">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              {title}
            </h2>
            <p className="text-zinc-400 max-w-2xl">{description}</p>
          </div>

          {showAllLink && (
            <Link href="/categories" className="mt-4 md:mt-0">
              <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0">
                View all categories
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category: any) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}


