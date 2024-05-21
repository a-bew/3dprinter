import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { RowEntity } from "./row.entity";
import { TableEntity } from "./table.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    email!: string;

    @OneToMany(() => RowEntity, row => row.table)
    table!: TableEntity[];

    @OneToMany(() => RowEntity, row => row.table)
    rows!: RowEntity[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}