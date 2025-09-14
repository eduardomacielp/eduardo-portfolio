'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AboutProps {
  title: string
  description: string[]
  techStackLabel: string
  techStack: string[]
}

export default function About({ title, description, techStackLabel, techStack }: AboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="about" className="max-w-6xl mx-auto py-20 px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Content */}
        <div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
              {title || "Sobre mim"}
            </h2>
            <motion.div 
              className="w-12 h-0.5 bg-slate-400"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>
          
          <motion.div
            className="space-y-6 text-zinc-300 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            {description.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                className="hover:text-zinc-200 transition-colors duration-300"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack - Floating Constellation Style */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 relative overflow-hidden">
            
            {/* Background subtle pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <motion.h3 
              className="text-xl font-semibold text-white mb-8 relative"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              {techStackLabel || "Tech Stack"}
            </motion.h3>
            
            {/* Floating Tech Items */}
            <div className="relative min-h-[250px]">
              {techStack.map((tech, index) => {
                // Posições pseudo-aleatórias mas organizadas
                const positions = [
                  { top: '10%', left: '15%' },
                  { top: '5%', left: '60%' },
                  { top: '25%', left: '80%' },
                  { top: '45%', left: '10%' },
                  { top: '35%', left: '45%' },
                  { top: '20%', left: '35%' },
                  { top: '60%', left: '70%' },
                  { top: '65%', left: '25%' },
                  { top: '80%', left: '50%' },
                  { top: '75%', left: '80%' },
                  { top: '85%', left: '15%' },
                  { top: '90%', left: '65%' }
                ]
                
                const position = positions[index] || { top: '50%', left: '50%' }
                
                return (
                  <motion.div
                    key={tech}
                    className="absolute group cursor-pointer"
                    style={{ top: position.top, left: position.left }}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                    transition={{ 
                      delay: index * 0.1 + 0.6, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      zIndex: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="relative">
                      {/* Tech icon container */}
                      <div className="w-16 h-16 md:w-18 md:h-18 bg-zinc-800/60 rounded-xl border border-zinc-700/50 flex items-center justify-center group-hover:bg-zinc-700/70 group-hover:border-zinc-600/70 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/20">
                        <img
                          src={`https://skillicons.dev/icons?i=${tech}&theme=light`}
                          alt={`${tech} technology icon`}
                          className="w-8 h-8 md:w-9 md:h-9"
                          loading="lazy"
                          width={32}
                          height={32}
                        />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-zinc-800 text-zinc-200 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-zinc-700/50">
                        {tech}
                      </div>

                      {/* Connecting lines (subtle) */}
                      <div className="absolute top-1/2 left-1/2 w-px h-8 bg-gradient-to-b from-zinc-600/30 to-transparent transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom stats or info */}
            <motion.div 
              className="mt-8 pt-6 border-t border-zinc-700/30 flex justify-between text-sm text-zinc-400"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              <span>{techStack.length} technologies</span>
              <span>Always learning</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
