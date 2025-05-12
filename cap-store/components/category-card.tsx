import Link from "next/link"
import Image from "next/image"

export interface CategoryProps {
  category: any
  onSelect?: () => void
  isSelected?: boolean
}

export function CategoryCard({ category }: CategoryProps) {
  return (
    <Link
      href={`/caps`}
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
