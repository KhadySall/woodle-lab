import { Hero } from '@/components/sections/Hero'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06060F]">
      <Hero />
      <Ecosystem />
      <Footer />
    </main>
  )
}
