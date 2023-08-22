import { Router } from "express";
import TicketController from '../controllers/ticketsController.js'

const mockRouter = Router();
let ticketController = new TicketController();

ticketRouter.get("/", async (req, res) => {
    const result = await ticketController.getTicketsByIdController(req, res);
    res.status(result.statusCode).send(result);
});

export default mockRouter;