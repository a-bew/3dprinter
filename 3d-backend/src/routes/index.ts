import express from "express";
import PingController from "../controllers/ping";
import TableRouter from "./table.router";
import ColumnRouter from "./column.routes";
import RowRouter from "./row.routes";
import CellRouter from "./cell.routes";
import userRouter from "./user.router";

const router = express.Router();

router.get("/ping", async (_req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
});

// curl -X POST -H "Content-Type: application/json" -d '{"firstName": "foo", "lastName": "bar", "email": "foo@bar.com"}' http://localhost:8000/users
router.use("/users", userRouter);
router.use("/tables", TableRouter);
router.use("/columns", ColumnRouter);
router.use("/rows", RowRouter);
router.use("/cells", CellRouter);

export default router;