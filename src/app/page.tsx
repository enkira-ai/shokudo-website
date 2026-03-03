import menuData from '@/data/menu.json'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import LocationHours from './components/LocationHours'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Navigation />
      <Hero />
      <About />
      <Menu menuData={menuData as Parameters<typeof Menu>[0]['menuData']} />
      <Gallery />
      <LocationHours />
      <Footer />
    </main>
  )
}
