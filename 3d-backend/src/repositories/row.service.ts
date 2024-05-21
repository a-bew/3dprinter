// row.service.ts
import { RowEntity } from '../models';
import { AppDataSource } from '..';

export class RowService {

    async createRow(tableId: number, rowData: Record<string, any>): Promise<RowEntity> {
        const rowRepository = (await AppDataSource).getRepository(RowEntity);

        const row = new RowEntity();
        row.table = { id: tableId } as any; // Assuming 'table' is a valid property in RowEntity

        // Set other properties based on your actual data
        // Example: row.column1 = rowData.column1;

        return await rowRepository.save(row);
    }

    async getOneRow(rowId: number): Promise<RowEntity | null> {
        const rowRepository = (await AppDataSource).getRepository(RowEntity);
        // return await rowRepository.findOneBy({ id: rowId })
        return await rowRepository.findOne({
            where: {
                id: rowId,
            },
            relations: {
                cells: {
                    column: true // Include the 'column' relation
                }
            },
        })
    }

    async getAllRows(): Promise<RowEntity[]> {
        const rowRepository = (await AppDataSource).getRepository(RowEntity);
        return await rowRepository.find({ relations: ['cells', 'cells.column'] });
    }

    async updateRow(rowId: number, updatedData: Record<string, any>): Promise<RowEntity | null> {
        const rowRepository = (await AppDataSource).getRepository(RowEntity);
        await rowRepository.update(rowId, updatedData);
        return this.getOneRow(rowId);
    }

    async deleteRow(rowId: number): Promise<boolean> {
        const rowRepository = (await AppDataSource).getRepository(RowEntity);
        const result = await rowRepository.delete(rowId);
        return result.affected === 1;
    }
}