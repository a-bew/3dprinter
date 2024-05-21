// column.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { TableEntity } from './table.entity';
import { CellEntity } from './cell.entity';

@Entity()
export class ColumnEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    columnName!: string;

    @Column()
    type!: string;

    // Other column properties like type, length, etc.

    @ManyToOne(() => TableEntity, table => table.columns)
    table!: TableEntity;

    @OneToMany(() => CellEntity, cell => cell.column) // Adjusted relationship mapping
    cells!: CellEntity[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
