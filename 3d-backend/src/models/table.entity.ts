//table.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ColumnEntity } from './column.entity';
import { RowEntity } from './row.entity';
import { CellEntity } from './cell.entity';
import { User } from './user';
// import { ColumnEntity } from './column.entity';

@Entity()
export class TableEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    tableName!: string;

    @Column({ nullable: true })
    userId!: number;
    @ManyToOne((_type) => User, (user: User) => user.table)
    @JoinColumn()
    user!: User;

    @OneToMany(() => ColumnEntity, column => column.table)
    columns!: ColumnEntity[];

    @OneToMany(() => RowEntity, row => row.table)
    rows!: RowEntity[];

    @OneToMany(() => CellEntity, cell => cell.table)
    cells!: CellEntity[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

}