'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Service {
  title: string
  desc: string
}

interface ServicesProps {
  title: string
  services: Service[]
}

export default function Services({ title, services }: ServicesProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="services" className="max-w-6xl mx-auto py-20 px-4">
      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
          {title}
        </h2>
        <motion.div 
          className="w-12 h-0.5 bg-slate-400 mx-auto"
          initial={{ width: 0 }}
          animate={isInView ? { width: 48 } : { width: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.4, ease: "easeOut" }}
          >
            <div className="bg-zinc-900/40 backdrop-blur-sm rounded-xl p-8 border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
              
              {/* Small accent */}
              <div className="w-8 h-1 bg-slate-400 rounded-full mb-6 group-hover:bg-slate-300 transition-colors duration-300"></div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Simple dots at bottom */}
      <motion.div 
        className="flex justify-center mt-12 space-x-1"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
      </motion.div>
    </section>
  )
}
