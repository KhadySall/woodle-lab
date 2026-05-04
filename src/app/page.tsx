import { Hero } from '@/components/sections/Hero'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { LabSpotlight } from '@/components/sections/LabSpotlight'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06060F]">
      <Hero />
      <Ecosystem />
      <LabSpotlight />
      <Footer />
    </main>
  )
}
