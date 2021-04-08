import path from 'path'
import dotenv from 'dotenv'
import { ContactModel } from '@/data/common/protocols'
import { SMTPConfig } from '@/infrastructure/common/comunication'

dotenv.config({
  path: path.resolve(__dirname, '..', '..', '..', '..', '.env')
})

type User = {
  name: string
  email: string
  password: string
}

type ConfigDTO = {
  port: number
  host: string
  comunication: {
    sender: ContactModel
    props: SMTPConfig
    sendMailQueueName: string
  }
  messageQueue: {
    host: string
  }
}

export const Config: ConfigDTO = {
  port: Number(process.env.API_PORT),
  host: process.env.API_HOST,
  comunication: {
    sendMailQueueName: process.env.COMUNICATION_SEND_MAIL_QUEUE,
    sender: {
      name: process.env.COMUNICATION_SENDER_NAME,
      email: process.env.COMUNICATION_SENDER_EMAIL
    },
    props: {
      service: process.env.COMUNICATION_SMTP_SERVICE,
      auth: {
        user: process.env.COMUNICATION_SMTP_AUTH_ACCOUNT,
        pass: process.env.COMUNICATION_SMTP_AUTH_PASSWORD
      }
    }
  },
  messageQueue: {
    host: process.env.MESSAGE_QUEUE_HOST
  }
}
