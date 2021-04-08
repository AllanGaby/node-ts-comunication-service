import { SendMailExecuteQueue } from './send-email-execute-queue'
import { SendMailSpy } from '@/data/common/mocks'
import { mockSendEmailExecuteQueueDTO } from '@/data/comunication/mocks'

type sutTypes = {
  sut: SendMailExecuteQueue
  sendMail: SendMailSpy
}

const makeSut = (): sutTypes => {
  const sendMail = new SendMailSpy()
  const sut = new SendMailExecuteQueue(sendMail)
  return {
    sut,
    sendMail
  }
}

describe('SendMailExecuteQueue', () => {
  test('Should call SendMailAdapter with correct values', async () => {
    const { sut, sendMail } = makeSut()
    const request = mockSendEmailExecuteQueueDTO()
    await sut.execute(request)
    expect(sendMail.params).toEqual(request)
  })
})
