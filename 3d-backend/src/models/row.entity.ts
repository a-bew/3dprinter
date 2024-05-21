// row.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { TableEntity } from './table.entity';
import { CellEntity } from './cell.entity';

@Entity()
export class RowEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    // Columns for actual data, you might want to have dynamic properties here.

    @ManyToOne(() => TableEntity, table => table.rows)
    table!: TableEntity;

    @OneToMany(() => CellEntity, cell => cell.row) // Adjusted relationship mapping
    cells!: CellEntity[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
