import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './Orphanage'

@Entity('images')
export default class {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path:string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images ) // muitas imagens para um orfanato 
    @JoinColumn({name:'orphanage_id'})
    orphanage:Orphanage;
}