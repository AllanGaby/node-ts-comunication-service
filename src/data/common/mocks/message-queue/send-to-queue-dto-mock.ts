import { SendToQueueDTO } from '@/data/common/protocols'
import faker from 'faker'

export const mockSendToQueueDTO = (): SendToQueueDTO<object> => ({
  queueName: faker.datatype.uuid(),
  params: faker.random.objectElement<object>()
})
