import { Router, Request, Response } from "express";
import { createTicket} from "./controllers/ticketControllers";
const {createTicketValidate} = require("../validators/ticketValidator");
import { TokenValidation } from "../libs/validateToken";
const route = Router();

// route.get("/allTickets", async (_req: Request, res: Response) => {
//     try {
//         const result = await getAllTickets();
//         res.status(200).send(result);
//     } catch (error: any) {
//         res.status(400).send(error.message);
//     }
// });

route.post("/createticket", TokenValidation, createTicketValidate, async (req: Request, res: Response) => {
    const  body  = req.body;
    const tokenId = req.userId;
    console.log("token", typeof tokenId, tokenId);
          if(!tokenId){
           res.status(404).send("Token invalido.");
          }
    try {
       const result = await createTicket(body, tokenId);
       res.status(200).send(result);
    } catch (error: any) {
        res.status(400).send(error.message);
    }

});

export default route;