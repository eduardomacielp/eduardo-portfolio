import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')
export async function POST(request: NextRequest) {
  try {
    // Verificar se a API key está configurada
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder') {
      return NextResponse.json(
        { error: 'API key não configurada' },
        { status: 500 }
      )
    }

    const { name, contact, message } = await request.json()

    // Validação básica
    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Mediccae <comercial@mediccae.com.br>',
      to: [process.env.EMAIL_TO as string],
      subject: `Nova mensagem de ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14b8a6;">Nova mensagem do portfolio</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Contato:</strong> ${contact}</p>
          <p><strong>Mensagem:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            Enviado através do formulário de contato do portfolio
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Erro ao enviar email:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar mensagem. Tente novamente.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
