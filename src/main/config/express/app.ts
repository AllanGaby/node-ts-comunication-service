import express from 'express'
import messageQueueSetup from './message-queue-setup'

const app = express()
messageQueueSetup()
export default app
