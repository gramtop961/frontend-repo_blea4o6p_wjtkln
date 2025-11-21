import { motion } from 'framer-motion'
import { Sticker, Rocket, Target, Palette } from 'lucide-react'

export default function CaseStudy() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,114,182,0.15),transparent_60%),radial-gradient(circle_at_90%_30%,rgba(34,211,238,0.15),transparent_60%),radial-gradient(circle_at_60%_90%,rgba(190,242,100,0.12),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Bubble Brand System</h1>
          <p className="mt-4 text-white/80 max-w-2xl">A soft, bubbly identity designed to feel like a hug. Built with playful motion, gummy shapes, and friendly type for a DTC snack startup.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold mb-2 inline-flex items-center gap-2"><Target className="h-4 w-4" /> Goal</h3>
          <p className="text-white/75 text-sm">Make the brand feel joyful and premium without losing its quirky soul.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold mb-2 inline-flex items-center gap-2"><Palette className="h-4 w-4" /> Concept</h3>
          <p className="text-white/75 text-sm">Use soft blobs, bright gradients, and bouncy motion to create a cohesive world across packaging, web, and video.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold mb-2 inline-flex items-center gap-2"><Rocket className="h-4 w-4" /> Process</h3>
          <p className="text-white/75 text-sm">Sketch → shape language → typographic system → motion tests → rollout toolkit.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="rounded-[28px] overflow-hidden border border-white/10 bg-white/5 p-6">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-pink-400 via-fuchsia-400 to-violet-500" />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-lime-300 via-emerald-300 to-cyan-300" />
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-violet-400 via-indigo-400 to-cyan-300" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <h3 className="text-2xl font-bold text-white mb-4 inline-flex items-center gap-2"><Sticker className="h-5 w-5" /> Final results</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[0,1,2,3,4,5].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="aspect-square rounded-3xl border border-white/10 bg-white/5" />
          ))}
        </div>
      </section>
    </div>
  )
}
