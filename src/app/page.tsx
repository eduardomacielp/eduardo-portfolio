'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BsX, BsJustify } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import Link from 'next/link'

const stackIcons = [
  'cs',
  'dotnet',
  'next',
  'azure',
  'mysql',
  'supabase'
]

const texts = {
  en: {
    navbar: ['About', 'Services', 'Projects', 'Contact'],
    heroTitle: 'Building softwares and ideas',
    heroDesc: "I'm a full-stack developer helping businesses bring ideas to life through technology, performance, and smart design.",
    heroBtnProjects: "How I Can Help",
    heroBtnContact: "Get in Touch!",

    aboutTitle: 'About me',
    aboutDesc: [
      "Hi! I'm Eduardo, a web developer fueled by technology and entrepreneurship. I started coding at 19 with a clear goal: turning ideas into digital products that actually work. Over the past 2+ years, I’ve specialized in the .NET ecosystem, building scalable and reliable B2B applications.",

      "Lately, I’ve been focused on high-performance web development with Next.js, crafting blazing-fast experiences, fully optimized for SEO and built with Google Ads strategies in mind. My goal is simple: create digital products that are fast, purposeful, and built to reach the right audience and drive real results."
    ],
    techStackLabel: 'Tech Stack:',

    servicesTitle: 'How can I contribute to your digital journey?',
    services: [
      {
        title: "Landing Pages",
        desc: "Responsive layout, attractive design, and focused on performance. Ideal for startups, personal brands, and digital products."
      },
      {
        title: "Advanced SEO + Google Ads",
        desc: "Go beyond a beautiful website. Rely on strategies to ensure your business is found by those who truly matter and generates conversions."
      },
      {
        title: "Technical Consulting (.NET)",
        desc: "Strategic guidance for teams and startups aiming to build and scale applications with solid architecture and high performance."
      }
    ],

    projectsTitle: 'Featured projects',
    projects: [
      {
        title: 'SaaS Landing Page',
        desc: 'Created as the main entry point for an ERP, this landing page was designed to build authority, capture users, and offer a fluid navigation. It features fast loading, optimized SEO, and smooth animations for a great experience.',
        tech: ['Next.js', 'CSS Modules', 'Framer Motion'],
        link: 'https://www.nanosoft.com.br',
      },
      {
        title: 'Web ERP – Intelligent Management',
        desc: 'Developed so entrepreneurs can focus on business growth, the system is accessible across all devices, highly scalable, and prepared with integrations that facilitate marketing actions and the addition of new modules.',
        tech: ['C#', '.NET', 'Microsoft SQL Server'],
        link: 'https://nanosoftware.azurewebsites.net/login',
      },
    ],

    contactTitle: `Let’s Build Something Great!`,
    contactDesc: `Have a project in mind or want to discuss opportunities? Let’s connect!`,
    contactInformationTitle: 'Contact Information',
    contactInformationDesc: 'Reach out through your preferred platform:',
    contactFormTitle: 'Send a Message',
    contactFormDesc: `I'll get back to you as soon as possible.`,
    contactNameFormField: 'Your name',
    contactEmailFormField: 'Your email or phone number',
    contactMessageFormField: 'Your message',
    contactButton: 'Send message',
  },

  pt: {
    navbar: ['Sobre', 'Serviços', 'Projetos', 'Contato'],
    heroTitle: 'Building softwares and ideas',
    heroDesc: 'Sou um desenvolvedor full-stack, ajudo negócios a tirarem ideias do papel com tecnologia, performance e design inteligente.',
    heroBtnProjects: 'Como Posso Ajudar?',
    heroBtnContact: 'Entre em Contato!',

    aboutTitle: 'Sobre mim',
    aboutDesc: [
        'Olá! Sou o Eduardo, um desenvolvedor web movido por tecnologia e empreendedorismo, comecei na programação aos 19 anos com o objetivo de transformar ideias em soluções digitais que geram resultado. Com mais de 2 anos de experiência, me especializei no ecossistema .NET, criando aplicações B2B robustas e escaláveis.',
        'Hoje, foco em performance web com Next.js, desenvolvendo experiências ultrarrápidas, otimizadas para SEO e Google Ads. Minha missão é construir produtos digitais que unam propósito e velocidade, para alcançar o público certo e gerar resultados.',
    ],
    techStackLabel: 'Tecnologias:',

    servicesTitle: 'Como posso contribuir em sua jornada no digital?',
    services: [
      {
        title: "Landing Pages",
        desc: "Com layout responsivo, design atrativo e focada em performance. Ideal para startups, marcas pessoais e produtos digitais.",
      },
      {
        title: "SEO Avançado + Google Ads",
        desc: "Vá além de um site bonito, conte com estratégias para que seu negócio seja encontrado por quem realmente importa e gere conversão.",
      },
      {
        title: `Consultoria Técnica (.NET)`,
        desc: "Orientação estratégica para times e startups que buscam criar e escalar aplicações com arquitetura sólida e alta performance.",
      }
    ],

    projectsTitle: 'Projetos em destaque',
    projects: [
      {
        title: 'Landing Page SaaS',
        desc: 'Criada como porta de entrada para o ERP, essa landing page foi pensada para gerar autoridade, captar usuários e oferecer uma navegação fluida. Construída para carregamento rápido, SEO otimizado e animações para uma boa experiência.',
        tech: ['Next.js', 'CSS Modules', 'Framer Motion'],
        link: 'https://www.nanosoft.com.br',
      },
      {
        title: 'ERP Web – Gestão Inteligente',
        desc: 'Desenvolvido para que o empreendedor foque no crescimento do negócio, o sistema é acessível em todos os dispositivos, altamente escalável e preparado com integrações que facilitam ações de marketing e a adição de novos módulos.',
        tech: ['C#', '.NET', 'Microsoft SQL Server'],
        link: 'https://nanosoftware.azurewebsites.net/login',
      },
    ],

    contactTitle: `Vamos construir algo incrível!`,
    contactDesc: `Tem um projeto em mente ou quer discutir oportunidades? Vamos conversar!`,
    contactInformationTitle: 'Informações de contato',
    contactInformationDesc: 'Entre em contato pela sua plataforma preferida:',
    contactFormTitle: 'Enviar uma Mensagem',
    contactFormDesc: `Vou te responder o mais breve possível.`,
    contactNameFormField: 'Seu nome',
    contactEmailFormField: 'Seu E-mail ou WhatsApp',
    contactMessageFormField: 'Sua mensagem',
    contactButton: 'Enviar mensagem',
  },
}

export default function Home() {
  const [lang, setLang] = useState<'en' | 'pt'>('pt')
  const [isOpen, setIsOpen] = useState(false)
  const t = texts[lang]

  const textNav = {
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

  const navItems = textNav[lang]

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')

  const [isSending, setIsSending] = useState(false)
  const [lastSentContact, setLastSentContact] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !contact.trim() || !message.trim()) {
      return
    }

    if (contact === lastSentContact) {
      return
    }

    setIsSending(true);

    emailjs.send(
      'service_g5907fv',
      'template_493av6r',
      {
        name,
        message: `Contato: ${contact} | Mensagem: ${message}`
      },
      'z9zTRjmuPZsR1S07q'
      ).then(
        () => {
        setName('')
        setContact('')
        setMessage('')
        setIsSending(false)
        setLastSentContact(contact)
      }, (error) => {
        setIsSending(false)
        console.error(error)
      }
    );
  }

  return (
    <main className="min-h-screen px-4 md:px-12 py-4 scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 flex justify-between items-center gap-2">
          {/* Logo + Language */}
          <div className="flex items-center gap-3 flex-shrink min-w-0"> 
            <h1 className="text-xl font-bold text-teal-400 whitespace-nowrap overflow-hidden text-ellipsis">Eduardo Maciel</h1> 
            <button
              onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
              className="border border-teal-400 text-teal-400 px-2 py-1 rounded text-sm hover:bg-teal-400 hover:text-black transition flex-shrink-0 cursor-pointer" 
              aria-label="Change language"
            >
              {lang === 'en' ? 'PT-BR' : 'EN-US'}
            </button>
          </div>

          {/* Botão hamburger mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto text-teal-400 relative w-6 h-6 flex-shrink-0" 
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="x-icon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <BsX className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="justify-icon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <BsJustify className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-4 text-sm font-medium">
            {navItems.map((item, idx) => (
              <Link key={idx} href={item.href} className="hover:text-teal-400">
                {item.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Menu mobile (fora do header content) */}
        {isOpen && (
          <nav className="md:hidden bg-zinc-900/80 backdrop-blur-sm border-t border-zinc-800 px-4 py-4 flex flex-col space-y-3 font-medium">
            {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href} 
                  className="hover:text-teal-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text} 
                </Link>
              ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen max-w-3xl mx-auto pt-15 px-2">
        <motion.h2
          className="text-5xl font-extrabold text-white drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.heroTitle} <span className="text-4xl text-teal-400">🇧🇷</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl drop-shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t.heroDesc}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <a
            href="#services"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-shadow shadow-md hover:shadow-teal-500/70"
          >
            {t.heroBtnProjects}
          </a>
          <a
            href="#contact"
            className="border border-teal-500 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-full font-semibold transition"
          >
            {t.heroBtnContact}
          </a>
        </motion.div>
      </section>

      {/* Sobre Mim */}
      <section id="about" className="max-w-4xl mx-auto py-20 px-3">
        <motion.h3
          className="text-3xl font-bold text-teal-400 mb-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.aboutTitle}
        </motion.h3>
        <motion.div
          className="text-zinc-300 space-y-4 text-lg text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t.aboutDesc.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Stack */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="w-full text-center text-zinc-500 mb-4">{t.techStackLabel}</p>
          {stackIcons.map((tech, idx) => (
            <motion.img
              key={tech}
              src={`https://skillicons.dev/icons?i=${tech}&theme=light`}
              alt={tech}
              className="w-16 h-16"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            />
          ))}
        </motion.div>
      </section>

      {/* Serviços */}
      <section id="services" className="max-w-5xl mx-auto py-20">
        <motion.h3
          className="text-3xl font-bold text-teal-400 mb-10 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.servicesTitle}
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6 cursor-pointer">
          {t.services.map((item, i) => (
            <motion.div
              key={i}
              className="border border-zinc-800 rounded-xl p-6 hover:border-teal-500 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <h4 className="font-semibold text-white text-lg mb-2">{item.title}</h4>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section id="projects" className="max-w-5xl mx-auto py-20">
        <motion.h3
          className="text-3xl font-bold text-teal-400 mb-10 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.projectsTitle}
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.map((p, i) => (
            <motion.div
              key={i}
              className="border border-zinc-800 rounded-xl p-6 hover:border-teal-500 transition group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h4 className="font-semibold text-white text-xl mb-2 group-hover:text-teal-400 transition">{p.title}</h4>
              <p className="text-zinc-400 text-sm mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs text-teal-400 mb-4">
                {p.tech.map((t, j) => (
                  <span key={j} className="bg-zinc-800 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-400 hover:underline"
              >
                Access →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-5xl mx-auto py-20 md:px-12">
        <motion.h3
          className="text-3xl font-bold text-teal-400 mb-4 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.contactTitle}
        </motion.h3>

        <motion.p
          className="text-center text-zinc-400 mb-12 text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.contactDesc}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-800">
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">{t.contactInformationTitle}</h4>
            <p className="text-zinc-400 text-sm">{t.contactInformationDesc}</p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:eduardomacielpereira@hotmail.com" className="hover:text-teal-400">eduardomacielpereira@hotmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span>💼</span>
                <a href="https://linkedin.com/in/eduardomacielp" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">linkedin.com/in/eduardomacielp</a>
              </li>
              <li className="flex items-center gap-2">
                <span>👨‍💻</span>
                <a href="https://github.com/eduardomacielp" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">github.com/eduardomacielp</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📸</span>
                <a href="https://instagram.com/edumacielp" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">@edumacielp</a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h4 className="text-xl font-semibold text-white">{t.contactFormTitle}</h4>
            <p className="text-zinc-400 text-sm">{t.contactFormDesc}</p>

            <input
              type="text"
              placeholder={t.contactNameFormField}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              type="text"
              placeholder={t.contactEmailFormField}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full px-4 py-2 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <textarea
              placeholder={t.contactMessageFormField}
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className={`bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-2 rounded transition-colors duration-300 w-full ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSending ? 'Enviando...' : t.contactButton}
            </button>
          </form>
        </div>
      </section>
      
      <footer className="mt-20 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Eduardo Maciel. All rights reserved.
      </footer>
    </main>
  )
}
