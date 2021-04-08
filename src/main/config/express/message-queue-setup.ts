import { MessageQueueFactory } from '@/infrastructure/common/message-queue'
import { ComunicationMessageQueueSetup } from '@/main/factories/comunication/setup'
import { Config } from '@/main/config/environment'

export default (): void => {
  ComunicationMessageQueueSetup(MessageQueueFactory.makeConsumeQueue(Config.messageQueue.host), {
    sendMailQueueName: Config.comunication.sendMailQueueName,
    smtpConfig: Config.comunication.props
  })
}
