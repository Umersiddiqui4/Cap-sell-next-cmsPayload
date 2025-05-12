"use client"

import { useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { NavigationSidebar } from "./navigation-sidebar"


interface LayoutWithNavSidebarProps {
  children: ReactNode
  categories: {
    id: string
    name: string
    productCount?: number
  }[]
  initialCategory?: string | null
  className?: string
}

export function LayoutWithNavSidebar({
  children,
  categories,
  initialCategory = null,
  className,
}: LayoutWithNavSidebarProps) {
  const isMobile = useIsMobile()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory)

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === "" ? null : categoryId)
    // You can add additional logic here, like navigating to the category page
    console.log("Selected category:", categoryId === "" ? "All" : categoryId)
  }

  return (
    <div className="flex min-h-screen bg-black">
      <NavigationSidebar
        categories={categories}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      <main className={cn("flex-1 transition-all duration-300", isMobile ? "ml-0" : "ml-[280px]", className)}>
        {children}
      </main>
    </div>
  )
}
