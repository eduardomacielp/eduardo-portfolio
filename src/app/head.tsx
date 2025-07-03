export default function Head() {
  const title = 'Eduardo Maciel – Web Developer'
  const description =
    'Portfolio de Eduardo Maciel: Desenvolvedor Web especializado em criar aplicações de alta performance. Transformando ideias em resultados reais.'
  const url = 'https://eduardom-portfolio.vercel.app/'

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Eduardo Maciel" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </>
  )
}
