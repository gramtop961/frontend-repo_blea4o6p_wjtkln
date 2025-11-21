import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Star, Zap } from 'lucide-react'

const projects = [
  {
    title: 'Bubble Brand System',
    tag: 'Branding',
    color: 'from-pink-400 via-fuchsia-400 to-violet-500',
    desc: 'A soft, bubbly brand for a DTC snack startup with playful motion.',
  },
  {
    title: 'Motion Sticker Pack',
    tag: 'Illustration',
    color: 'from-lime-300 via-emerald-300 to-cyan-300',
    desc: 'Animated stickers and GIF loops for social and chat platforms.',
  },
  {
    title: 'A24-ish Title Sequence',
    tag: 'Motion',
    color: 'from-violet-400 via-indigo-400 to-cyan-300',
    desc: 'Moody, cinematic type animation with subtle grain and glow.',
  },
  {
    title: 'Interactive Blob Playground',
    tag: 'Creative Tech',
    color: 'from-amber-300 via-orange-300 to-rose-300',
    desc: 'WebGL blobs, physics, and audio-reactive micro-interactions.',
  },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Featured projects</h2>
          <div className="hidden md:flex items-center gap-2 text-xs text-white/70">
            <Sparkles className="h-4 w-4" />
            <span>Branding • Illustration • Motion • Creative Tech</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="/projects"
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 300, damping: 24 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} blur-2xl opacity-40 group-hover:opacity-60 transition-opacity`} />
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-white/70 px-3 py-1 rounded-full bg-white/10 border border-white/10">{p.tag}</span>
                <ArrowUpRight className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">{p.title}</h3>
              <p className="text-white/75 text-sm">{p.desc}</p>
              <motion.div
                initial={{ rotate: -6 }}
                whileHover={{ rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="mt-6 inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-xs bg-white/10 border border-white/10 text-white/90"
              >
                <Zap className="h-3.5 w-3.5" />
                Open case study
              </motion.div>
              <motion.div
                className="absolute bottom-[-12px] right-[-12px]"
                animate={{ rotate: [0, -8, 0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              >
                <Star className="h-10 w-10 text-white/10" />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
