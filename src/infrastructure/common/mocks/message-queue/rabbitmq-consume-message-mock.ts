import { ConsumeMessage } from 'amqplib'
import faker from 'faker'

export const mockConsumeMessage = (): ConsumeMessage => ({
  content: Buffer.from(JSON.stringify({
    id: faker.datatype.uuid()
  })),
  fields: undefined,
  properties: undefined
})
