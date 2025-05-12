import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/capgirl.png"
          alt="Futuristic caps collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            The Future of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Headwear</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8">
            Redefining style with cutting-edge designs and premium materials
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0"
            >
              <Link href="/caps">
              Shop Collection
              </Link>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button  size="lg" variant="outline" className="border-zinc-700 text-zinc-700 hover:text-white hover:bg-zinc-800">
              <Link href="/caps" className="">
              Explore Categories
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500" />
    </section>
  )
}
