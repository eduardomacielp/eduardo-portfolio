'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface Project {
  title: string
  desc: string
  tech: string[]
  link: string
}

interface ProjectsProps {
  title: string
  projects: Project[]
}

export default function Projects({ title, projects }: ProjectsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="projects" className="max-w-7xl mx-auto py-20 px-4">
      {/* Title */}
      <motion.div
        className="text-center mb-20"
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

      {/* Projects List */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: index * 0.15 + 0.2, duration: 0.6, ease: "easeOut" }}
          >
            {/* Project Item */}
            <div className="relative py-12 md:py-16 border-b border-zinc-800/50 last:border-b-0 hover:bg-zinc-900/20 transition-all duration-500 rounded-xl px-4 md:px-8">
              
              {/* Project Number */}
              <div className="absolute left-0 top-12 md:top-16 text-4xl md:text-7xl font-bold text-zinc-400 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="ml-12 md:ml-24">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300 mb-2 md:mb-0">
                    {project.title}
                  </h3>
                  
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300 group/link self-start"
                    whileHover={{ x: 5 }}
                    aria-label={`Visit ${project.title}`}
                  >
                    <span className="text-sm font-medium">View Project</span>
                    <ArrowTopRightOnSquareIcon />
                  </motion.a>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-2xl group-hover:text-zinc-200 transition-colors duration-300">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-4 py-2 bg-zinc-800/40 border border-zinc-700/50 text-slate-200 text-sm font-medium rounded-full hover:bg-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.15 + techIndex * 0.05 + 0.5, duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover line effect */}
              <motion.div 
                className="absolute left-0 top-0 w-1 bg-gradient-to-b from-slate-400 to-zinc-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ height: 0 }}
                whileHover={{ height: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom decorative element */}
      <motion.div 
        className="flex justify-center mt-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
      </motion.div>
    </section>
  )
}
