// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eduardo Maciel – Web Developer',
  description: 'Portfolio de Eduardo Maciel: Desenvolvedor Web especializado em criar aplicações de alta performance. Transformando ideias em resultados reais.',
  keywords: '.net, csharp, nextjs, typescript, desenvolvimento web',
  authors: [{ name: 'Eduardo Maciel', url: 'https://eduardom-portfolio.vercel.app' }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  )
}
