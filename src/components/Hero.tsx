'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  description: string
  primaryButton: string
  secondaryButton: string
}

export default function Hero({ title, description, primaryButton, secondaryButton }: HeroProps) {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen max-w-3xl mx-auto px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="space-y-8"
      >
        <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="text-slate-100">Building</span>
          <br />
          <span className="text-white font-black tracking-tight">softwares</span>
          <span className="text-slate-300 font-light"> & </span>
          <span className="text-white font-black tracking-tight">ideas</span>
        </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded font-medium transition-colors duration-200"
          >
            {primaryButton}
          </a>

          <a
            href="#contact"
            className="border border-blue-700 text-slate-100 hover:bg-blue-700 hover:text-white px-8 py-3 rounded font-medium transition-colors duration-200"
          >
            {secondaryButton}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
