import { ExecuteQueue, SendMail, SendMailDTO } from '@/data/common/protocols'

export type SendEmailExecuteQueueDTO = SendMailDTO

export class SendMailExecuteQueue implements ExecuteQueue {
  constructor (
    private readonly sendMailAdapter: SendMail
  ) {}

  async execute (params: SendEmailExecuteQueueDTO): Promise<void> {
    this.sendMailAdapter.sendMail(params)
  }
}
