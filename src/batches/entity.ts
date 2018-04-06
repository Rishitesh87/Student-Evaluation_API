import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsDate} from 'class-validator'
import Student from '../students/entity'



@Entity()
export default class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsDate()
  @Column('date')
  startDate: Date

  @IsDate()
  @Column('date')
  endDate: Date

  @OneToMany(_ => Student, student => student.batch)
  students: Student[]

}
