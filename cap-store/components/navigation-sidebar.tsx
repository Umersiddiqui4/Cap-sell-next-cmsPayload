"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Home, ShoppingBag, Tag, Heart, User, Menu, X, ShoppingCart, LogOut, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"


interface NavigationSidebarProps {
  categories: {
    id: string
    name: string
    productCount?: number
  }[]
  onCategorySelect?: (categoryId: string) => void
  selectedCategory?: string | null
  className?: string
}

export function NavigationSidebar({
  categories,
  onCategorySelect,
  selectedCategory,
  className,
}: NavigationSidebarProps) {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(!isMobile)
  const [cartItemCount, setCartItemCount] = useState(0)

  // Close sidebar on mobile when navigating
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [pathname, isMobile])

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  // Navigation items
  const mainNavItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Shop All", icon: ShoppingBag, path: "/caps" },
    { name: "New Arrivals", icon: Tag, path: "/product-example" },
    { name: "Featured", icon: Tag, path: "/featured" },
    { name: "Sale", icon: Tag, path: "/sale" },
  ]

  const accountNavItems = [
    { name: "My Account", icon: User, path: "/account" },
    { name: "Wishlist", icon: Heart, path: "/wishlist" },
    { name: "Orders", icon: ShoppingBag, path: "/orders" },
    { name: "Help", icon: HelpCircle, path: "/help" },
  ]

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <Button
          variant="outline"
          size="icon"
          className="fixed left-4 top-4 z-50 border-zinc-700 bg-black/50 backdrop-blur-sm"
          onClick={toggleSidebar}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      )}

      {/* Sidebar backdrop for mobile */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full z-40 bg-zinc-950/90 backdrop-blur-md border-r border-zinc-800 transition-all duration-300 overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isMobile ? "w-[280px]" : "w-[280px]",
          className,
        )}
      >
        {/* Logo and brand */}
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
              <ShoppingBag className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              CapStore
            </span>
          </Link>
        </div>

        <Separator className="bg-zinc-800" />

        {/* Main navigation */}
        <div className="p-4">
          <h3 className="font-medium mb-3 text-sm text-zinc-300 px-3">Main Menu</h3>
          <nav>
            <ul className="space-y-1">
              {mainNavItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.path}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-900",
                        pathname === item.path && "bg-zinc-900 text-white",
                      )}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      {item.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className="bg-zinc-800 my-2" />

        {/* Categories */}
        <div className="p-4">
          <h3 className="font-medium mb-3 text-sm text-zinc-300 px-3">Categories</h3>
          <nav>
            <ul className="space-y-1">
              <li>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-900",
                    selectedCategory === null && "bg-zinc-900 text-white",
                  )}
                  onClick={() => onCategorySelect && onCategorySelect("")}
                >
                  All Caps
                </Button>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-between text-zinc-400 hover:text-white hover:bg-zinc-900",
                      selectedCategory === category.id && "bg-zinc-900 text-white",
                    )}
                    onClick={() => onCategorySelect && onCategorySelect(category.id)}
                  >
                    <span className="flex items-center">
                      <span>{category.name}</span>
                    </span>
                    {category.productCount && (
                      <Badge variant="outline" className="ml-2 text-xs border-zinc-700">
                        {category.productCount}
                      </Badge>
                    )}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className="bg-zinc-800 my-2" />

        {/* Account navigation */}
        <div className="p-4">
          <h3 className="font-medium mb-3 text-sm text-zinc-300 px-3">My Account</h3>
          <nav>
            <ul className="space-y-1">
              {accountNavItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.path}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-900",
                        pathname === item.path && "bg-zinc-900 text-white",
                      )}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      {item.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Cart summary */}
        <div className="p-4 mt-auto">
          <Link href="/cart">
            <Button
              variant={cartItemCount > 0 ? "default" : "outline"}
              className={cn(
                "w-full justify-between",
                cartItemCount > 0
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  : "border-zinc-700 text-zinc-300",
              )}
            >
              <div className="flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                <span>Cart</span>
              </div>
              {cartItemCount > 0 ? (
                <Badge className="bg-white text-black ml-2">{cartItemCount}</Badge>
              ) : (
                <span className="text-zinc-400 text-sm">Empty</span>
              )}
            </Button>
          </Link>
        </div>

        {/* Sign out button */}
        <div className="p-4">
          <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-900">
            <LogOut className="mr-2 h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </aside>
    </>
  )
}
