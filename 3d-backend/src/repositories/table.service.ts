// table.service.ts
import { AppDataSource } from '..';
import { TableEntity } from '../models';
import { getRepository } from 'typeorm';

export interface ITablePayload {
    tableName: string;
    userId: number;
}

export class TableService {

    async createTable(payload: ITablePayload): Promise<TableEntity> {
        const tableRepository = (await AppDataSource).getRepository(TableEntity);

        const user = new TableEntity();
        return await tableRepository.save({
            ...user,
            ...payload,
        });
    }

    async getOneTable(tableId: number): Promise<TableEntity | null> {
        const tableRepository = (await AppDataSource).getRepository(TableEntity);

        const user = await tableRepository.findOneBy({ id: tableId });
        if (!user) return null;
        return user;
    }

    async getAllTables(): Promise<TableEntity[]> {
        const tableRepository = (await AppDataSource).getRepository(TableEntity);
        return await tableRepository.find({
            relations: {
                user: true,
                columns: true,
                rows: true,
                cells: true
            }
        });
    }

    async updateTable(tableId: number, updatedData: ITablePayload): Promise<TableEntity | null> {
        const tableRepository = (await AppDataSource).getRepository(TableEntity);

        await tableRepository.update(tableId, updatedData);

        return this.getOneTable(tableId);
    }

    async deleteTable(tableId: number): Promise<boolean> {
        const tableRepository = (await AppDataSource).getRepository(TableEntity);

        const result = await tableRepository.delete(tableId);
        return result.affected === 1;
    }
}
