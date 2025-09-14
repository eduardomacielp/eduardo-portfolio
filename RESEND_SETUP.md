# Configuração do Resend API

## Passos para configurar o envio de emails

### 1. Criar conta no Resend
1. Acesse [resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Verifique seu email

### 2. Obter API Key
1. No dashboard do Resend, vá para "API Keys"
2. Clique em "Create API Key"
3. Dê um nome para a chave (ex: "Portfolio")
4. Copie a chave gerada

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto com:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Configurar domínio (opcional)
Para usar um domínio personalizado:
1. No Resend, vá para "Domains"
2. Adicione seu domínio
3. Configure os registros DNS
4. Atualize o `from` na API route

### 5. Testar
1. Execute `npm run dev`
2. Acesse o formulário de contato
3. Envie uma mensagem de teste

## Estrutura da API

A API está localizada em `/api/send-email` e aceita:

```json
{
  "name": "Nome do usuário",
  "contact": "email@exemplo.com ou telefone",
  "message": "Mensagem do usuário"
}
```

## Limites do Resend
- **Plano gratuito**: 3.000 emails/mês
- **Rate limit**: 10 emails/segundo
- **Domínios**: 1 domínio personalizado

## Troubleshooting

### Erro "API key não configurada"
- Verifique se o arquivo `.env.local` existe
- Confirme se a variável `RESEND_API_KEY` está correta
- Reinicie o servidor de desenvolvimento

### Emails não chegam
- Verifique a pasta de spam
- Confirme se o domínio está verificado no Resend
- Verifique os logs do Resend no dashboard
