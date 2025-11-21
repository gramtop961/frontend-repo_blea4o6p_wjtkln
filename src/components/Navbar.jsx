import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 transition-all ${scrolled ? 'translate-y-0' : ''}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`backdrop-blur-xl border rounded-full px-4 py-3 flex items-center justify-between transition-all ${scrolled ? 'bg-slate-900/70 border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]' : 'bg-slate-900/40 border-white/10'}`}>
          <a href="#home" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 rounded-full bg-gradient-to-br from-pink-400 via-fuchsia-400 to-violet-500 shadow-inner shadow-white/10 items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="font-semibold text-white tracking-tight">Omry Golan</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <button className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-3">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-2xl text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
