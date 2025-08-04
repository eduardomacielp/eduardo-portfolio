'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
    heroTitle: 'Building softwares & ideas',
    heroDesc: "I'm a web developer focused on building, creating, and bringing ideas to life through technology and real-world results.",
    heroBtnProjects: "How I Can Help",
    heroBtnContact: "Get in Touch!",

    aboutTitle: 'About me',
    aboutDesc: [
      "Hi! I'm Eduardo, a web developer driven by technology and entrepreneurship. I started coding at 19 with the goal of turning ideas into digital solutions that deliver real results.",
      "With over 2 years of experience, I specialize in the .NET ecosystem, building robust, scalable, and well-structured B2B applications. I'm always evolving, also exploring front-end tools like Next.js to deliver more complete and modern solutions.",
    ],
    techStackLabel: 'Stack:',

    servicesTitle: 'How can I contribute to your digital journey',
    services: [
      {
        title: "Product Development",
        desc: "I build scalable web solutions with .NET, focusing on user experience and turning ideas into real digital products.",
      },
      {
        title: "Content Creation",
        desc: "Passionate about technology, I create content to inspire and support those looking to grow in development and tech.",
      },
      {
        title: "Partnerships & Networking",
        desc: "I connect with startups and professionals to collaborate, exchange ideas, and build projects that align technology and business.",
      }
    ],

    projectsTitle: 'Featured projects',
    projects: [
      {
        title: 'Lisse Med – Medical Management Software',
        desc: 'Built so clinics and independent doctors can focus on patient care and business growth. The system is accessible on all devices and designed to grow alongside the business.',
        tech: ['C#', '.NET', 'Next.js', 'Azure'],
        link: 'https://www.lissemed.com.br'
      },
      {
        title: 'My First Website',
        desc: 'One of the starting points of my journey as a developer, a project that taught me a lot about web development, dedication, and the importance of building a solid foundation from the very beginning.',
        tech: ['Bootstrap', 'HTML', 'CSS'],
        link: 'https://www.nanosoft.com.br'
      }
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
    heroTitle: 'Building softwares & ideas',
    heroDesc: 'Sou um desenvolvedor web, com foco em criar, empreender e impulsionar ideias com tecnologia e resultados reais.',
    heroBtnProjects: 'Como Posso Ajudar?',
    heroBtnContact: 'Entre em Contato!',

    aboutTitle: 'Sobre mim',
    aboutDesc: [
      'Olá! Sou o Eduardo, desenvolvedor web movido por tecnologia e empreendedorismo. Comecei na programação aos 19 anos com o objetivo de transformar ideias em soluções digitais que realmente proporcionam resultados.',
      'Atualmente, com mais de 2 anos de experiência, me especializei no ecossistema .NET, desenvolvendo aplicações B2B robustas, escaláveis e bem estruturadas. Estou sempre em evolução, estudando também outras ferramentas de front-end como Next.js para oferecer soluções cada vez mais completas.',
    ],
    techStackLabel: 'Stack:',

    servicesTitle: 'Como posso contribuir em sua jornada no digital?',
    services: [
      {
        title: "Construção de Produtos",
        desc: "Crio soluções web escaláveis com .NET, focando na experiência do usuário e na transformação de ideias em produtos digitais reais.",
      },
      {
        title: "Criação de Conteúdo",
        desc: "Sempre fascinado por tecnologia, produzo conteúdos para inspirar e apoiar quem quer evoluir na área de desenvolvimento e tecnologia.",
      },
      {
        title: "Parcerias & Networking",
        desc: "Conecto com startups e profissionais para colaborar, trocar ideias e construir projetos que alinhem tecnologia e negócio.",
      }
    ],

    projectsTitle: 'Projetos em destaque',
    projects: [
      {
        title: 'Lisse Med – Software de gestão médica',
        desc: 'Desenvolvido para que clínicas e médicos autônomos foquem no atendimento e crescimento do negócio, o sistema é acessível em todos os dispositivos e pensado para crescer junto com o negócio.',
        tech: ['C#', '.NET', 'Next.js', 'Azure'],
        link: 'https://www.lissemed.com.br'
      },
      {
        title: 'Meu Primeiro Site',
        desc: 'Um dos pontos de partida da minha trajetória como desenvolvedor, um projeto que me ensinou muito sobre criação web, dedicação e a importância de construir uma base sólida desde o começo.',
        tech: ['Bootstrap', 'HTML', 'CSS'],
        link: 'https://www.nanosoft.com.br'
      }
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
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 flex justify-center md:justify-between items-center gap-2">
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

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-4 text-sm font-medium">
            {navItems.map((item, idx) => (
              <Link key={idx} href={item.href} className="hover:text-teal-400">
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
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
          className="mt-10 flex flex-wrap justify-center gap-6 px-4"
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
