import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: 'Eduardo Maciel',
  description: 'Portfolio de Eduardo Maciel: Desenvolvedor Web especializado em .NET, Next.js e soluções escaláveis. Transformando ideias em resultados reais através da tecnologia.',
  keywords: '.net, csharp, nextjs, typescript, desenvolvimento web, react, tailwindcss, azure, mysql, supabase',
  authors: [{ name: 'Eduardo Maciel', url: 'https://eduardom-portfolio.vercel.app' }],
  openGraph: {
    title: 'Eduardo Maciel',
    description: 'Desenvolvedor Web especializado em .NET, Next.js e soluções escaláveis',
    url: 'https://eduardom-portfolio.vercel.app',
    siteName: 'Eduardo Maciel Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduardo Maciel',
    description: 'Desenvolvedor Web especializado em .NET, Next.js e soluções escaláveis',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="dark">
      <body className={`${inter.variable} font-sans bg-zinc-950 text-white antialiased`}>
        <ThemeProvider>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
