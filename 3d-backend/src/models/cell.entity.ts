// column.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { TableEntity } from './table.entity';
import { ColumnEntity } from './column.entity';
import { RowEntity } from './row.entity';

// CellEntityModel
@Entity()
export class CellEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    cellData!: string;
    // Other column properties like type, length, etc.

    @Column()
    type!: string;

    @Column({ nullable: true })
    tableId!: number;
    @ManyToOne(() => TableEntity, table => table.cells)
    @JoinColumn()
    table!: TableEntity;

    @Column({ nullable: true })
    columnId!: number;
    @ManyToOne(() => ColumnEntity, column => column.cells)
    @JoinColumn()
    column!: ColumnEntity;

    @Column({ nullable: true })
    rowId!: number;
    @ManyToOne(() => RowEntity, row => row.cells)
    @JoinColumn()
    row!: RowEntity;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
