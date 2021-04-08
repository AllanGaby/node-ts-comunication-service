import { SendEmailExecuteQueueDTO } from '@/data/comunication/message-queue'
import { mockContactModel } from '@/data/common/mocks'
import faker from 'faker'

export const mockSendEmailExecuteQueueDTO = (): SendEmailExecuteQueueDTO => ({
  content: faker.random.words(),
  subject: faker.random.words(),
  sender: mockContactModel(),
  to: mockContactModel()
})
