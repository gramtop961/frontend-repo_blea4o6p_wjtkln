import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-40">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      <div className="absolute right-0 top-0 h-[520px] md:h-[700px] w-full md:w-[58%]">
        <Spline scene="https://prod.spline.design/4lyTnLJyQd-43uh0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 20 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-xl"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
            Visual Communication Designer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 22 }}
            className="mt-5 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
          >
            Playful design with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-lime-300 to-cyan-300"> serious impact</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, type: 'spring', stiffness: 260, damping: 22 }}
            className="mt-5 text-lg md:text-xl text-white/80 max-w-xl"
          >
            Omry blends bold shapes, quirky motion, and thoughtful systems to craft brands, illustrations, and creative tech that stick in your head.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 260, damping: 20 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 text-slate-900 font-semibold shadow-[0_10px_30px_-10px_rgba(244,114,182,0.6)] hover:scale-[1.02] active:scale-[0.99] transition-transform">See projects</a>
            <a href="#about" className="px-5 py-3 rounded-full bg-white/10 text-white font-semibold border border-white/10 hover:bg-white/15 transition-colors">About Omry</a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,128,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute left-10 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.2),transparent_60%)] blur-2xl" />
      </div>
    </section>
  )
}
