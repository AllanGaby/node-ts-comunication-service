import 'module-alias/register'
import app from '@/main/config/express/app'
import { Config } from '@/main/config/environment'

try {
  app.listen(Config.port, () => {
    console.log(`Server started on port ${Config.port}`)
  })
} catch (error) {
  console.log(error)
}
