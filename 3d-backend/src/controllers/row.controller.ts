// row.controller.ts
import { Get, Route, Tags, Post, Body, Path, Put, Delete } from "tsoa";
import { RowEntity } from "../models";
import { RowService } from "../repositories/row.service";

@Route("rows")
@Tags("Row")
export class RowController {
    private rowService = new RowService();

    @Post("/:tableId")
    async createRow(@Path() tableId: number, @Body() rowData: Record<string, any>): Promise<RowEntity> {
        const row = await this.rowService.createRow(tableId, rowData);
        return row;
    }

    @Get("/:id")
    async getOneRow(@Path() id: number): Promise<RowEntity | null> {
        return this.rowService.getOneRow(id);
    }

    // Implement similar methods for getAllRows, updateRow, deleteRow
    @Get("/")
    async getAllRows(): Promise<Array<RowEntity>> {
        return this.rowService.getAllRows();
    }

    @Put('/:id')
    async updateRow(@Path() id: number, @Body() updatedData: Record<string, any>): Promise<RowEntity | null> {
        return await this.rowService.updateRow(id, updatedData);
    }

    @Delete('/:id')
    async deleteRow(@Path() id: number): Promise<boolean> {
        return await this.rowService.deleteRow(id);
    }
}
