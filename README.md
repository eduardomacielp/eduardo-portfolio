# 🚀 Eduardo Maciel - Portfolio

Um portfólio moderno e performático desenvolvido com Next.js 15, TypeScript e Tailwind CSS, focado em demonstrar habilidades de desenvolvimento web e design.

## ✨ Características

### 🎨 Design & UX
- **Design Moderno**: Interface limpa com gradientes e animações suaves
- **Responsivo**: Otimizado para todos os dispositivos
- **Dark Mode**: Tema escuro elegante com acentos em blue
- **Animações**: Transições fluidas com Framer Motion
- **Glass Morphism**: Efeitos de vidro para profundidade visual

### ⚡ Performance
- **Next.js 15**: Framework React otimizado
- **Bundle Splitting**: Carregamento otimizado de componentes
- **Lazy Loading**: Carregamento sob demanda de imagens
- **Otimização de Imagens**: WebP/AVIF com fallbacks
- **Compressão**: Gzip/Brotli habilitado

### 🔧 Tecnologias
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, CSS Custom Properties
- **Animações**: Framer Motion
- **Ícones**: Heroicons
- **Email**: Resend
- **Deploy**: Vercel (otimizado)

### ♿ Acessibilidade
- **ARIA Labels**: Navegação por teclado completa
- **Contraste**: Cores otimizadas para legibilidade
- **Screen Readers**: Estrutura semântica adequada
- **Focus States**: Indicadores visuais claros

### 🔍 SEO
- **Meta Tags**: Open Graph e Twitter Cards
- **Structured Data**: Schema.org para rich snippets
- **Sitemap**: Geração automática
- **Robots.txt**: Configuração otimizada
- **Performance**: Core Web Vitals otimizados

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── globals.css        # Estilos globais e variáveis CSS
│   ├── layout.tsx         # Layout principal com metadata
│   ├── page.tsx           # Página principal
│   ├── robots.ts          # Configuração de robots
│   └── sitemap.ts         # Geração de sitemap
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Navegação principal
│   ├── Hero.tsx           # Seção hero
│   ├── About.tsx          # Seção sobre
│   ├── Services.tsx       # Seção serviços
│   ├── Projects.tsx       # Seção projetos
│   ├── Contact.tsx        # Seção contato
│   ├── ScrollToTop.tsx    # Botão scroll to top
│   ├── ThemeProvider.tsx  # Context de tema
│   └── LoadingSpinner.tsx # Componente de loading
├── data/                  # Dados e configurações
│   └── translations.ts    # Traduções PT/EN
└── hooks/                 # Hooks personalizados
    ├── useIntersectionObserver.ts
    └── useLocalStorage.ts
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/eduardomacielp/meu-portfolio.git

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Build para produção
npm run build

# Execute em produção
npm start
```

### Variáveis de Ambiente
Configure as seguintes variáveis no arquivo `.env.local`:

```env
RESEND_API_KEY=sua_resend_api_key
```

**Nota**: Veja o arquivo `RESEND_SETUP.md` para instruções detalhadas de configuração.

## 📱 Funcionalidades

### 🌐 Internacionalização
- Suporte a Português e Inglês
- Troca de idioma dinâmica
- Persistência da preferência

### 📧 Sistema de Contato
- Formulário funcional com Resend API
- Validação de campos
- Feedback visual de envio
- Error handling robusto

### 🎯 Navegação
- Menu responsivo
- Scroll suave entre seções
- Botão scroll to top
- Indicadores de seção ativa

### 📊 Analytics Ready
- Estrutura preparada para Google Analytics
- Eventos de tracking configurados
- Performance monitoring

## 🎨 Customização

### Cores
As cores principais podem ser alteradas no arquivo `globals.css`:

```css
:root {
  --primary:rgb(23, 64, 175);      /* Navy Blue */
  --secondary:rgb(6, 95, 212);    /* Blue */
  --accent: #8b5cf6;       /* Purple */
}
```

### Conteúdo
- **Textos**: Edite `src/data/translations.ts`
- **Projetos**: Modifique a seção `projects` nas traduções
- **Contatos**: Atualize os links em `Contact.tsx`

## 📈 Performance

### Métricas Otimizadas
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **Bundle Size**: ~151KB (First Load JS)

### Otimizações Implementadas
- Code splitting automático
- Lazy loading de componentes
- Otimização de imagens
- Compressão de assets
- Cache headers configurados

## 🔒 Segurança

### Headers de Segurança
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- Content Security Policy configurado

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📞 Contato

**Eduardo Maciel**
- 📧 Email: eduardomacielpereira@hotmail.com
- 💼 LinkedIn: [linkedin.com/in/eduardomacielp](https://linkedin.com/in/eduardomacielp)
- 👨‍💻 GitHub: [github.com/eduardomacielp](https://github.com/eduardomacielp)
- 📸 Instagram: [@edumacielp](https://instagram.com/edumacielp)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!