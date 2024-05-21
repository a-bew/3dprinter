// routes.ts
import express from 'express';
import { TableController } from '../controllers/table.controller';

const TableRouter = express.Router();

TableRouter.post('/', async (req, res) => {
    const tableController = new TableController();
    const payload = req.body;
    const table = await tableController.createTable(payload);
    res.status(201).json(table);
});

TableRouter.get('/:id', async (req, res) => {
    const tableController = new TableController();
    const tableId = parseInt(req.params.id, 10);
    const table = await tableController.getOneTable(tableId);

    if (table) {
        res.status(200).json(table);
    } else {
        res.status(404).json({ error: 'Table not found' });
    }
});

TableRouter.get('/', async (req, res) => {
    const tableController = new TableController();
    const tables = await tableController.getAllTables();
    res.status(200).json(tables);
});

TableRouter.put('/:id', async (req, res) => {
    const tableController = new TableController();
    const tableId = parseInt(req.params.id, 10);
    const updatedData = req.body;

    const updatedTable = await tableController.updateTable(tableId, updatedData);

    if (updatedTable) {
        res.status(200).json(updatedTable);
    } else {
        res.status(404).json({ error: 'Table not found' });
    }
});

TableRouter.delete('/:id', async (req, res) => {
    const tableController = new TableController();

    const tableId = parseInt(req.params.id, 10);

    const isDeleted = await tableController.deleteTable(tableId);

    if (isDeleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Table not found' });
    }
});

export default TableRouter;
