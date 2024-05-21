// cell.service.ts
import { AppDataSource } from '..';
import { ICellPayload } from '../controllers/cell.controller';
import { CellEntity } from '../models';


export class CellService {

    async createCell(cellData: ICellPayload): Promise<CellEntity> {
        const cellRepository = (await AppDataSource).getRepository(CellEntity);

        const cell = new CellEntity();
        // cell.table = { id: tableId } as any; // Assuming 'table' is a valid property in CellEntity
        // cell.column = { id: columnId } as any; // Assuming 'column' is a valid property in CellEntity
        // cell.row = { id: rowId } as any; // Assuming 'row' is a valid property in CellEntity
        // cell.cellData = cellData.cellData;
        // cell.type = cellData.type;
        // Set other properties based on your actual data
        // Example: cell.cellName = cellData.cellName;

        return await cellRepository.save({
            ...cell,
            ...cellData
        });

    }

    async getOneCell(cellId: number): Promise<CellEntity | null> {
        const cellRepository = (await AppDataSource).getRepository(CellEntity);
        return await cellRepository.findOneBy({ id: cellId });
    }

    async getCellsByRowId(tableId: number, rowId: number): Promise<CellEntity[]> {
        const cellRepository = (await AppDataSource).getRepository(CellEntity);
        return await cellRepository.find({
            where: {
                table: {
                    id: tableId
                },
                row: {
                    id: rowId
                }
            },
            relations: {
                column: true
            } // Optionally include 'column' relation for accessing column properties
        });
    }

    async getAllCells(): Promise<CellEntity[]> {
        const cellRepository = (await AppDataSource).getRepository(CellEntity);
        return await cellRepository.find({
            relations: ['row', 'column']
        });
    }

    async updateCell(cellId: number, updatedData: ICellPayload): Promise<CellEntity | null> {
        const cellRepository = (await AppDataSource).getRepository(CellEntity);
        await cellRepository.update(cellId, updatedData);
        return this.getOneCell(cellId);
    }

    async deleteCell(cellId: number): Promise<boolean> {
        const cellRepository = (await AppDataSource).getRepository(CellEntity);
        const result = await cellRepository.delete(cellId);
        return result.affected === 1;
    }
}
