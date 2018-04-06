import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import UserController from './users/controller'
import LoginController from './login/controller'
import BatchController from './batches/controller'

const port = process.env.PORT || 4008

const app = createKoaServer({
  controllers: [
    UserController,
    LoginController,
    BatchController
  ]
})

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch(err => console.error(err))
