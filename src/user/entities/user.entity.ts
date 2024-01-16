import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({comment: "Name"})
  firstName: string;

  @Column({comment: "Surname"})
  lastName: string;

  @Column({ default: true , comment: "Is Active"})
  isActive: boolean;

  @Column({ default: false, comment: "Deleted" })
  isDelete: boolean;

}