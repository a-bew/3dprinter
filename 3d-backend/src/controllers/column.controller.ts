// column.controller.ts
import { Body, Get, Path, Post, Put, Delete, Route, Tags } from 'tsoa';
import { ColumnService } from '../repositories/column.service';
import { ColumnEntity } from '../models';

@Route("columns")
@Tags("Column")
export class ColumnController {
    private columnService = new ColumnService();

    @Post("/")
    async createColumn(@Body() payload: { columnName: string, tableId: number, type: string }): Promise<ColumnEntity> {
        const { columnName, tableId, type } = payload;
        const column = await this.columnService.createColumn(columnName, tableId, type);
        return column;
    }

    @Get("/:id")
    async getOneColumn(@Path() id: number): Promise<ColumnEntity | null> {
        return this.columnService.getOneColumn(id);
    }

    @Get("/")
    async getAllColumns(): Promise<ColumnEntity[]> {
        return this.columnService.getAllColumns();
    }

    @Put('/:id')
    async updateColumn(@Path() id: number, @Body() updatedData: Partial<ColumnEntity>): Promise<ColumnEntity | null> {
        return await this.columnService.updateColumn(id, updatedData);
    }

    @Delete('/:id')
    async deleteColumn(@Path() id: number): Promise<boolean> {
        return await this.columnService.deleteColumn(id);
    }
}
