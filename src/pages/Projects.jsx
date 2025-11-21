import Navbar from '../components/Navbar'
import ProjectsGrid from '../components/ProjectsGrid'

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="fixed inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(244,114,182,0.12),transparent_60%)] blur-2xl" />
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.12),transparent_60%)] blur-2xl" />
      </div>

      <ProjectsGrid />

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Omry Golan</p>
          <a href="/" className="text-white/70 hover:text-white text-sm">Back home</a>
        </div>
      </footer>
    </div>
  )
}
