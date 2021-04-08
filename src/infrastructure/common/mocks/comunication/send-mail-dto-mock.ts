import { SendMailDTO } from '@/data/common/protocols'
import faker from 'faker'

export const mockSendMailDTO = (): SendMailDTO => ({
  subject: faker.datatype.uuid(),
  content: faker.datatype.uuid(),
  sender: {
    name: faker.name.findName(),
    email: faker.internet.email()
  },
  to: {
    name: faker.name.findName(),
    email: faker.internet.email()
  }
})
