import { motion } from 'framer-motion'

const categories = ['Branding', 'Illustration', 'Motion', 'Creative Tech']

const tiles = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  tag: categories[i % categories.length],
  color: [
    'from-pink-400 via-fuchsia-400 to-violet-500',
    'from-lime-300 via-emerald-300 to-cyan-300',
    'from-violet-400 via-indigo-400 to-cyan-300',
    'from-amber-300 via-orange-300 to-rose-300',
  ][i % 4],
}))

export default function ProjectsGrid() {
  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-extrabold text-white">Projects</h2>
          <div className="flex gap-2">
            {categories.map((c) => (
              <button key={c} className="px-3 py-1.5 rounded-full text-xs text-white/85 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">{c}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
          {tiles.map((t, i) => (
            <motion.a
              key={t.id}
              href="/projects/case-study"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.03 }}
              className={`group relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 md:col-span-${[6,6,4,8,8,4,5,7,7,5][i % 10]}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
              <div className="absolute inset-0">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ rotate: [0, -1.5, 0, 1.5, 0] }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded-full bg-black/40 text-white/85 border border-white/10">{t.tag}</span>
                  <span className="text-white/85 font-medium">{t.title}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
