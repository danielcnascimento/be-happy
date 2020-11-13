import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';

@Entity('orphanages')//ver se não é letra maiúscula na db
export default class Orphanages{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name:string;

    @Column()
    latitude:number;

    @Column()
    longitude:number;

    @Column()
    about:string;

    @Column()
    instruction:string;

    @Column()
    opening_hours:string;

    @Column()
    open_on_weekends:boolean;

    @OneToMany(() => Image, image => image.orphanage, { // ele junta varias imagens para um orfanato e insere e atualiza em cascata 
        cascade:['insert', 'update']
    })
    @JoinColumn({name:"orphanage_id"})
    images: Image[];
}