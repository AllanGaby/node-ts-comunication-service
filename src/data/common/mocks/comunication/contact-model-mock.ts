import { ContactModel } from '@/data/common/protocols'
import faker from 'faker'

export const mockContactModel = (): ContactModel => ({
  name: faker.name.findName(),
  email: faker.internet.email()
})
