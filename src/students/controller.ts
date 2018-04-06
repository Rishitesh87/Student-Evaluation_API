import {
  JsonController, Authorized, CurrentUser, Post, Param,Body, BadRequestError, HttpCode, NotFoundError, Get, Delete, Patch
} from 'routing-controllers'
// import  Batch  from '../batches/entity'
import  Student  from './entity'

@JsonController()
export default class StudentController {

  @Post('/batches/:id([0-9]+)/students')
  @HttpCode(201)
  async createStudent(
    @Body() body: Student,
    @Param('id') id: number
  ) {
    const group = await Group.findOneById(id)


    
  }

  @Get('/students/:id([0-9]+)')
  async getStudent(
    @Param('id') id: number
  ) {
    const student = await Student.findOneById(id,{relations: ['evaluations']})
    if(!student) throw new NotFoundError('No student found.')

    return student
  }

  @Patch('/students/:id([0-9]+)')
  async updateStudent(
    @Body() update: Student,
    @Param('id') id: number
  ) {
    const student = await Student.findOneById(id)
    if(!student) throw new NotFoundError('This student is not found in the database')

    if(update.name) student.name = update.name
    if(update.picture) student.picture = update.picture

    await student.save()

    return student
  }

  @Delete('/students/:id([0-9]+)')
  async deleteStudent(
    @Param('id') id: number
  ) {
    const student = await Student.findOneById(id)

    return student.remove()
  }

}
