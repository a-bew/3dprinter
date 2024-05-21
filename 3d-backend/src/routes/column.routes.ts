// column.routes.ts
import express from 'express';
import { ColumnController } from '../controllers/column.controller';

const ColumnRouter = express.Router();
const columnController = new ColumnController();

ColumnRouter.post('/', async (req, res) => {
    const payload = req.body;
    const column = await columnController.createColumn(payload);
    res.status(201).json(column);
});

ColumnRouter.get('/:id', async (req, res) => {
    const columnId = parseInt(req.params.id, 10);
    const column = await columnController.getOneColumn(columnId);

    if (column) {
        res.status(200).json(column);
    } else {
        res.status(404).json({ error: 'Column not found' });
    }
});

ColumnRouter.get('/', async (_req, res) => {
    const columns = await columnController.getAllColumns();
    res.status(200).json(columns);
});

ColumnRouter.put('/:id', async (req, res) => {
    const columnId = parseInt(req.params.id, 10);
    const updatedData = req.body;

    const updatedColumn = await columnController.updateColumn(columnId, updatedData);

    if (updatedColumn) {
        res.status(200).json(updatedColumn);
    } else {
        res.status(404).json({ error: 'Column not found' });
    }
});

ColumnRouter.delete('/:id', async (req, res) => {
    const columnId = parseInt(req.params.id, 10);

    const isDeleted = await columnController.deleteColumn(columnId);

    if (isDeleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Column not found' });
    }
});

export default ColumnRouter;
