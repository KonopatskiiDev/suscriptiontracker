import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Subscription {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    price: number;
    
    @Column()
    billingCycle: string;
    
    @Column()
    nextPaymentDate: Date;
    
    @Column()
    isActive: boolean;
    
    @Column()
    userId: number;
}