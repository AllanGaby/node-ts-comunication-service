import { SMTPConfig } from '@/infrastructure/common/comunication'
import faker from 'faker'

export const mockSMTPConfig = (): SMTPConfig => ({
  host: faker.internet.url(),
  port: faker.datatype.number({ min: 0, max: 9999 }),
  secure: faker.datatype.boolean(),
  auth: {
    user: faker.internet.email(),
    pass: faker.internet.password()
  }
})
