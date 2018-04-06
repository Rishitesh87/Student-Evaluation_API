import {
  JsonController, Authorized, CurrentUser, Post, Param,Body, BadRequestError, HttpCode, NotFoundError, Get, Delete, HeaderParam
} from 'routing-controllers'
import  Batch  from './entity'
export const baseUrl='http://localhost:4008'

@JsonController()
export default class BatchController {

  @Get('/batches')
  async allBatches() {
    // const batches = await Batch.find()
    // return { batches }
    return Batch.find({relations: ['students']})
  }

  @Get('/batches/:id([0-9]+)')
  async getBatch(
    @Param('id') id: number
  ) {
    const batch= await Batch.findOneById(id,{relations: ['students']})
    if (!batch) throw new NotFoundError ('This batch does not exist')
    return batch

  }

  @Post('/batches')
  @HttpCode(201)
  async createBatch(
    @Body() body: Batch
  ) {
    const check = await Batch.findOne({where: {id: body.id}})
    if(check) throw new BadRequestError('This batch has already been created')

    await Batch.create(body).save()
    const batch= await Batch.findOne({where: {id: body.id}, relations: ['students']})
    return batch
  }

}
