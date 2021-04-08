import { NodemailerAdapter } from './nodemailer-adapter'
import { mockSMTPConfig, mockSendMailDTO, NodemailerTransportSpy } from '@/infrastructure/common/mocks'

jest.mock('nodemailer', () => ({
  createTransport: () => {
    return NodemailerTransportSpy
  }
}))

type sutTypes = {
  sut: NodemailerAdapter
}

const makeSut = (): sutTypes => ({
  sut: new NodemailerAdapter(mockSMTPConfig())
})

describe('NodemailerAdapter', () => {
  test('Should call sendMail to nodemailer with correct value', async () => {
    const { sut } = makeSut()
    const request = mockSendMailDTO()
    const sendMailSpy = jest.spyOn(NodemailerTransportSpy, 'sendMail')
    await sut.sendMail(request)
    expect(sendMailSpy).toHaveBeenCalledWith({
      sender: {
        address: request.sender.email,
        name: request.sender.name
      },
      subject: request.subject,
      to: {
        address: request.to.email,
        name: request.to.name
      },
      html: request.content
    })
  })
})
