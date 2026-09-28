import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";


@Entity("orders")
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    orderNumber: number;

    @Column()
    title: string;

    @Column()
    amount: number;

    @Column()
    status: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column({ default: true })
    isActive: boolean;
}
