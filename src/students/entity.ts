import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString,IsUrl} from 'class-validator'
import Batch from '../batches/entity'
import Evaluation from '../evaluations/entity'


@Entity()
export default class Student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  fullName: string

  @IsUrl()
  @Column('text')
  picture: string

  @ManyToOne(_ => Batch, batch => batch.students)
  batch: Batch

  @OneToMany(_ => Evaluation, evaluation => evaluation.student, {eager: true})
  evaluations: Evaluation[]

}
