import { SendMail } from '@/data/common/protocols'
import { NodemailerAdapter } from './nodemailer-adapter'
import { SMTPConfig } from './smtp-config-type'
export * from './smtp-config-type'

export class ComunicationFactory {
  static makeSendMail = (config: SMTPConfig): SendMail => new NodemailerAdapter(config)
}
