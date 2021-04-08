import { ConsumeQueue } from '@/data/common/protocols'
import { makeSendMailExecuteQueue, SendMailExecuteQueueProps } from '@/main/factories/comunication/message-queue'

export type ComunicationMessageQueueSetupProps = SendMailExecuteQueueProps & {
  sendMailQueueName: string
}

export const ComunicationMessageQueueSetup = (ConsumeQueueAdapter: ConsumeQueue, props: ComunicationMessageQueueSetupProps): void => {
  ConsumeQueueAdapter.consume({
    queueName: props.sendMailQueueName,
    executor: makeSendMailExecuteQueue(props)
  })
}
