
import { Entity, Column,PrimaryGeneratedColumn } from "typeorm"

@Entity("profile")
export class userEntity{
    @Column()
    @PrimaryGeneratedColumn()
    id: string
    
    @Column()
    lastname:string
}