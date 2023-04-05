import { Router, Request, Response } from "express";
import { createTicket, getAllTickets} from "./controllers/ticketControllers";
const {createTicketValidate} = require("../validators/ticketValidator");
import { TokenValidation } from "../libs/validateToken";
import { checkRoleAuth } from "../libs/roleAuth";
const route = Router();
const rolType1: string = process.env.ROL_TYPE1 as string;
const rolType2: string = process.env.ROL_TYPE2 as string;
route.get("/allTickets", TokenValidation, checkRoleAuth(rolType1, rolType2), async (_req: Request, res: Response) => {
    try {
        const result = await getAllTickets();
        res.status(200).send(result);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

route.post("/createticket", TokenValidation, checkRoleAuth(rolType1, rolType2), createTicketValidate, async (req: Request, res: Response) => {
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