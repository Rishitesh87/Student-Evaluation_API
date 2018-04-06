import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsDateString} from 'class-validator'
import Student from '../students/entity'



@Entity()
export default class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsDateString()
  @Column('date')
  startDate: Date

  @IsDateString()
  @Column('date')
  endDate: Date

  @OneToMany(_ => Student, student => student.batch)
  students: Student[]

}
