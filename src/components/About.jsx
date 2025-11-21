import { motion } from 'framer-motion'
import { Smile, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 bg-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,114,182,0.2),transparent_60%)]" />
            <div className="absolute inset-4 rounded-[28px] bg-gradient-to-br from-pink-400 via-fuchsia-400 to-violet-500 mix-blend-overlay" />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="px-4 py-2 rounded-full bg-white/90 text-slate-900 text-sm font-semibold shadow-lg">Hi, I’m Omry 👋</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">About</h2>
          <p className="mt-4 text-white/80">Omry is a visual communication designer mixing brand systems, illustration, motion, and creative tech. The work is bright, confident, and a little mischievous — built on clear thinking and craft.</p>
          <div className="mt-6">
            <h3 className="text-white font-semibold mb-2 inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Brand Strategy','Art Direction','Illustration','Motion Design','Creative Coding','3D & Blobs','Prototyping','Web'].map(s => (
                <span key={s} className="px-3 py-1.5 rounded-full text-xs bg-white/10 border border-white/10 text-white/90">{s}</span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-white font-semibold mb-2 inline-flex items-center gap-2"><Smile className="h-4 w-4" /> Journey</h3>
            <div className="space-y-3">
              {[
                { year: '2018', text: 'Graduated and jumped into brand world' },
                { year: '2020', text: 'Discovered motion, everything got bouncy' },
                { year: '2022', text: 'Creative tech + WebGL blobs became a thing' },
                { year: 'Now', text: 'Freelancing with brands that love playful design' },
              ].map((t) => (
                <div key={t.year} className="flex items-center gap-3">
                  <span className="w-16 text-white/60 text-sm">{t.year}</span>
                  <div className="flex-1 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-white/85">{t.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
