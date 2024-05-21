// cell.routes.ts
import express from 'express';
import { CellController } from '../controllers/cell.controller';

const CellRouter = express.Router();
const cellController = new CellController();


CellRouter.post('/', async (req, res) => {
    // const tableId = parseInt(req.params.tableId, 10);
    // const columnId = parseInt(req.params.columnId, 10);
    // const rowId = parseInt(req.params.rowId, 10);
    const cellData = req.body;

    const cell = await cellController.createCell(cellData);
    res.status(201).json(cell);
});

CellRouter.post('/bulk', async (req, res) => {
    // const tableId = parseInt(req.params.tableId, 10);
    // const columnId = parseInt(req.params.columnId, 10);
    // const rowId = parseInt(req.params.rowId, 10);
    const cellDataArray = req.body;

    const createdCells = await cellController.createBulkCells(cellDataArray);
    res.status(201).json(createdCells);
});

CellRouter.get('/:tableId/:rowId', async (req, res) => {
    const tableId = parseInt(req.params.tableId, 10);
    const rowId = parseInt(req.params.rowId, 10);

    const cell = await cellController.getCellsByRowId(tableId, rowId);
    if (cell) {
        res.status(200).json(cell);
    } else {
        res.status(404).json({ error: 'Cell not found' });
    }
});

CellRouter.get('/:id', async (req, res) => {
    const cellId = parseInt(req.params.id, 10);
    const cell = await cellController.getOneCell(cellId);

    if (cell) {
        res.status(200).json(cell);
    } else {
        res.status(404).json({ error: 'Cell not found' });
    }
});

// @Get("/:tableId/:rowId")


CellRouter.get('/', async (_req, res) => {
    const cells = await cellController.getAllCells();
    res.status(200).json(cells);
});

CellRouter.put('/:id', async (req, res) => {
    const cellId = parseInt(req.params.id, 10);
    const updatedData = req.body;

    const updatedCell = await cellController.updateCell(cellId, updatedData);

    if (updatedCell) {
        res.status(200).json(updatedCell);
    } else {
        res.status(404).json({ error: 'Cell not found' });
    }
});

CellRouter.delete('/:id', async (req, res) => {
    const cellId = parseInt(req.params.id, 10);

    const isDeleted = await cellController.deleteCell(cellId);

    if (isDeleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Cell not found' });
    }
});

export default CellRouter;
