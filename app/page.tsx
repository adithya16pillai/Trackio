import Features from "./components/Features"
import HeroSection from "./components/HeroSection"
import Pricing from "./components/Pricing"

export default function Home() {
  return (
    <main>
      {/* Other components */}
      <HeroSection />
      <Features />
      <Pricing />
      {/* Other components */}
    </main>
  )
}