import React from 'react'

export default function Head() {
  const title = 'Eduardo Maciel – Full-Stack .NET Developer'
  const description =
    'Explore the portfolio of Eduardo Maciel, a Full-Stack .NET Developer creating scalable web applications, e-commerce platforms, and SaaS tools with performance and elegant design.'
  const url = 'https://eduardo-portfolio.vercel.app'
  const image = `${url}/eduardo.png` 

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Eduardo Maciel" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      {/* Open Graph (Facebook/LinkedIn/etc) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </>
  )
}
