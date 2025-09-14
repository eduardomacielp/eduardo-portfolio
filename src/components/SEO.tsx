'use client'

import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export default function SEO({
  title = 'Eduardo Maciel',
  description = 'Desenvolvedor Web especializado em .NET, Next.js e soluções escaláveis. Transformando ideias em resultados reais através da tecnologia.',
  image = '/og-image.jpg',
  url = 'https://eduardom-portfolio.vercel.app',
  type = 'website'
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content=".net, csharp, nextjs, typescript, desenvolvimento web, react, tailwindcss, azure, mysql, supabase" />
      <meta name="author" content="Eduardo Maciel" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Eduardo Maciel Portfolio" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#14b8a6" />
      <meta name="msapplication-TileColor" content="#14b8a6" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Eduardo Maciel',
            jobTitle: 'Desenvolvedor Web',
            description: description,
            url: url,
            sameAs: [
              'https://linkedin.com/in/eduardomacielp',
              'https://github.com/eduardomacielp',
              'https://instagram.com/edumacielp'
            ],
            knowsAbout: [
              '.NET',
              'C#',
              'Next.js',
              'Vite',
              'TypeScript',
              'React',
              'Azure',
              'PostgreSQL',
              'Supabase'
            ],
            worksFor: {
              '@type': 'Organization',
              name: 'Freelancer'
            }
          })
        }}
      />
    </Head>
  )
}
