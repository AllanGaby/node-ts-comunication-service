import { ContactModel } from './contact-model'

export interface SendMailDTO {
  sender: ContactModel
  to: ContactModel
  subject: string
  content: string
}

export interface SendMail {
  sendMail: (data: SendMailDTO) => Promise<void>
}
