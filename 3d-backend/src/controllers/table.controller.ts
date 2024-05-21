// table.controller.ts
import { Get, Route, Tags, Post, Body, Path, Put, Delete } from "tsoa";
import { Request, Response } from 'express';
import { ITablePayload, TableService } from '../repositories/table.service';
import { TableEntity } from "../models";

@Route("tables")
@Tags("Table")
export class TableController {
    private tableService = new TableService();

    @Post("/")
    async createTable(@Body() payload: ITablePayload): Promise<TableEntity> {
        const table = await this.tableService.createTable(payload);
        return table;
    }

    @Get("/:id")
    async getOneTable(@Path() id: number): Promise<TableEntity | null> {
        return this.tableService.getOneTable(id);
    }

    // Implement similar methods for getAllTables, updateTable, deleteTable
    @Get("/")
    async getAllTables(): Promise<Array<TableEntity>> {
        return this.tableService.getAllTables();
    }

    @Put('/:id')
    async updateTable(@Path() id: number, @Body() updatedData: ITablePayload): Promise<TableEntity | null> {
        return await this.tableService.updateTable(id, updatedData);
    }

    @Delete('/:id')
    async deleteTable(@Path() id: number): Promise<boolean> {
        return await this.tableService.deleteTable(id);
    }
}

// export class TableController {
//     private tableService = new TableService();

//     async createTable(req: Request, res: Response): Promise<void> {
//         try {
//             const { tableName } = req.body;
//             const table = await this.tableService.createTable(tableName);
//             res.status(201).json(table);
//         } catch (error) {
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }

//     async getOneTable(req: Request, res: Response): Promise<void> {
//         try {
//             const tableId = parseInt(req.params.id, 10);
//             const table = await this.tableService.getOneTable(tableId);

//             if (table) {
//                 res.status(200).json(table);
//             } else {
//                 res.status(404).json({ error: 'Table not found' });
//             }
//         } catch (error) {
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }

//     // Implement similar methods for getAllTables, updateTable, deleteTable
//     async getAllTables(req: Request, res: Response): Promise<void> {
//         try {
//             const tables = await this.tableService.getAllTables();
//             res.status(200).json(tables);
//         } catch (error) {
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }

//     async updateTable(req: Request, res: Response): Promise<void> {
//         try {
//             const tableId = parseInt(req.params.id, 10);
//             const updatedData = req.body; // Assuming you send the updated data in the request body

//             const updatedTable = await this.tableService.updateTable(tableId, updatedData);

//             if (updatedTable) {
//                 res.status(200).json(updatedTable);
//             } else {
//                 res.status(404).json({ error: 'Table not found' });
//             }
//         } catch (error) {
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }

//     async deleteTable(req: Request, res: Response): Promise<void> {
//         try {
//             const tableId = parseInt(req.params.id, 10);

//             const isDeleted = await this.tableService.deleteTable(tableId);

//             if (isDeleted) {
//                 res.status(204).send(); // No content for successful deletion
//             } else {
//                 res.status(404).json({ error: 'Table not found' });
//             }
//         } catch (error) {
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     }
// }
