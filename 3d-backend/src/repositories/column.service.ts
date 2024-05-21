// column.service.ts
import { getRepository } from 'typeorm';
import { ColumnEntity } from '../models';
import { AppDataSource } from '..';

export class ColumnService {

    async createColumn(columnName: string, tableId: number, type: string): Promise<ColumnEntity> {
        const columnRepository = (await AppDataSource).getRepository(ColumnEntity);

        const column = columnRepository.create({ columnName, type, table: { id: tableId } });
        return await columnRepository.save(column);
    }

    async getOneColumn(columnId: number): Promise<ColumnEntity | null> {
        const columnRepository = (await AppDataSource).getRepository(ColumnEntity);

        return await columnRepository.findOneBy({ id: columnId });
    }

    async getAllColumns(): Promise<ColumnEntity[]> {
        const columnRepository = (await AppDataSource).getRepository(ColumnEntity);

        return await columnRepository.find();
    }

    async updateColumn(columnId: number, updatedData: Partial<ColumnEntity>): Promise<ColumnEntity | null> {
        const columnRepository = (await AppDataSource).getRepository(ColumnEntity);
        await columnRepository.update(columnId, updatedData);
        return this.getOneColumn(columnId);
    }

    async deleteColumn(columnId: number): Promise<boolean> {
        const columnRepository = (await AppDataSource).getRepository(ColumnEntity);
        const result = await columnRepository.delete(columnId);
        return result.affected === 1;
    }
}