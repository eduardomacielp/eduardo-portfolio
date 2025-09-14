'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  EnvelopeIcon, 
  BriefcaseIcon, 
  CodeBracketIcon, 
  CameraIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

interface ContactProps {
  title: string
  description: string
  contactInformationTitle: string
  contactInformationDesc: string
  contactFormTitle: string
  contactFormDesc: string
  nameField: string
  contactField: string
  messageField: string
  buttonText: string
}

const contactLinks = [
  {
    icon: EnvelopeIcon,
    label: 'Email',
    href: 'mailto:eduardomacielpereira@hotmail.com',
    text: 'eduardomacielpereira@hotmail.com'
  },
  {
    icon: BriefcaseIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/eduardomacielp',
    text: 'linkedin.com/in/eduardomacielp'
  },
  {
    icon: CodeBracketIcon,
    label: 'GitHub',
    href: 'https://github.com/eduardomacielp',
    text: 'github.com/eduardomacielp'
  },
  {
    icon: CameraIcon,
    label: 'Instagram',
    href: 'https://instagram.com/edumacielp',
    text: '@edumacielp'
  }
]

export default function Contact({ 
  title, 
  description, 
  contactInformationTitle, 
  contactInformationDesc,
  contactFormTitle,
  contactFormDesc,
  nameField,
  contactField,
  messageField,
  buttonText
}: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  })
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setError('Todos os campos são obrigatórios')
      return
    }

    setIsSending(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar mensagem')
      }

      setFormData({ name: '', contact: '', message: '' })
      setIsSent(true)
      
      setTimeout(() => setIsSent(false), 3000)
    } catch (error) {
      console.error('Error sending email:', error)
      setError(error instanceof Error ? error.message : 'Erro ao enviar mensagem')
    } finally {
      setIsSending(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section ref={ref} id="contact" className="max-w-6xl mx-auto py-20 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
          {title}
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">{contactInformationTitle}</h3>
            <p className="text-zinc-400 mb-6">{contactInformationDesc}</p>
          </div>

          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-blue-700/50 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-blue-700/10 rounded-lg flex items-center justify-center">
                  <link.icon className="w-5 h-5 text-slate-100" />
                </div>
                <div>
                  <p className="text-white font-medium">
                    {link.label}
                  </p>
                  <p className="text-zinc-400 text-sm">
                    {link.text}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">{contactFormTitle}</h3>
            <p className="text-zinc-400">{contactFormDesc}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder={nameField}
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-700/50 border border-zinc-700 transition-colors duration-200"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="contact"
                placeholder={contactField}
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-700/50 border border-zinc-700 transition-colors duration-200"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder={messageField}
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-700/50 border border-zinc-700 transition-colors duration-200 resize-none"
                required
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending || isSent}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded font-medium transition-colors duration-200 cursor-pointer ${
                isSent
                  ? 'bg-green-500 text-white'
                  : isSending
                  ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed'
                  : 'bg-blue-700 hover:bg-blue-800 text-white'
              }`}
            >
              {isSent ? (
                <>
                  <CheckCircleIcon className="w-5 h-5" />
                  Mensagem Enviada!
                </>
              ) : isSending ? (
                <>
                  <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-5 h-5" />
                  {buttonText}
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
