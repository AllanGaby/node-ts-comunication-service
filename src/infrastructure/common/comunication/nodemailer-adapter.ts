import { SendMail, SendMailDTO } from '@/data/common/protocols'
import { SMTPConfig } from './smtp-config-type'
import nodemailer, { Transporter } from 'nodemailer'

export class NodemailerAdapter implements SendMail {
  private readonly nodemailerTransport: Transporter

  constructor (
    private readonly nodemailerAdapterOptions: SMTPConfig
  ) {
    this.nodemailerTransport = nodemailer.createTransport(this.nodemailerAdapterOptions)
  }

  async sendMail ({ sender, subject, to, content }: SendMailDTO): Promise<void> {
    this.nodemailerTransport.sendMail({
      sender: {
        address: sender.email,
        name: sender.name
      },
      subject,
      to: {
        address: to.email,
        name: to.name
      },
      html: content
    })
  }
}
