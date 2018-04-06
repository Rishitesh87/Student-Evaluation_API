import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsDateString} from 'class-validator'
import Student from '../students/entity'
// import Evaluation from '../evaluations/entity'


@Entity()
export default class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  color: string

  @IsString()
  @Column('text', {nullable:true})
  remark: string

  @IsDateString()
  @Column('date')
  date: Date

  @ManyToOne(_ => Student, student => student.evaluations, {onDelete: 'CASCADE'})
  student: Student

}
