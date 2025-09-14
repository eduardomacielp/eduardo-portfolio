'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeaderProps {
  lang: 'en' | 'pt'
  onLangChange: (lang: 'en' | 'pt') => void
}

const navItems = {
  en: [
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' }
  ],
  pt: [
    { text: 'Sobre', href: '#about' },
    { text: 'Serviços', href: '#services' },
    { text: 'Projetos', href: '#projects' },
    { text: 'Contato', href: '#contact' }
  ]
}

export default function Header({ lang, onLangChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const items = navItems[lang]

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full backdrop-blur-sm bg-zinc-950/90 border-b border-zinc-800/30 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Language */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-slate-100">
              Eduardo Maciel
            </h1>
            
            <button
              onClick={() => onLangChange(lang === 'en' ? 'pt' : 'en')}
              className="border border-blue-700/50 text-slate-100 px-3 py-1.5 rounded text-sm font-medium hover:bg-blue-700/10 hover:border-blue-700 transition-colors duration-200 cursor-pointer"
              aria-label="Change language"
            >
              {lang === 'en' ? 'PT-BR' : 'EN-US'}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <Link 
                key={item.text}
                href={item.href} 
                className="text-zinc-300 hover:text-slate-100 font-medium transition-colors duration-200"
              >
                {item.text}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-300 hover:text-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 py-4 border-t border-zinc-800/50">
            {items.map((item) => (
              <Link 
                key={item.text}
                href={item.href} 
                className="block text-zinc-300 hover:text-slate-100 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
