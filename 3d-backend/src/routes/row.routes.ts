// row.routes.ts
import express from 'express';
import { RowController } from '../controllers/row.controller';

const RowRouter = express.Router();

RowRouter.post('/:id', async (req, res) => {
    const rowController = new RowController();
    const tableId = parseInt(req.params.id, 10);
    const rowData = req.body;
    const row = await rowController.createRow(tableId, rowData);
    res.status(201).json(row);
});

RowRouter.get('/:id', async (req, res) => {
    const rowController = new RowController();
    const rowId = parseInt(req.params.id, 10);
    const row = await rowController.getOneRow(rowId);

    if (row) {
        res.status(200).json(row);
    } else {
        res.status(404).json({ error: 'Row not found' });
    }
});

RowRouter.get('/', async (_req, res) => {
    const rowController = new RowController();
    const rows = await rowController.getAllRows();
    res.status(200).json(rows);
});

RowRouter.put('/:id', async (req, res) => {
    const rowController = new RowController();

    const rowId = parseInt(req.params.id, 10);
    const updatedData = req.body;

    const updatedRow = await rowController.updateRow(rowId, updatedData);

    if (updatedRow) {
        res.status(200).json(updatedRow);
    } else {
        res.status(404).json({ error: 'Row not found' });
    }
});

RowRouter.delete('/:id', async (req, res) => {
    const rowController = new RowController();

    const rowId = parseInt(req.params.id, 10);

    const isDeleted = await rowController.deleteRow(rowId);

    if (isDeleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Row not found' });
    }
});

export default RowRouter;