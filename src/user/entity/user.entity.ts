
import { Entity, Column,PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class userEntity{
    @Column()
    @PrimaryGeneratedColumn()
    id: string
    
    @Column()
    firstname:string
}