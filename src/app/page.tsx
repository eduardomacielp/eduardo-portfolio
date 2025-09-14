'use client'

import { useState } from 'react'
import { translations } from '@/data/translations'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  const [lang, setLang] = useState<'en' | 'pt'>('pt')
  const t = translations[lang]

  return (
    <main className="min-h-screen bg-zinc-950">
      <Header lang={lang} onLangChange={setLang} />
      
      <Hero
        title={t.heroTitle}
        description={t.heroDesc}
        primaryButton={t.heroBtnProjects}
        secondaryButton={t.heroBtnContact}
      />
      
      <About
        title={t.aboutTitle}
        description={t.aboutDesc}
        techStackLabel={t.techStackLabel}
        techStack={t.techStack}
      />
      
      <Services
        title={t.servicesTitle}
        services={t.services}
      />
      
      <Projects
        title={t.projectsTitle}
        projects={t.projects}
      />
      
      <Contact
        title={t.contactTitle}
        description={t.contactDesc}
        contactInformationTitle={t.contactInformationTitle}
        contactInformationDesc={t.contactInformationDesc}
        contactFormTitle={t.contactFormTitle}
        contactFormDesc={t.contactFormDesc}
        nameField={t.contactNameFormField}
        contactField={t.contactEmailFormField}
        messageField={t.contactMessageFormField}
        buttonText={t.contactButton}
      />
      
      <footer className="py-8 text-center text-sm text-zinc-500 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4">
          © {new Date().getFullYear()} Eduardo Maciel. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
