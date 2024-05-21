// cell.controller.ts
import { CellEntity } from '../models';
import { Body, Route, Post, Get, Path, Put, Delete, Tags } from 'tsoa';
import { CellService } from '../repositories/cell.service';

export interface ICellPayload {
    cellData: string;
    type: string;
    tableId: number;
    columnId: number;
    rowId: number;
}

@Route("cells")
@Tags("Cell")
export class CellController {
    private cellService = new CellService();

    @Post("/bulk")
    async createBulkCells(
        // @Path() tableId: number,
        // @Path() columnId: number,
        // @Path() rowId: number,
        @Body() cellDataArray: ICellPayload[]
    ): Promise<CellEntity[]> {
        const createdCells: CellEntity[] = [];

        for (const cellData of cellDataArray) {
            const cell = await this.cellService.createCell(cellData);
            createdCells.push(cell);
        }

        return createdCells;
    }

    @Post("/")
    async createCell(
        // @Path() tableId: number,
        // @Path() columnId: number,
        // @Path() rowId: number,
        @Body() cellData: ICellPayload
    ): Promise<CellEntity> {
        const cell = await this.cellService.createCell(cellData);
        return cell;
    }

    @Get("/:id")
    async getOneCell(@Path() id: number): Promise<CellEntity | null> {
        return this.cellService.getOneCell(id);
    }

    @Get("/:tableId/:rowId")
    async getCellsByRowId(
        @Path() tableId: number,
        @Path() rowId: number
    ): Promise<CellEntity[]> {
        return this.cellService.getCellsByRowId(tableId, rowId);
    }

    // Implement similar methods for getAllCells, updateCell, deleteCell
    @Get("/")
    async getAllCells(): Promise<Array<CellEntity>> {
        return this.cellService.getAllCells();
    }

    @Put('/:id')
    async updateCell(@Path() id: number, @Body() updatedData: ICellPayload): Promise<CellEntity | null> {
        return await this.cellService.updateCell(id, updatedData);
    }

    @Delete('/:id')
    async deleteCell(@Path() id: number): Promise<boolean> {
        return await this.cellService.deleteCell(id);
    }
}
