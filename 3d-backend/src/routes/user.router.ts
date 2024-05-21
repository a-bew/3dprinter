import express from "express";
import { UserController } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/", async (_req, res) => {
    const controller = new UserController();
    const response = await controller.getUsers();
    return res.send(response);
});

userRouter.post("/", async (req, res) => {
    const controller = new UserController();
    const response = await controller.createUser(req.body);
    return res.send(response);
});

userRouter.get("/:id", async (req, res) => {
    const controller = new UserController();
    const response = await controller.getUser(req.params.id);
    if (!response) res.status(404).send({ message: "No user found" });
    return res.send(response);
});

userRouter.put('/:id', async (req, res) => {
    const controller = new UserController();
    const tableId = parseInt(req.params.id, 10);
    const updatedData = req.body;

    const updatedTable = await controller.updateTable(tableId, updatedData);

    if (updatedTable) {
        res.status(200).json(updatedTable);
    } else {
        res.status(404).json({ error: 'Table not found' });
    }
});

userRouter.delete('/:id', async (req, res) => {
    const controller = new UserController();

    const tableId = parseInt(req.params.id, 10);

    const isDeleted = await controller.deleteTable(tableId);

    if (isDeleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Table not found' });
    }
});

export default userRouter;