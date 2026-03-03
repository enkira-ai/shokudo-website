import Hero from './components/Hero'
import MenuHighlights from './components/MenuHighlights'
import OnlineOrdering from './components/OnlineOrdering'
import LocationHours from './components/LocationHours'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6EF]">
      <Hero />
      <MenuHighlights />
      <OnlineOrdering />
      <LocationHours />
      <Contact />
      <Footer />
    </main>
  )
}
