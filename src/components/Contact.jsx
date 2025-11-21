import { motion } from 'framer-motion'
import { Send, Instagram, Twitter, Dribbble } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Let’s make something fun</h2>
          <p className="text-white/80 mt-2">Have a brand, campaign, or weird idea? Say hi.</p>
        </div>

        <form className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Name" />
            <input className="px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Email" />
          </div>
          <textarea rows="5" className="mt-4 w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Tell me about your project" />
          <button type="button" className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 text-slate-900 font-semibold shadow-[0_10px_30px_-10px_rgba(244,114,182,0.6)] hover:scale-[1.02] active:scale-[0.99] transition-transform">
            <Send className="h-4 w-4" /> Send message ✨
          </button>
        </form>

        <div className="flex items-center justify-center gap-3 mt-6">
          <a href="#" className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-slate-900"><Instagram className="h-5 w-5" /></a>
          <a href="#" className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 flex items-center justify-center text-slate-900"><Twitter className="h-5 w-5" /></a>
          <a href="#" className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex items-center justify-center text-slate-900"><Dribbble className="h-5 w-5" /></a>
        </div>
      </div>
    </section>
  )
}
