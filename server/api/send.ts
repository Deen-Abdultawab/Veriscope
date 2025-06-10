import { Resend } from 'resend'


export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const resend = new Resend(config.RESEND_API_KEY)
  
  const body = await readBody(event)

  try {
    const data = await resend.emails.send({
      from: 'Veriscoprdigital - Contact Form <contact@veriscopedigital.com>',
      to: 'tobscole@gmail.com',
      subject: body.subject,
      replyTo: body.from,
      html: `
      <h1>${body.subject}</h1>
      <br>
      <p style="line-height: 1.6;">${body.message}</p>
      <br>
      <p style="text-transform: capitalize; font-weight: bold; margin-bottom: 0;">${body.name}</p>
      <p style="font-style: italic; margin-top: 0;">${body.from}</p>
      `,
    })
    
    return { success: true, data }
  } catch (error) {
    return { success: false, error }
  }
})
