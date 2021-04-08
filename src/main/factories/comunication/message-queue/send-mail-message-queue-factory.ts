import { SendMailExecuteQueue } from '@/data/comunication/message-queue'
import { ComunicationFactory, SMTPConfig } from '@/infrastructure/common/comunication'

export type SendMailExecuteQueueProps = {
  smtpConfig: SMTPConfig
}

export const makeSendMailExecuteQueue = ({ smtpConfig }: SendMailExecuteQueueProps): SendMailExecuteQueue => {
  return new SendMailExecuteQueue(
    ComunicationFactory.makeSendMail(smtpConfig)
  )
}
