import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import ProjectsGrid from './components/ProjectsGrid'
import CaseStudy from './components/CaseStudy'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(244,114,182,0.12),transparent_60%)] blur-2xl" />
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.12),transparent_60%)] blur-2xl" />
      </div>

      <Navbar />
      <Hero />
      <FeaturedProjects />

      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-2 flex items-center justify-between">
            <div className="text-white/80 text-sm">Explore more work</div>
            <a href="/projects" className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white font-medium">Open projects</a>
          </div>
        </div>
      </section>

      <About />
      <Contact />

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Omry Golan — Playful design with serious impact.</p>
          <a href="#home" className="text-white/70 hover:text-white text-sm">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
