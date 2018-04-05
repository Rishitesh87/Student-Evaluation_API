import { JsonController, Post, Param, Get, Put, Patch, NotFoundError, Body, Authorized, Delete } from 'routing-controllers'
import User from './entity';
import * as request from 'superagent'

// const eventUrl = process.env.EVENT_URL || 'http://localhost:5008/events'

@JsonController()
export default class UserController {

  @Post('/users')
  async signup(
    @Body() user: User
  ) {
    const {password, ...rest} = user
    const entity = User.create(rest)
    await entity.setPassword(password)
    return entity.save()
  }

  // this markes a method as endpoint
  // in this case it responds to any GET /pages/:id
  // request with :id being a variable parameter
  // @Authorized()
//   @Get('/users/:id([0-9]+)')
//   getUser(
//     return entity.save()
//   }
//
//   // @Authorized()
//   @Get('/users/:id([0-9]+)')
//   getUser(
//     @Param('id') id: number
//   ) {
//     return User.findOneById(id)
//   }
//
//   // @Authorized()
//   @Get('/users')
//   allUsers() {
//     return User.find()
//   }
//
//   // Add update: @patch
//   //Change @body for our purposes
//   // @Authorized()
//   // @Put('/users/:id([0-9]+)')
//   // @Patch('/users/:id([0-9]+)')
//   // async updateUser(
//   //   @Param('id') id: number,
//   //   @Body() update: Partial<User>
//   // ) {
//   //   const user = await User.findOneById(id)
//   //   if (!user) throw new NotFoundError('Cannot find page')
//   //   return User.merge(user, update).save()
//   // }
//
//   // @Authorized()
//  @Delete('/users/:id([0-9]+)')
//  async removeUser(
//    @Param('id') id: number
//  )  {
//      const user = await User.findOneById(id)
//      if (!user) throw new NotFoundError('Cannot find user')
//      user.remove()
//      return "user succesfully deleted"
//    }
}
