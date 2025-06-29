'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BsX, BsJustify, BsGithub, BsLinkedin, BsYoutube, BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

const stackIcons = [
  'cs',
  'dotnet',
  'next',
  'html',
  'css',
  'azure',
  'mysql',
  'sqlite',
]

const texts = {
  en: {
    navbar: ['About', 'Services', 'Projects', 'Contact'],
    heroTitle: 'Building softwares and ideas',
    heroDesc: 'I’m a Full-Stack Developer in the .NET world, helping ideas become real through code quality, performance, and thoughtful design.',
    heroBtnProjects: 'See Projects',
    heroBtnContact: `Let's Connect!`,

    aboutTitle: 'About me',
    aboutDesc: `I'm Eduardo, a 21-year-old developer with a passion for entrepreneurship. Ever since I was a kid, I've always enjoyed creating and building things, which naturally led me to programming. Over the past few years, I've honed my skills in the .NET ecosystem, focusing on developing efficient and well-designed software. Now, I’m transforming ideas into real solutions, learning and sharing knowledge on my YouTube channel, where I share a little about my journey.`,
    techStackLabel: 'Tech Stack:',

    servicesTitle: 'How can I contribute to your digital journey?',
    services: [
      {
        title: "Landing Pages & Websites",
        desc: "Modern, responsive websites focused on performance, design, and SEO. Ideal for startups, personal brands, and digital products.",
      },
      {
        title: "E-commerce Solutions",
        desc: "Custom online stores built for scalability and conversion — with secure checkout flows, third-party integrations, and a clear user journey.",
      },
      {
        title: "Tech Advisory & Code Reviews",
        desc: "Support for teams or founders needing technical guidance, architecture decisions, or clean code reviews in real-world projects.",
      },
    ],

    projectsTitle: 'Featured projects',
    projects: [
      {
        title: 'Web ERP',
        desc: 'A scalable .NET system featuring clean architecture, mobile-first design, and smart caching strategies to ensure high performance under heavy user load.',
        tech: ['C#', '.NET', 'Microsoft SQL Server'],
        link: 'https://nanosoftware.azurewebsites.net/login',
      },
      {
        title: 'Landing Page SaaS',
        desc: 'Built with Next.js and CSS Modules, optimized for SEO and fast loading. Fully responsive and enhanced with smooth Framer Motion animations for a seamless user experience.',
        tech: ['Next.js', 'CSS Modules', 'Framer Motion'],
        link: 'https://www.nanosoft.com.br',
      },
    ],

    contactTitle: 'Connect',
    contactDesc: 'Networking happens when people share ideas and build real connections. Building something, expanding your network, or want to chat tech? Hit me up!',
    socialLinks: [
      { href: 'https://linkedin.com/in/eduardomacielp', icon: <BsLinkedin />, color: '#0A66C2', label: 'LinkedIn' },
      { href: 'https://github.com/eduardomacielp', icon: <BsGithub />, color: '#181717', label: 'GitHub' },
      { href: 'https://youtube.com/@eduardomacielp', icon: <BsYoutube />, color: '#FF0000', label: 'YouTube' },
      { href: 'https://instagram.com/edumacielp', icon: <BsInstagram />, color: '#E1306C', label: 'Instagram' },
    ],
  },

  pt: {
    navbar: ['Sobre', 'Serviços', 'Projetos', 'Contato'],
    heroTitle: 'Building softwares and ideas',
    heroDesc: 'I’m a Full-Stack Developer in the .NET world, helping ideas become real through code quality, performance, and thoughtful design.',
    heroBtnProjects: 'Ver Projetos',
    heroBtnContact: 'Entre em Contato!',

    aboutTitle: 'Sobre mim',
    aboutDesc: `Sou Eduardo, um desenvolvedor de 21 anos apaixonado por empreendedorismo. Desde criança, sempre gostei de criar e construir coisas, o que naturalmente me levou à programação. Nos últimos anos, aperfeiçoei minhas habilidades no ecossistema .NET, focando em desenvolver softwares eficientes e bem planejados. Hoje, venho transformando ideias em soluções reais, aprendendo e compartilhando conhecimento no meu canal no YouTube, onde conto um pouco da minha jornada.`,
    techStackLabel: 'Tecnologias:',

    servicesTitle: 'Como posso contribuir em sua jornada no digital?',
    services: [
      {
        title: "Landing Pages & Sites",
        desc: "Sites modernos, responsivos e focados em performance, design e SEO. Ideal para startups, marcas pessoais e produtos digitais.",
      },
      {
        title: "Soluções de E-commerce",
        desc: "Lojas online personalizadas, construídas para conversão. Com checkouts e gateways integrados, proporcionando uma jornada clara para o usuário.",
      },
      {
        title: "Consultoria Técnica",
        desc: "Apoio para times ou fundadores que precisam de orientação técnica, decisões de arquitetura ou revisão de código limpo em projetos reais.",
      },
    ],

    projectsTitle: 'Projetos em destaque',
    projects: [
      {
        title: 'ERP Web',
        desc: 'Sistema .NET escalável com arquitetura limpa, design mobile-first e estratégias inteligentes de cache, tendo alta performance para suportar centenas de usuários.',
        tech: ['C#', '.NET', 'Microsoft SQL Server'],
        link: 'https://nanosoftware.azurewebsites.net/login',
      },
      {
        title: 'Landing Page SaaS',
        desc: 'Construída com Next.js e CSS Modules, foi otimizada para SEO e carregamento rápido. Totalmente responsiva e com animações suaves usando Framer Motion para uma experiência fluida.',
        tech: ['Next.js', 'CSS Modules', 'Framer Motion'],
        link: 'https://www.nanosoft.com.br',
      },
    ],

    contactTitle: 'Redes Sociais',
    contactDesc: 'O networking acontece quando as pessoas compartilham ideias e constroem conexões reais. Construindo algo, expandindo sua rede ou quer bater um papo sobre tecnologia? Me chama!',
    socialLinks: [
      { href: 'https://linkedin.com/in/eduardomacielp', icon: <BsLinkedin />, color: '#0A66C2', label: 'LinkedIn' },
      { href: 'https://github.com/eduardomacielp', icon: <BsGithub />, color: '#181717', label: 'GitHub' },
      { href: 'https://youtube.com/@eduardomacielp', icon: <BsYoutube />, color: '#FF0000', label: 'YouTube' },
      { href: 'https://instagram.com/edumacielp', icon: <BsInstagram />, color: '#E1306C', label: 'Instagram' },
    ],
  },
}

export default function Home() {
  const [lang, setLang] = useState<'en' | 'pt'>('en')
  const [isOpen, setIsOpen] = useState(false)
  const t = texts[lang]

  const textNav = {
    navbar: [
      { text: 'About', href: '#about' },
      { text: 'Services', href: '#services' },
      { text: 'Projects', href: '#projects' },
      { text: 'Contact', href: '#contact' }
    ],
  };

  return (
    <main className="min-h-screen w-full px-6 py-4 scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-sm border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Logo + Language */}
        <div className="flex items-center gap-3 flex-shrink min-w-0"> 
          <h1 className="text-xl font-bold text-teal-400 whitespace-nowrap overflow-hidden text-ellipsis">Eduardo M.</h1> 
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
          {textNav.navbar.map((item, idx) => (
            <Link key={idx} href={item.href} className="hover:text-teal-400">
              {item.text}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menu mobile (fora do header content) */}
      {isOpen && (
        <nav className="md:hidden bg-zinc-900/80 backdrop-blur-sm border-t border-zinc-800 px-4 py-4 flex flex-col space-y-3 font-medium">
          {textNav.navbar.map((item, idx) => (
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
      <section className="flex flex-col items-center justify-center text-center min-h-screen max-w-3xl mx-auto pt-28 px-4 sm:px-6 lg:px-0">
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
            href="#projects"
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
      <section id="about" className="max-w-4xl mx-auto py-20">
        <motion.h3
          className="text-3xl font-bold text-teal-400 mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.aboutTitle}
        </motion.h3>
        <motion.div
          className="text-zinc-300 space-y-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>{t.aboutDesc}</p>
        </motion.div>

        {/* Stack */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6"
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

        <div className="grid md:grid-cols-3 gap-6">
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

      {/* Contato */}
      <section id="contact" className="max-w-3xl mx-auto py-20 text-center px-4 sm:px-0">
        <motion.h3
          className="text-3xl font-bold text-teal-400 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.contactTitle}
        </motion.h3>

        <p className="text-zinc-400 mb-12 text-lg max-w-xl mx-auto">
          {t.contactDesc}
        </p>

        <div className="flex justify-center flex-wrap gap-6 mt-4">
          {t.socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="bg-gray-200 rounded-full shadow-md p-3 hover:scale-105 transition flex items-center justify-center"
              style={{ color: social.color }}
              aria-label={social.label}
            >
              <div className="text-2xl">{social.icon}</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
